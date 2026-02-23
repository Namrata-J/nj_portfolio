export const personalInfo = {
    name: 'Namrata Jain',
    role: 'Software Engineer',
    tagline: 'Problem-solver by mindset, engineer by profession—crafting reliable systems and intuitive interfaces.',
    bio: 'Senior UI-focused Full Stack Engineer with expertise in React, Next.js, TypeScript, and Node.js, specializing in responsive UI, prerendering, performance optimization, SEO, accessibility, and security. Proven impact on Core Web Vitals (LCP, INP, CLS), user retention, and engagement. Experienced in end-to-end module ownership, third-party integrations, real-time systems, and AWS-based deployments.',
    email: 'namratajain29001@gmail.com',
    resumeLink: 'https://flowcv.com/resume/97swshms4s',
    social: {
        github: 'https://github.com/Namrata-J',
        linkedin: 'https://www.linkedin.com/in/namrata-jain-2b6203216/',
        twitter: 'https://twitter.com/muse_the_coder',
        instagram: 'https://www.instagram.com/artwithease/',
        hashnode: 'https://namratajain.hashnode.dev/',
    },
};

export const experience = [
    {
        title: 'Senior Software Engineer',
        company: 'PensionBox',
        companyNote: '(joint venture with Zerodha)',
        period: 'Sep 2023 – Present',
        description: 'Built and scaled the corporate NPS fullstack flows that became the basis of Zerodha PensionBox Joint Venture and majority stake acquisition.',
        tech: ['NextJS - pages Router', 'NodeJS', 'AWS', 'MySQL', 'MUIv5', 'Framer Motion', 'Redux'],
    },
    {
        title: 'Frontend Engineer',
        company: 'Binks',
        companyNote: '',
        period: 'Jun 2022 – Aug 2023',
        description: 'Developed user-facing web applications, building their iOS and Android app.',
        tech: ['ReactNative', 'Redux', 'MUIv5', 'Xcode', 'Android Studio'],
    },
];

export const education = [
    {
        degree: 'Bachelor in Computer Applications (BCA)',
        school: 'Anand Engineering College, Agra',
        year: '2019 - 2022',
    },
    {
        degree: 'NeoG \'22 Web Dev Bootcamp',
        school: 'Full-stack web development bootcamp',
        year: '2022',
    },
];

