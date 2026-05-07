import { BiLogoJavascript } from "react-icons/bi";
import {
    FaCss3,
    FaFacebook,
    FaHtml5,
    FaInstagram,
    FaLinkedin,
    FaNodeJs,
    FaReact,
    FaGithubAlt
} from "react-icons/fa";
import { FaGitAlt, FaXTwitter } from "react-icons/fa6";
import { MdGroups3 } from "react-icons/md";
import { SiExpress, SiMongodb, SiMysql, SiWebpack } from "react-icons/si";
import {
    VscCommentUnresolved,
    VscTerminalPowershell,
    VscVscode
} from "react-icons/vsc";

export const NAVBAR = {
    menuLinks: [
        { id: "01", label: "Home", offset: -100, to: "hero" },
        { id: "02", label: "Skills", offset: -80, to: "skills" },
        { id: "03", label: "About", offset: -80, to: "about" },
        { id: "04", label: "Projects", offset: -80, to: "projects" },
        { id: "05", label: "Contact", offset: -80, to: "contact" }
    ],
    logoAlt: "Brand",
    menuButton: {
        openAriaLabel: "Open menu",
        closeAriaLabel: "Close menu"
    },
    hireMeLabel: "Hire me",
    hireMeTarget: {
        to: "contact",
        offset: -80
    }
};

export const STATS = [
    { id: "01", value: "10", label: "Years of \nWork" },
    { id: "02", value: "2", label: "Certificates \nCompleted" },
    { id: "03", value: "43", label: "Projects \nDone" },
    { id: "04", value: "37+", label: "Happy \nClients" }
];

export const HERO = {
    greeting: "Hi, I'm Liam Pham",
    headline: "Front-End Developer Building React and Next.js Web Apps",
    description:
        "I build responsive, accessible, SEO-friendly websites and web applications with React, Next.js, TypeScript, and Tailwind CSS. My focus is fast performance, clean UI, and business-ready user experiences.",
    resume: {
        url: "/PHAM_VAN_VIET_FRONT_END_DEVELOPER.pdf",
        viewButtonLabel: "View Resume",
        fileName: "PHAM_VAN_VIET_FRONT_END_DEVELOPER.pdf"
    },
    images: {
        profileAlt: "Liam Pham",
        reactAlt: "React Icon",
        nodeAlt: "Node.js Icon",
        htmlAlt: "HTML Icon",
        jsAlt: "JavaScript Icon"
    }
};

export const TECHNICAL_PROFICIENCY = {
    title: "Technical Proficiency",
    description:
        "I build modern front-end and full-stack web experiences with React, Next.js, TypeScript, Node.js, Express, MongoDB, and MySQL. My focus is semantic HTML, responsive design, accessibility, performance, and maintainable code.",
    tabs: [
        { id: "01", label: "All", value: "all" },
        { id: "02", label: "Frontend", value: "frontend" },
        { id: "03", label: "Backend", value: "backend" },
        { id: "04", label: "Tools", value: "tools" },
        { id: "05", label: "Skills", value: "soft-skills" }
    ],
    skills: [
        {
            id: "01",
            icon: FaReact,
            skill: "React JS",
            progress: 95,
            type: "frontend",
            description:
                "I have a lot of experience building web apps with React JS, including state management with Redux and Context API."
        },
        {
            id: "02",
            icon: FaHtml5,
            skill: "HTML",
            progress: 99,
            type: "frontend",
            description:
                "I have strong HTML skills and I use semantic and accessible markup in web development."
        },
        {
            id: "03",
            icon: FaCss3,
            skill: "CSS",
            progress: 85,
            type: "frontend",
            description:
                "I have good CSS skills and build responsive, clean, and user-friendly interfaces."
        },
        {
            id: "04",
            icon: BiLogoJavascript,
            skill: "JavaScript",
            progress: 90,
            type: "frontend",
            description:
                "I have strong JavaScript skills and use it to build dynamic and interactive web applications."
        },
        {
            id: "05",
            icon: FaNodeJs,
            skill: "Node JS",
            progress: 95,
            type: "backend",
            description:
                "I have good experience with Node JS, including RESTful APIs and server-side rendering."
        },
        {
            id: "06",
            icon: SiExpress,
            skill: "Express JS",
            progress: 98,
            type: "backend",
            description:
                "I have good experience with Express JS, including RESTful APIs and backend support."
        },
        {
            id: "07",
            icon: SiMongodb,
            skill: "MongoDB",
            progress: 75,
            type: "backend",
            description:
                "I have experience with MongoDB, including data modeling and database management."
        },
        {
            id: "08",
            icon: SiMysql,
            skill: "MySQL",
            progress: 80,
            type: "backend",
            description:
                "I have experience with MySQL, including data modeling and database management."
        },
        {
            id: "09",
            icon: FaGitAlt,
            skill: "Git & GitHub",
            progress: 90,
            type: "tools",
            description:
                "I use Git for version control, including branching, merging, and solving conflicts."
        },
        {
            id: "10",
            icon: VscVscode,
            skill: "Visual Studio Code",
            progress: 85,
            type: "tools",
            description:
                "I use Visual Studio Code for web development, including debugging, formatting, and code completion."
        },
        {
            id: "11",
            icon: SiWebpack,
            skill: "Webpack",
            progress: 90,
            type: "tools",
            description:
                "I use Webpack to optimize and bundle JavaScript and CSS for production."
        },
        {
            id: "12",
            icon: VscCommentUnresolved,
            skill: "Problem Solving",
            progress: 90,
            type: "soft-skills",
            description:
                "I can solve complex problems and find simple, effective solutions."
        },
        {
            id: "13",
            icon: MdGroups3,
            skill: "Collaboration",
            progress: 90,
            type: "soft-skills",
            description:
                "I work well with team members to build, test, and deploy web applications."
        },
        {
            id: "14",
            icon: VscTerminalPowershell,
            skill: "Attention to Detail",
            progress: 83,
            type: "soft-skills",
            description:
                "I pay attention to detail and make sure web apps are easy to use and look good."
        }
    ]
};

