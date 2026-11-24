import { useMemo, useRef, type ReactNode } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float, Lightformer, MeshTransmissionMaterial } from '@react-three/drei'
import { Bloom, EffectComposer, Vignette } from '@react-three/postprocessing'

const VIOLET = new THREE.Color('#8b5cf6')
const CYAN = new THREE.Color('#22d3ee')
const LILAC = new THREE.Color('#c4b5fd')
const INK = new THREE.Color('#040406')

interface SceneProps {
  /** Lighter materials, fewer particles, no post-processing. */
  lite: boolean
  /** Pause the render loop when the hero is off-screen. */
  active: boolean
}

/** Glass torus knot. Desktop gets real refraction; mobile gets iridescent black chrome. */
function GlassKnot({ lite }: { lite: boolean }) {
  const ref = useRef<THREE.Mesh>(null!)
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * 0.1
    ref.current.rotation.y += delta * 0.16
  })

  return (
    <mesh ref={ref}>
      <torusKnotGeometry args={[1, 0.34, lite ? 160 : 300, lite ? 24 : 48]} />
      {lite ? (
        <meshPhysicalMaterial
          color="#14111f"
          metalness={0.9}
          roughness={0.12}
          iridescence={1}
          iridescenceIOR={1.4}
          iridescenceThicknessMinimum={200}
          iridescenceThicknessMaximum={800}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      ) : (
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.4}
          samples={6}
          resolution={512}
          thickness={0.7}
          roughness={0.06}
          ior={1.35}
          chromaticAberration={0.08}
          anisotropicBlur={0.15}
          distortion={0.35}
          distortionScale={0.4}
          temporalDistortion={0.12}
          iridescence={1}
          iridescenceIOR={1.3}
          iridescenceThicknessMinimum={0}
          iridescenceThicknessMaximum={1400}
          color="#e9e3ff"
          attenuationColor="#a78bfa"
          attenuationDistance={2.2}
          background={INK}
        />
      )}
    </mesh>
  )
}

/** Emissive orbs + a thin halo ring orbiting the knot. They give the glass something to refract and bloom. */
function Orbits({ lite }: { lite: boolean }) {
  // HDR colours (>1) feed the bloom pass; without bloom they'd clip to grey-white.
  const c = (hdr: [number, number, number], ldr: string) => (lite ? ldr : hdr)
  const ring = useRef<THREE.Group>(null!)
  const orbs = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    orbs.current.rotation.z += delta * 0.35
    orbs.current.rotation.y += delta * 0.22
    ring.current.rotation.z -= delta * 0.08
    ring.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.25 + 1.2
  })

  return (
    <>
      <group ref={orbs}>
        <mesh position={[1.95, 0.35, -0.4]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshBasicMaterial color={c([1.5, 0.85, 3.2], '#a78bfa')} toneMapped={false} />
        </mesh>
        <mesh position={[-1.75, -0.7, -0.6]}>
          <sphereGeometry args={[0.12, 32, 32]} />
          <meshBasicMaterial color={c([0.4, 2.2, 2.8], '#22d3ee')} toneMapped={false} />
        </mesh>
        <mesh position={[0.2, 1.8, -1.2]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshBasicMaterial color={c([3, 2.6, 4], '#ddd6fe')} toneMapped={false} />
        </mesh>
      </group>
      <group ref={ring}>
        <mesh>
          <torusGeometry args={[2.05, 0.007, 12, 220]} />
          <meshBasicMaterial color={c([1.6, 1.1, 3.4], '#8b5cf6')} toneMapped={false} />
        </mesh>
        <mesh rotation={[0.4, 0.3, 0]}>
          <torusGeometry args={[2.4, 0.005, 12, 220]} />
          <meshBasicMaterial color={c([0.4, 2, 2.6], '#22d3ee')} toneMapped={false} transparent opacity={0.6} />
        </mesh>
      </group>
    </>
  )
}

/** A slowly turning galaxy of violet/cyan points. */
function ParticleField({ count }: { count: number }) {
  const ref = useRef<THREE.Points>(null!)

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    const tmp = new THREE.Color()
    for (let i = 0; i < count; i++) {
      // Distribute in a thick shell, flattened slightly into a disc.
      const r = 3.2 + Math.pow(Math.random(), 0.7) * 9
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.55
      pos[i * 3 + 2] = r * Math.cos(phi) - 2
      const t = Math.random()
      tmp.copy(VIOLET).lerp(t > 0.5 ? CYAN : LILAC, Math.random())
      col[i * 3] = tmp.r
      col[i * 3 + 1] = tmp.g
      col[i * 3 + 2] = tmp.b
    }
    return [pos, col]
  }, [count])

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.025
    ref.current.rotation.x += delta * 0.006
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

