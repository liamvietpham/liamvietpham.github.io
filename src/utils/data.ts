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
    headline: "Building Scalable and User-Friendly Web Apps",
    description:
        "I like building web applications that work well and are easy to use. My goal is to create scalable and simple solutions for users and business needs.",
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
        "I'm an experienced web developer with good knowledge of web technologies. I can deliver quality projects on time and within budget.",
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
    contactIntro: 'I am a flexible web developer with a strong background in web technologies. I can deliver good projects on time and within budget. I always look for new challenges to improve my skills.',
    content: `I am a passionate developer with a strong background in web technologies and a focus on learning. I can deliver high-quality projects on time and within budget. I always look for new challenges and chances to improve my skills.
    \n I can deliver high-quality projects on time and within budget. I always look for new challenges and chances to improve my skills. I can deliver high-quality projects on time and within budget. I always look for new challenges and chances to improve my skills.`,
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
            link: "https://www.instagram.com/phamviet3050"
        },
        {
            id: "03",
            label: "LinkedIn",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/liampham03051999"
        },
        {
            id: "04",
            label: "GitHub",
            icon: FaGithubAlt,
            link: "https://github.com/pviet693"
        },
        {
            id: "05",
            label: "Twitter",
            icon: FaXTwitter,
            link: "https://twitter.com/liampham3050"
        }
    ],
    email: "pviet693@gmail.com",
    phone: "+84 968 250 823",
    website: "https://liamvietpham.github.io"
};

export const MY_PROJECTS = {
    title: "Recent Projects",
    description:
        "I am an experienced web developer with a strong background in web technologies. I can deliver quality projects on time and within budget.",
    items: [
        {
            id: "01",
            title: "E-commerce Website",
            image: "/portfolio_website.webp",
            tags: ["React", "Express.js", "Node.js", "MongoDB"]
        },
        {
            id: "02",
            title: "Portfolio Website",
            image: "/portfolio_website.webp",
            tags: ["React", "Tailwind CSS", "Typescript"]
        },
        {
            id: "03",
            title: "Social Media App",
            image: "/portfolio_website.webp",
            tags: ["React", "Express.js", "Node.js", "MongoDB"]
        },
        {
            id: "04",
            title: "Blog Website",
            image: "/portfolio_website.webp",
            tags: ["HTML", "CSS", "JavaScript"]
        },
        {
            id: "05",
            title: "Weather App",
            image: "/portfolio_website.webp",
            tags: ["React", "API"]
        }
    ]
};
