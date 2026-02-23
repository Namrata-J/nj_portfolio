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
        companyNote: 'joint venture with Zerodha',
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

export type code = {
    btn: string;
    link: string;
}

export type Project = {
    title: string;
    description: string;
    tech: string[];
    preview?: string;
    code?: code[];
    category: 'fullstack' | 'frontend' | 'library' | 'fun';
    featured: boolean;
    date: string;
    image: string;
};

export const projects: Project[] = [
  {
    title: 'TechTribe',
    description:
      "A full stack web application hosted on an AWS EC2 instance. Uses MongoDB Atlas with AWS as the cloud provider.",
    tech: [
      'Next.js',
      'TypeScript',
      'MUI v5',
      'Redux Toolkit',
      'Socket.IO',
      'MongoDB',
      'Express.js',
      'Node.js',
      'AWS',
      'Resend',
    ],
    preview: 'https://thetechtribe.in/',
    code: [
      { btn: 'Frontend', link: 'https://github.com/Namrata-J/TechTribe_Frontend' },
      { btn: 'Backend', link: 'https://github.com/Namrata-J/TechTribe_Backend' },
    ],
    category: 'fullstack',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1752164574/mp_29.png',
    featured: true,
    date: '9 July, 2025',
  },

  {
    title: 'Relievo',
    description:
      "A dynamic component library to simplify UI building. MVP built in 40 hours during roc8's Moonshot Hackathon.",
    tech: ['React.js', 'Material UI', 'React Router'],
    preview: 'https://relievo.vercel.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/relievo' }],
    category: 'frontend',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1667756070/mp/mp_27.png',
    featured: true,
    date: 'Oct 31, 2022',
  },

  {
    title: 'EOT',
    description:
      'A social media SPA that allows users to share posts, interact, and explore content.',
    tech: ['React.js', 'Redux', 'Material UI', 'Mockbee', 'React Router'],
    preview: 'https://eot-social-media.netlify.app/',
    code: [
      { btn: 'Code', link: 'https://github.com/Namrata-J/EOT' },
      { btn: 'Features', link: 'https://github.com/Namrata-J/EOT/tree/dev#features' },
    ],
    category: 'frontend',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661670609/mp/mp1.png',
    featured: true,
    date: 'Jul 8, 2022',
  },

  {
    title: 'MusingStudio',
    description:
      'A video library app showcasing songs and albums across multiple artists and genres.',
    tech: [
      'React.js',
      'Vanilla CSS',
      'React Router',
      'Mockbee',
      'Cloudinary',
      'Toasts',
    ],
    preview: 'https://musingstudio.netlify.app/',
    code: [
      { btn: 'Code', link: 'https://github.com/Namrata-J/MusingStudio' },
      { btn: 'Features', link: 'https://github.com/Namrata-J/MusingStudio/tree/dev#features' },
    ],
    category: 'frontend',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661751358/mp/mp7.png',
    featured: true,
    date: 'May 27, 2022',
  },

  {
    title: 'TakeNotes',
    description:
      'A notes-taking app to manage tasks and workflows efficiently.',
    tech: [
      'React.js',
      'TypeScript',
      'Vanilla CSS',
      'React Router',
      'Mockbee',
      'Jest',
    ],
    preview: 'https://tknotes.netlify.app/',
    code: [
      { btn: 'Code', link: 'https://github.com/Namrata-J/TakeNotes' },
      { btn: 'Features', link: 'https://github.com/Namrata-J/TakeNotes/tree/dev#features' },
    ],
    category: 'frontend',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661751147/mp/mp6.png',
    featured: false,
    date: 'Mar 31, 2022',
  },

  {
    title: 'APRIZE',
    description:
      'An e-commerce store built using the custom Expeditech-UI component library.',
    tech: [
      'React.js',
      'Expeditech UI',
      'Vanilla CSS',
      'React Router',
      'Mockbee',
      'Cloudinary',
    ],
    preview: 'https://aprize-ecom-site.netlify.app/',
    code: [
      { btn: 'Code', link: 'https://github.com/Namrata-J/APRIZE' },
      { btn: 'Features', link: 'https://github.com/Namrata-J/APRIZE/tree/dev#features' },
    ],
    category: 'frontend',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661750960/mp/mp5.png',
    featured: true,
    date: 'Mar 14, 2022',
  },

  {
    title: 'Expeditech-UI',
    description:
      'A component library offering 10+ responsive UI components with utility classes.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    preview: 'https://expeditech-ui.netlify.app/',
    code: [
      { btn: 'Code', link: 'https://github.com/Namrata-J/Expeditech-UI' },
      { btn: 'Features', link: 'https://github.com/Namrata-J/Expeditech-UI/tree/dev#features' },
    ],
    category: 'library',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661750517/mp/mp4.png',
    featured: true,
    date: 'Jan 29, 2022',
  },

  {
    title: 'Framer Motion Animations',
    description:
      'A collection of smooth and interactive animations built using Framer Motion.',
    tech: ['Framer Motion', 'React.js'],
    preview: 'https://xjnx3j.csb.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Framer_motion_animations' }],
    category: 'frontend',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1752163516/mp__28.png',
    featured: false,
    date: 'Oct, 2023',
  },

  {
    title: 'Drive Car',
    description:
      'A 3D metaverse-style experience using React Three Fiber. Drive using arrow keys.',
    tech: ['React.js', 'React Three Fiber', 'WebGL'],
    preview: 'https://sz5x86.csb.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Drive_Car' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1667755682/mp/mp_26.png',
    featured: false,
    date: 'Sep 26, 2022',
  },

  {
    title: 'Where are my stockers!?',
    description:
      'Tells you the profit and loss you made in your stock purchase.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    preview: 'https://wherearemystockers.netlify.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Project-12' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1663816556/mp/mp-23.png',
    featured: false,
    date: 'Sep 11, 2021',
  },

  {
    title: 'Is your birthday a palindrome!?',
    description:
      'Checks if your birthday is a palindrome and finds the closest palindrome date if not.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    preview: 'https://isbirthdayapalindrome.netlify.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Project-11' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1663813106/mp/mp-22.png',
    featured: false,
    date: 'Sep 9, 2021',
  },

  {
    title: 'Fun With Triangles',
    description:
      'An interactive app that lets you explore and have fun with triangle calculations.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    preview: 'https://dofunwithtriangles.netlify.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Project-10' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1663774566/mp/mp-21.png',
    featured: false,
    date: 'Sep 8, 2021',
  },

  {
    title: 'Lucky Birthday',
    description:
      'Checks whether your birthday is lucky based on a fun numeric calculation.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    preview: 'https://dobcheck.netlify.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Is-your-birthday-lucky' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1662144114/mp/m-p-15.png',
    featured: false,
    date: 'Sep 7, 2021',
  },

  {
    title: 'Cash Register Manager',
    description:
      'Calculates the minimum number of notes to return to a customer.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    preview: 'https://c-r-m.netlify.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Cash-Register-Manager' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1662138266/mp/m-p14.png',
    featured: false,
    date: 'Sep 6, 2021',
  },

  {
    title: 'Symphonize',
    description:
      'A music recommendation app.',
    tech: ['React.js', 'HTML', 'CSS'],
    preview: 'https://xohzpc.csb.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Project-7' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1663862065/mp/mp-25.png',
    featured: false,
    date: 'Sep 5, 2021',
  },

  {
    title: 'C-A-S-E-S Interpreter',
    description:
      'An interpreter app built with React that interprets emoji meanings.',
    tech: ['React.js', 'HTML', 'CSS'],
    preview: 'https://nl7qc.csb.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Project-6' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1663821739/mp/mp-24.png',
    featured: false,
    date: 'Sep 1, 2021',
  },

  {
    title: 'Fun Translation App',
    description:
      'Translates text into fun fictional languages.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    preview: 'https://funcartoontranslations.netlify.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Project-5' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1663749654/mp/mp-20.png',
    featured: false,
    date: 'Aug 2, 2021',
  },

  {
    title: 'Banana Talks',
    description:
      'Translate English text into Minion language.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    preview: 'https://minionbananatalks.netlify.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Project-4' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1663685792/mp/mp_19.png',
    featured: false,
    date: 'Jul 27, 2021',
  },

  {
    title: 'Awesome Landing Page',
    description:
      'A clean business landing page showcasing firm and organization web presence.',
    tech: ['HTML', 'CSS'],
    preview: 'https://njlandingpage.netlify.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/Project-3' }],
    category: 'frontend',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661757475/mp/mp10.png',
    featured: false,
    date: 'Jul 16, 2021',
  },

  {
    title: 'Are you a Tvd fan?',
    description:
      'A CLI quiz app that tells you how big a TVD series fan you are.',
    tech: ['Node.js', 'CHALK'],
    preview: 'https://replit.com/@NamrataJain29/CLI-tvd-quiz?embed=1&output=1#index.js',
    code: [{ btn: 'Code', link: 'https://replit.com/@NamrataJain29/CLI-tvd-quiz#index.js' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661757219/mp/mp9.png',
    featured: false,
    date: 'Apr 16, 2021',
  },

  {
    title: 'How well do you know me?',
    description:
      'A CLI quiz app you can send to friends to find out who really knows you.',
    tech: ['Node.js', 'CHALK'],
    preview: 'https://replit.com/@NamrataJain29/CLI-quiz-app?embed=1&output=1#index.js',
    code: [{ btn: 'Code', link: 'https://replit.com/@NamrataJain29/CLI-quiz-app#index.js' }],
    category: 'fun',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661756618/mp/mp8.png',
    featured: false,
    date: 'Apr 15, 2021',
  },

  {
    title: 'Portfolio v2',
    description:
      'Portfolio made using ReactJs to showcase all projects, skills, blogs, and more.',
    tech: ['React.js', 'CSS'],
    preview: 'https://namratajain.netlify.app/',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/my_portfolio' }],
    category: 'frontend',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661836572/mp/mp-p.png',
    featured: false,
    date: 'Aug 27, 2022',
  },

  {
    title: 'Portfolio v1',
    description:
      'My first portfolio showcasing all early projects and works.',
    tech: ['HTML', 'CSS'],
    preview: 'https://nj-portfolio.netlify.app',
    code: [{ btn: 'Code', link: 'https://github.com/Namrata-J/portfolio' }],
    category: 'frontend',
    image: 'https://res.cloudinary.com/nj1508/image/upload/v1661671016/mp/mp3.png',
    featured: false,
    date: 'Jul 22, 2021',
  },
];

export const blogs = [
    {
        title: "Let's discuss authorization strategies!!",
        date: 'May 12, 2022',
        description: 'An in-depth look at different authorization strategies, from role-based access to token-based auth patterns.',
        link: 'https://namratajain.hashnode.dev/lets-discuss-authorization-strategies',
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661790398/mp/mp-b1.jpg',
        tags: ['Authorization', 'Security', 'Web Dev'],
    },
    {
        title: 'What are HTTP Requests and HTTP responses!!?? How do both of them differ!?',
        date: 'May 11, 2022',
        description: 'Breaking down the fundamentals of HTTP communication — request methods, status codes, headers, and the request-response lifecycle.',
        link: 'https://namratajain.hashnode.dev/what-are-http-requests-and-http-responses-how-do-both-of-them-differ',
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661790544/mp/mp-b2.jpg',
        tags: ['HTTP', 'Networking', 'Fundamentals'],
    },
    {
        title: 'Programming language vs scripting language',
        date: 'Feb 27, 2022',
        description: 'Exploring the key differences between programming and scripting languages, with real-world examples.',
        link: 'https://namratajain.hashnode.dev/programming-language-vs-scripting-language',
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661790647/mp/mp-b3.jpg',
        tags: ['Programming', 'Concepts'],
    },
    {
        title: 'Transpiler vs compiler vs interpreter',
        date: 'Feb 27, 2022',
        description: 'Understanding how code gets transformed and executed — comparing transpilers, compilers, and interpreters.',
        link: 'https://namratajain.hashnode.dev/transpiler-vs-compiler-vs-interpreter',
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661790759/mp/mp-b4.jpg',
        tags: ['Compiler', 'Programming', 'Concepts'],
    },
    {
        title: 'I got stucked while using onChange event in vanillaJs, know why!?',
        date: 'Oct 3, 2021',
        description: 'A personal debugging story — what went wrong with the onChange event in vanilla JS and the lesson learned from it.',
        link: 'https://namratajain.hashnode.dev/i-got-stucked-while-using-onchange-event-in-vanillajs-know-why',
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661790940/mp/mp-b5.jpg',
        tags: ['JavaScript', 'Debugging', 'VanillaJS'],
    },
    {
        title: 'Switching Techniques in computer networking!!',
        date: 'Sep 14, 2021',
        description: 'A breakdown of switching techniques in computer networking — what switching is and the different types.',
        link: 'https://namratajain.hashnode.dev/switching-techniques-in-computer-networking',
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661791023/mp/mp-b6.jpg',
        tags: ['Networking', 'Computer Science', 'Fundamentals'],
    },
    {
        title: 'What does encodeURI() mean!?',
        date: 'Aug 10, 2021',
        description: 'Why URI encoding is needed, how encodeURI() works, and when to use it in your web applications.',
        link: 'https://namratajain.hashnode.dev/what-does-encodeuri-mean',
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661791115/mp/mp-b7.jpg',
        tags: ['JavaScript', 'Web Dev', 'Fundamentals'],
    },
];

export const paintings = [
    {
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661793227/mp/mp-p1.jpg',
        link: 'https://www.instagram.com/p/CHVOnR1HBqX/',
    },
    {
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661793778/mp/mp-p2.jpg',
        link: 'https://www.instagram.com/p/CX5sA3mPvYu/',
    },
    {
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661793935/mp/mp-p3.jpg',
        link: 'https://www.instagram.com/p/CLWjwRGh6Ue/',
    },
    {
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661794121/mp/mp-p4.jpg',
        link: 'https://www.instagram.com/p/CIVoA1Jhhul/',
    },
    {
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661794245/mp/mp-p5.jpg',
        link: 'https://www.instagram.com/p/CF6dGAkAlTa/',
    },
    {
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661794342/mp/mp-p6.jpg',
        link: 'https://www.instagram.com/p/CFM_ufeBNFW/',
    },
    {
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661794425/mp/mp-p7.jpg',
        link: 'https://www.instagram.com/p/CD9RKAtgrba/',
    },
    {
        image: 'https://res.cloudinary.com/nj1508/image/upload/v1661794808/mp/mp-p8.jpg',
        link: 'https://www.instagram.com/p/CCB_98MgKLa/',
    },
];