export const ABOUT_ME = {
    title: "About Me",
    contactTitle: "Contact Me",
    contactIntro: "I am a front-end developer focused on React, Next.js, and TypeScript. I build responsive interfaces, SEO-friendly landing pages, and web apps that balance performance with usability.",
    content: `I am a front-end developer with a strong background in React, Next.js, and TypeScript. I build responsive interfaces, SEO-friendly landing pages, and web applications that balance performance with usability.
    \n I enjoy turning product ideas into clean, scalable experiences and improving them through accessibility, maintainability, and user feedback.`,
    socialLinks: [
        {
            id: "01",
            label: "Facebook",
            icon: FaFacebook,
            link: "https://www.facebook.com/liamvietpham"
        },
        {
            id: "02",
            label: "Instagram",
            icon: FaInstagram,
            link: "https://www.instagram.com/liamvietpham"
        },
        {
            id: "03",
            label: "LinkedIn",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/liamvietpham"
        },
        {
            id: "04",
            label: "GitHub",
            icon: FaGithubAlt,
            link: "https://github.com/liamvietpham"
        },
        {
            id: "05",
            label: "Twitter",
            icon: FaXTwitter,
            link: "https://twitter.com/liamvietpham"
        }
    ],
    email: "pviet693@gmail.com",
    phone: "+84 968 250 823",
    website: "https://liamvietpham.github.io"
};

export const MY_PROJECTS = {
    title: "Personal Projects",
    description:
        "Selected front-end, full-stack, and SEO-focused web projects built with Next.js, React, TypeScript, and modern UI patterns.",
    items: [
        {
            id: "01",
            title: "ThumbgenAI Website",
            description:
                "Landing page and dashboard concept for an AI thumbnail product with conversion-focused storytelling and polished UI.",
            image: "/thumbgenai-thumb.webp",
            tags: ["NextJS", "NestJS", "DynamoDB", "Typescript", "Tailwind CSS", "Lambda", "S3", "SQS", "CloudFront"],
            liveUrl: "https://thumbgenai-web.vercel.app",
            githubUrl: "https://github.com/liamvietpham/thumbgenai"
        },
        {
            id: "02",
            title: "Imagegen Website",
            description:
                "AI image generator web app with a Next.js frontend, NestJS backend, and FAL AI integration for a fast modern experience.",
            image: "/imagegen-thumb.webp",
            tags: ["NextJS", "NestJS", "Postgres", "Typescript", "Tailwind CSS", "Lambda", "S3", "CloudFront"],
            liveUrl: "https://www.imagegen.space/"
        },
        {
            id: "03",
            title: "OnlineToolbox Website",
            description:
                "SEO-first online toolbox with free browser-based tools for text, dev, SEO, image, PDF, and content workflows.",
            image: "/online-toolbox-thumb.webp",
            tags: ["NextJS", "Typescript", "Tailwind CSS"],
            liveUrl: "https://onlinetoolbox.space/"
        },
        {
            id: "05",
            title: "Portfolio Website",
            description:
                "Personal portfolio website built with Next.js, responsive design, smooth navigation, and reusable UI components.",
            image: "/portfolio-thumb.webp",
            tags: ["NextJS", "Tailwind CSS", "Typescript"],
            liveUrl: "https://liamvietpham.github.io",
            githubUrl: "https://github.com/liamvietpham/liamvietpham.github.io"
        },
        {
            id: "06",
            title: "Sapo Solar Website",
            description:
                "Corporate e-commerce website for showcasing solar products, energy solutions, and featured projects.",
            image: "/saposolar-thumb.webp",
            tags: ["NextJS", "NestJS", "Postgres", "Typescript", "Tailwind CSS"],
            liveUrl: "https://www.saposolar.vn/"
        },
    ]
};
