export const profile = {
  name: 'Raghav Bahety',
  firstName: 'Raghav',
  lastName: 'Bahety',
  role: 'Full-Stack Software Engineer',
  company: 'Alumnus Software',
  location: 'Kolkata, India',
  email: 'bahety.raghav5@gmail.com',
  github: 'https://github.com/RaghavB05',
  linkedin: 'https://www.linkedin.com/in/raghav-bahety',
  resumeUrl: '/Raghav_Bahety_Resume.pdf',
  currently: 'Building Thermo AI at Alumnus Software',
  tagline:
    'Full-stack engineer with 2+ years shipping AI-powered web and Android apps for US and enterprise clients. React + TypeScript on the front, Node.js and Python FastAPI behind it, PostgreSQL underneath, all running on GCP.',
  about: [
    'I’m a full-stack software engineer at Alumnus Software in Kolkata. Over the last 2+ years I’ve built AI-powered web and Android applications for US startups and enterprise clients, from the first commit through to production.',
    'Most of my work sits where the frontend meets the backend: React + TypeScript interfaces, a Node.js backend-for-frontend that handles auth and aggregation, Python FastAPI microservices and PostgreSQL, deployed on GCP Cloud Run and Cloud SQL.',
    'I enjoy the unglamorous parts of production LLM features as much as the demos: streaming chat that aborts cleanly, retrieval over real documents, and cutting the number of LLM calls each query needs so the bill goes down.',
  ],
}

export interface Stat {
  value: number
  prefix?: string
  suffix?: string
  label: string
}

export const stats: Stat[] = [
  { value: 2, suffix: '+ yrs', label: 'shipping production apps for US & enterprise clients' },
  { value: 60, prefix: '~', suffix: '%', label: 'lower LLM cost per query after the chat rework' },
  { value: 90, prefix: '~', suffix: '%', label: 'smaller screener payloads via BFF filtering' },
  { value: 9, label: 'FastAPI microservices behind the BFF I own' },
]

export interface Role {
  title: string
  period: string
}

export interface ExperienceItem {
  company: string
  location: string
  period: string
  roles: Role[]
  summary: string
  projects: { name: string; context: string; text: string }[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Alumnus Software Limited',
    location: 'Kolkata, India',
    period: 'Sep 2024 — Present',
    roles: [
      { title: 'Software Engineer', period: 'Sep 2025 — Present' },
      { title: 'Engineering Intern', period: 'Sep 2024 — Sep 2025' },
    ],
    summary:
      'Full-stack engineer across client and in-house products: React + TypeScript frontends, a Node.js BFF, Python FastAPI services, PostgreSQL / SQL Server, and GCP deployments.',
    projects: [
      {
        name: 'Stockastic',
        context: 'Stock research platform',
        text: 'Own the React + TypeScript frontend and the Node.js BFF in front of 9 FastAPI microservices.',
      },
      {
        name: 'Thermo AI',
        context: 'Enterprise client',
        text: 'Building the frontend and SQL Server data model for an AI-adoption analytics dashboard.',
      },
      {
        name: 'HomeGuru',
        context: 'US startup client',
        text: 'Built the React frontend with streaming chat, plus FastAPI user management with JWT and email verification.',
      },
      {
        name: 'Zebra Zac',
        context: 'Zebra Technologies',
        text: 'Rewrote the Android frontend in Kotlin + Jetpack Compose (MVVM); piloted in US stores.',
      },
    ],
  },
  {
    company: 'Magitech Innovision Pvt. Ltd.',
    location: 'Guwahati, India',
    period: 'Jan 2024 — Jun 2024',
    roles: [{ title: 'Frontend Developer Intern', period: 'Jan 2024 — Jun 2024' }],
    summary: 'Event registration and ticketing products built with React and Firebase.',
    projects: [
      {
        name: 'EventBoom.in',
        context: 'Gauhati University fest',
        text: 'Co-built, in a two-person team, an event registration and ticketing site in React and Firebase that handled 1,000+ registrations during peak periods.',
      },
      {
        name: 'AIM Quest',
        context: 'Assam Institute of Management',
        text: 'Built an event registration portal with automated ticket generation for 500+ participants.',
      },
    ],
  },
]

export type WorkVisual = 'chart' | 'chat' | 'dashboard' | 'mobile'

export interface FeaturedWork {
  id: string
  name: string
  tagline: string
  context: string
  status: string
  visual: WorkVisual
  metrics: { value: string; label: string }[]
  points: string[]
  tech: string[]
}

