export const profile = {
  name: 'Raghav Bahety',
  role: 'Full-Stack Software Engineer',
  company: 'Alumnus Software Limited',
  location: 'Kolkata, India',
  email: 'bahety.raghav5@gmail.com',
  github: 'https://github.com/RaghavB05',
  linkedin: 'https://www.linkedin.com/in/raghav-bahety',
  resumeUrl: '/Raghav_Bahety_Resume.pdf',
  tagline:
    'I build production web, Android, and AI-powered applications — React + TypeScript frontends, Node.js middleware, and Python microservices, deployed on GCP and AWS.',
  about: [
    'I am a full-stack software engineer with 2+ years of experience delivering production applications for US and enterprise clients across real estate, fintech, retail, and event-tech domains.',
    'Currently at Alumnus Software in Kolkata, I have shipped everything from an AI-powered property-analysis platform that anchored a client’s investor pitch, to an Android chatbot piloted in Zebra-operated retail stores in the US, to a full-stack stock trading platform.',
    'I care about clean component architecture, type-safe code, and shipping features that hold up in production — and I handle the cloud side too, deploying and maintaining services on GCP and AWS.',
  ],
}

export const stats = [
  {
    value: '2+ years',
    text: 'building production apps for US and enterprise clients',
  },
  {
    value: '9 microservices',
    text: 'Python FastAPI services rearchitected for scalability and performance',
  },
  {
    value: '8 PDF schemas',
    text: 'parsed by an AI property-analysis POC that anchored a client’s investor pitch',
  },
]

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  promotion?: string
  highlights: { name: string; client?: string; text: string }[]
}

export const experience: ExperienceItem[] = [
  {
    company: 'Alumnus Software Limited',
    role: 'Software Engineer',
    period: 'Sep 2024 — Present',
    location: 'Kolkata, India',
    promotion: 'Promoted from Engineering Intern in Sep 2025',
    highlights: [
      {
        name: 'HomeGuru — Real Estate AI',
        client: 'US startup client',
        text: 'Built a full-stack AI property-analysis proof of concept that parsed 8 distinct PDF schemas (MLS listings, inspection reports, permits) using the OpenAI API for automated data extraction and semantic querying. The POC anchored the client’s investor funding pitch.',
      },
      {
        name: 'Zebra Zac — Android Chatbot',
        client: 'Zebra Technologies',
        text: 'Developed the Phase-1 chatbot app in Kotlin and Jetpack Compose, designing the conversational UI flow and integrating secure REST APIs for wholesale inventory queries. Piloted in Zebra-operated retail stores in the US.',
      },
      {
        name: 'Alumnus Stock Trader — FinTech',
        text: 'Owned end-to-end development of the React (TypeScript) frontend and Node.js middleware for a full-stack stock trading platform, and contributed to rearchitecting 9 Python FastAPI microservices for improved scalability and performance.',
      },
      {
        name: 'ICON Clarify — Real Estate',
        text: 'Developed the seller-side portal and drove its migration to React + TypeScript + Vite, establishing a modular component architecture and cleaner state management to speed up feature delivery.',
      },
      {
        name: 'Cloud & DevOps',
        text: 'Deployed and maintained application services on GCP, handling cloud infrastructure, environment configuration, and releases across projects.',
      },
    ],
  },
  {
    company: 'Magitech Innovision Pvt. Ltd.',
    role: 'Frontend Developer Intern',
    period: 'Jan 2024 — Jun 2024',
    location: 'Guwahati, India',
    highlights: [
      {
        name: 'EventBoom.in',
        text: 'Built a scalable event-management frontend with React.js and Firebase, hosted on AWS; handled 1,000+ registrations during peak event periods.',
      },
      {
        name: 'AIM Quest',
        text: 'Engineered a registration portal for the Assam Institute of Management with automated ticket generation, serving 500+ participants.',
      },
    ],
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
      'Full e-commerce platform with user authentication, persistent cart, and secure payment processing via the Stripe API.',
    tech: ['React', 'TypeScript', 'Firebase', 'Stripe'],
    github: 'https://github.com/RaghavB05/BT-clothing',
  },
  {
    title: 'Campus Connect',
    description:
      'Community resource-sharing platform for students — buy & sell, important contacts, timetables — with custom CRUD operations and relational schema design.',
    tech: ['Django', 'Python', 'SQL'],
    github: 'https://github.com/mayank-kr/CampusConnect',
  },
  {
    title: 'ENTROPY Fest Website',
    description:
      'Official website of IIIT Guwahati’s annual technical fest. Led the web team, coordinating design and backend to ship on schedule.',
    tech: ['React', 'JavaScript', 'SCSS'],
    live: 'https://entropy2022.live/',
  },
  {
    title: 'Weather App',
    description:
      'Dynamic weather application fetching live data from a weather API with a clean, responsive interface.',
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
    items: ['React.js', 'Redux', 'Vite', 'Jetpack Compose', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'FastAPI', 'Flask', 'Django', 'RESTful APIs', 'Microservices', 'OpenAI API'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['GCP', 'AWS (S3, EC2)', 'Firebase', 'Netlify', 'Vercel', 'Git'],
  },
  {
    category: 'Databases & Tools',
    items: ['MySQL', 'MongoDB', 'Firebase Firestore', 'Postman'],
  },
]

export const education = [
  {
    school: 'Indian Institute of Information Technology (IIIT), Guwahati',
    degree: 'B.Tech, Computer Science and Engineering',
    period: '2020 — 2024',
    detail: 'CPI: 8.15 / 10',
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
    text: 'Solved 300+ algorithmic problems on LeetCode and CodeChef, with strong command of data structures and algorithms.',
  },
]