export const skills = {
    frontend: ['React.js', 'Next.js', 'ReactNative', 'TypeScript', 'Redux Toolkit', 'Context API', 'React Router', 'MUIv5', 'Framer Motion', 'Jest', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    backend: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Socket.io', 'Strapi'],
    performance: ['Core Web Vitals (LCP, INP, CLS)', 'Prerendering', 'Accessibility (a11y)', 'Web Performance Optimization', 'Security'],
    tools: ['AWS', 'Nginx', 'PM2', 'Cloudflare', 'Android Studio', 'Xcode', 'Git'],
};

export type Project = {
    title: string;
    description: string;
    tech: string[];
    preview?: string;
    code?: string;
    category: 'fullstack' | 'frontend' | 'library' | 'fun';
    featured: boolean;
};

export const projects: Project[] = [
    {
        title: 'TechTribe',
        description: 'A full-stack social platform for tech enthusiasts with real-time chat, user profiles, and community features.',
        tech: ['Next.js', 'TypeScript', 'MUI v5', 'Redux', 'Socket.IO', 'MongoDB', 'Node.js', 'AWS EC2'],
        preview: 'https://thetechtribe.in/',
        category: 'fullstack',
        featured: true,
    },
    {
        title: 'EOT',
        description: 'A social media platform for connecting and sharing — built with a focus on clean UI and smooth user interactions.',
        tech: ['React.js', 'Redux', 'Material UI'],
        code: 'https://github.com/Namrata-J/EOT',
        category: 'fullstack',
        featured: true,
    },
    {
        title: 'MusingStudio',
        description: 'A curated video library for discovering songs and albums with categorisation and responsive design.',
        tech: ['React.js', 'Vanilla CSS', 'Cloudinary'],
        preview: 'https://musingstudio.netlify.app/',
        category: 'frontend',
        featured: true,
    },
    {
        title: 'APRIZE',
        description: 'An e-commerce store built using the custom Expeditech-UI component library with cart, wishlist, and filtering.',
        tech: ['React.js', 'Expeditech-UI', 'CSS'],
        preview: 'https://aprize-ecom-site.netlify.app/',
        category: 'frontend',
        featured: true,
    },
    {
        title: 'Expeditech-UI',
        description: 'A reusable component library with 10+ responsive, customisable UI components and comprehensive documentation.',
        tech: ['React.js', 'CSS', 'Documentation'],
        preview: 'https://expeditech-ui.netlify.app/',
        category: 'library',
        featured: true,
    },
    {
        title: 'Drive Car',
        description: 'An immersive 3D metaverse experience with interactive car models built with React Three Fiber.',
        tech: ['React.js', 'React Three Fiber', '3D', 'WebGL'],
        category: 'fun',
        featured: true,
    },
    {
        title: 'Are you a TVD Fan?',
        description: 'A fun CLI quiz app that tests your knowledge of The Vampire Diaries with colourful terminal output.',
        tech: ['Node.js', 'Chalk'],
        category: 'fun',
        featured: false,
    },
    {
        title: 'How Well Do You Know Me?',
        description: 'An interactive CLI personality quiz with fun questions and score tracking.',
        tech: ['Node.js', 'Chalk'],
        category: 'fun',
        featured: false,
    },
    {
        title: 'Lucky Birthday',
        description: 'A fun app that reveals interesting facts about your birthday using creative animations.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        category: 'fun',
        featured: false,
    },
    {
        title: 'Cash Register Manager',
        description: 'A utility app to manage cash register transactions and track denominations.',
        tech: ['JavaScript', 'HTML', 'CSS'],
        category: 'fun',
        featured: false,
    },
    {
        title: 'Fun Translation App',
        description: 'Translate text into fun languages like Yoda speak, pirate talk, and more using external APIs.',
        tech: ['JavaScript', 'REST APIs', 'CSS'],
        category: 'fun',
        featured: false,
    },
    {
        title: 'Banana Talks',
        description: 'A quirky app translating text into Minion language for fun conversations.',
        tech: ['JavaScript', 'API', 'CSS'],
        category: 'fun',
        featured: false,
    },
];

export const blogs = [
    {
        title: "Let's discuss authorization strategies!!",
        date: 'May 12, 2022',
        description: 'An in-depth look at different authorization strategies, from role-based access to token-based auth patterns.',
        link: 'https://namratajain.hashnode.dev/',
        tags: ['Authorization', 'Security', 'Web Dev'],
    },
    {
        title: 'What are HTTP Requests and HTTP responses!!??',
        date: 'May 11, 2022',
        description: 'Breaking down the fundamentals of HTTP communication — request methods, status codes, headers, and the request-response lifecycle.',
        link: 'https://namratajain.hashnode.dev/',
        tags: ['HTTP', 'Networking', 'Fundamentals'],
    },
    {
        title: 'Programming language vs scripting language',
        date: 'Feb 27, 2022',
        description: 'Exploring the key differences between programming and scripting languages, with real-world examples.',
        link: 'https://namratajain.hashnode.dev/',
        tags: ['Programming', 'Concepts'],
    },
    {
        title: 'Transpiler vs compiler vs interpreter',
        date: 'Feb 27, 2022',
        description: 'Understanding how code gets transformed and executed — comparing transpilers, compilers, and interpreters.',
        link: 'https://namratajain.hashnode.dev/',
        tags: ['Compiler', 'Programming', 'Concepts'],
    },
];

export const paintings = [
    {
        title: 'Sunset Serenity',
        description: 'An oil painting capturing the warm hues of a tranquil sunset over rolling hills.',
        image: '/paintings/painting1.jpg',
    },
    {
        title: 'Abstract Bloom',
        description: 'A vibrant abstract piece with flowing floral patterns in acrylic.',
        image: '/paintings/painting2.jpg',
    },
    {
        title: 'Mountain Mist',
        description: 'Misty mountain landscape painted with soft watercolour strokes.',
        image: '/paintings/painting3.jpg',
    },
    {
        title: 'Ocean Dreams',
        description: 'Deep blue ocean waves crashing against rocky shores at twilight.',
        image: '/paintings/painting4.jpg',
    },
    {
        title: 'Garden of Light',
        description: 'A lush garden scene with dappled sunlight filtering through the canopy.',
        image: '/paintings/painting5.jpg',
    },
    {
        title: 'Cosmic Dancer',
        description: 'An ethereal figure dancing amid swirling galaxies and stardust.',
        image: '/paintings/painting6.jpg',
    },
];