export const featuredWork: FeaturedWork[] = [
  {
    id: 'stockastic',
    name: 'Stockastic',
    tagline: 'Stock research & recommendation platform across NSE, NYSE and LSE.',
    context: 'Alumnus Software',
    status: 'Closed beta with full-time traders',
    visual: 'chart',
    metrics: [
      { value: '5 → 2', label: 'LLM calls per query' },
      { value: '~60%', label: 'lower LLM cost' },
      { value: '~90%', label: 'smaller payloads' },
    ],
    points: [
      'Own the React + TypeScript frontend and the Node.js backend-for-frontend that handles auth, user management and aggregation over 9 FastAPI microservices, deployed to Firebase Hosting and Cloud Run with secrets in Secret Manager.',
      'Built JWT authentication with rotating refresh tokens and a queued single-flight refresh that fixed logouts under concurrent requests. Service-to-service calls use short-lived signed internal tokens carrying the user identity.',
      'Designed and own the user-management schema in PostgreSQL (Cloud SQL). The BFF filters screener responses before they reach the client, cutting payload size by about 90%, and caches end-of-day data in Redis.',
      'In the AI chat service rework that cut LLM calls per query from about 5 to 2, replaced LLM ticker resolution with a tiered lookup: exact match, PostgreSQL trigram fuzzy matching, then a validated LLM fallback.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'Cloud Run', 'Secret Manager'],
  },
  {
    id: 'homeguru',
    name: 'HomeGuru',
    tagline: 'AI research assistant for US home buyers, answering questions over property documents.',
    context: 'US startup client',
    status: 'POC delivered; client raised seed funding',
    visual: 'chat',
    metrics: [{ value: 'RAG', label: 'over uploaded property docs' }],
    points: [
      'Built the complete React frontend, including a streaming chat interface (fetch + ReadableStream) that aborts cleanly on session switch while answers finish and persist server-side.',
      'Implemented backend user management in FastAPI with JWT authentication and email verification, for a RAG system built on the OpenAI API.',
      'Delivered as a proof of concept. The client went on to raise seed funding and moved development in-house.',
    ],
    tech: ['React', 'FastAPI', 'OpenAI API', 'RAG', 'JWT'],
  },
  {
    id: 'thermo-ai',
    name: 'Thermo AI',
    tagline: 'AI-adoption analytics dashboard measuring how AI tooling changes engineering productivity.',
    context: 'Enterprise client',
    status: 'In progress · started Nov 2026',
    visual: 'dashboard',
    metrics: [{ value: '5', label: 'engineering data sources' }],
    points: [
      'Building the React + TypeScript frontend and the Microsoft SQL Server data model for a dashboard that combines GitHub Copilot usage with GitHub, Jira, SonarQube and Codebeamer metrics.',
      'Tracks PR cycle time, sprint velocity and code quality to measure AI-driven productivity.',
    ],
    tech: ['React', 'TypeScript', 'SQL Server', 'GitHub Copilot', 'Jira', 'SonarQube'],
  },
  {
    id: 'zebra-zac',
    name: 'Zebra Zac',
    tagline: 'Android support & inventory chatbot for retail store associates.',
    context: 'Zebra Technologies',
    status: 'Phase 1 piloted in US stores',
    visual: 'mobile',
    metrics: [{ value: 'Java → Kotlin', label: 'full frontend rewrite' }],
    points: [
      'Rewrote the app’s frontend from Java/XML to Kotlin and Jetpack Compose with an MVVM architecture and a repository layer over REST APIs.',
      'Built the chat interface. Phase 1 was piloted in Zebra-operated stores in the US.',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'MVVM', 'REST APIs'],
  },
]

export interface Project {
  title: string
  description: string
  tech: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    title: 'BT-Clothing',
    description:
      'E-commerce platform with user authentication, a persistent cart and Stripe payment processing.',
    tech: ['React', 'TypeScript', 'Firebase', 'Stripe'],
    github: 'https://github.com/RaghavB05/BT-clothing',
  },
  {
    title: 'Campus Connect',
    description:
      'Community resource-sharing platform for students (buy & sell, important contacts, timetables) with custom CRUD operations and a relational schema.',
    tech: ['Django', 'Python', 'SQL'],
    github: 'https://github.com/mayank-kr/CampusConnect',
  },
  {
    title: 'ENTROPY Fest Website',
    description:
      'Official website for IIIT Guwahati’s annual technical fest. Led the web team and coordinated design and backend to ship on schedule.',
    tech: ['React', 'JavaScript', 'SCSS'],
    live: 'https://entropy2022.live/',
  },
  {
    title: 'Weather App',
    description: 'Weather application that fetches live data from a weather API, with a clean, responsive interface.',
    tech: ['React', 'REST API', 'CSS'],
    github: 'https://github.com/RaghavB05/Weather_App',
  },
]

export const skills: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: ['TypeScript', 'JavaScript (ES6+)', 'Java', 'Python', 'Kotlin', 'SQL', 'HTML5', 'CSS3'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'TanStack Query', 'Vite', 'Tailwind CSS', 'Jetpack Compose (MVVM)'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'FastAPI', 'RESTful APIs', 'Microservices', 'JWT Authentication', 'OpenAI API'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['GCP Cloud Run', 'Cloud SQL', 'Secret Manager', 'Firebase Hosting', 'Docker', 'Git'],
  },
  {
    category: 'Databases & Tools',
    items: ['PostgreSQL', 'Microsoft SQL Server', 'Redis', 'MongoDB', 'Firebase Firestore', 'Postman'],
  },
]

export const marquee = [
  'React',
  'TypeScript',
  'Node.js',
  'FastAPI',
  'PostgreSQL',
  'Redis',
  'GCP Cloud Run',
  'OpenAI API',
  'Kotlin',
  'Jetpack Compose',
  'TanStack Query',
  'Docker',
  'Tailwind CSS',
  'SQL Server',
]

export const education = [
  {
    school: 'Indian Institute of Information Technology (IIIT), Guwahati',
    degree: 'B.Tech, Computer Science and Engineering',
    period: '2020 — 2024',
    detail: 'CPI 8.15 / 10',
  },
  {
    school: 'Sri R.N.S. Memorial High School, Kolkata',
    degree: 'Senior Secondary (ISC, Class XII)',
    period: '2020',
    detail: '91.2%',
  },
]

export const achievements = [
  {
    title: 'Lead Member (Web), ENTROPY Technical Fest',
    text: 'Led development of IIIT Guwahati’s annual tech-fest website, coordinating across design and backend teams to ship on schedule.',
  },
  {
    title: 'Competitive Programming',
    text: 'Solved 300+ problems on LeetCode and CodeChef.',
  },
]