/** Follows the pointer with damping, shifts right on wide screens, and drifts away as the page scrolls. */
function Rig({ children }: { children: ReactNode }) {
  const ref = useRef<THREE.Group>(null!)
  const { viewport } = useThree()
  const wide = viewport.aspect > 1.15
  const baseX = wide ? viewport.width * 0.25 : 0
  const scale = THREE.MathUtils.clamp(viewport.width / 5.2, 0.6, 0.86)

  useFrame((state, delta) => {
    const g = ref.current
    const scroll = Math.min(window.scrollY / window.innerHeight, 1.2)
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, state.pointer.x * 0.45, 2.5, delta)
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -state.pointer.y * 0.3 + scroll * 0.6, 2.5, delta)
    g.position.x = THREE.MathUtils.damp(g.position.x, baseX + state.pointer.x * 0.15, 2.5, delta)
    g.position.y = THREE.MathUtils.damp(g.position.y, (wide ? 0 : 0.9) + scroll * 1.6, 3, delta)
    const s = scale * (1 - scroll * 0.25)
    g.scale.setScalar(THREE.MathUtils.damp(g.scale.x, s, 3, delta))
  })

  return <group ref={ref}>{children}</group>
}

function Lighting() {
  return (
    <Environment resolution={256} frames={1}>
      <group rotation={[-Math.PI / 3, 0, 1]}>
        <Lightformer form="circle" intensity={5} color="#8b5cf6" position={[0, 5, -9]} scale={3} />
        <Lightformer form="circle" intensity={3} color="#22d3ee" position={[-5, 1, -1]} rotation-y={Math.PI / 2} scale={2.5} />
        <Lightformer form="ring" intensity={2} color="#ffffff" position={[-5, -1, -1]} rotation-y={Math.PI / 2} scale={8} />
        <Lightformer form="rect" intensity={3} color="#c4b5fd" position={[10, 1, 0]} rotation-y={-Math.PI / 2} scale={[50, 2, 1]} />
        <Lightformer form="rect" intensity={1.5} color="#06b6d4" position={[-10, -2, 0]} rotation-y={Math.PI / 2} scale={[50, 1, 1]} />
      </group>
    </Environment>
  )
}

export default function HeroScene({ lite, active }: SceneProps) {
  return (
    <Canvas
      frameloop={active ? 'always' : 'never'}
      dpr={[1, lite ? 1.5 : 1.75]}
      camera={{ position: [0, 0, 6.2], fov: 40 }}
      gl={{ alpha: true, antialias: lite, powerPreference: 'high-performance' }}
      eventSource={document.getElementById('root') ?? undefined}
      eventPrefix="client"
    >
      <Lighting />
      <Rig>
        <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.6}>
          <GlassKnot lite={lite} />
        </Float>
        <Orbits lite={lite} />
      </Rig>
      <ParticleField count={lite ? 900 : 2600} />
      {!lite && (
        <EffectComposer multisampling={0}>
          <Bloom mipmapBlur luminanceThreshold={1} luminanceSmoothing={0.2} intensity={0.9} radius={0.7} />
          <Vignette eskil={false} offset={0.25} darkness={0.7} />
        </EffectComposer>
      )}
    </Canvas>
  )
}
