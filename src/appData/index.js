// Data for portfolio
import {
    GithubIcon,
    JavaScriptIcon,
    ReactIcon,
    TailwindCSS,
    TypescriptIcon,
} from '../utils/icons'
import {
    Html5Icon,
    Css3Icon,
    BootstrapIcon,
    WordpressIcon,
    ShopifyIcon,
    GitIcon,
    VercelIcon,
    NetlifyIcon,
    SitepadIcon,
    DudaIcon,
    ElementorIcon
} from '../utils/extra-icons'

// Project Data
export const projects = [
    {
        priority: 1,
        title: 'Color Contrast Collection',
        shortDescription: 'E-Commerce Web Application: Developed a responsive e-commerce web app using React and Tailwind CSS, including product listing, search functionality, filters, cart, and checkout. Designed reusable components, client side validation and error handling, and cross browser compatibility with a clean and user centric UI.',
        cover: 'https://res.cloudinary.com/dyvkdwzcj/image/upload/v1645090814/color-contrast_n598kw.png',
        livePreview: 'https://example.com/alpha',
        type: 'Personal Project 🙍‍♂️',
        siteAge: '1 month old',
    },
    {
        priority: 2,
        title: 'Codevertiser',
        shortDescription: 'B programming related article site to share my learnings',
        cover: 'https://res.cloudinary.com/dyvkdwzcj/image/upload/v1656970810/Codevertiser_xlxdje.png',
        livePreview: 'https://example.com/beta',
        visitors: '8K Visitors',
    },
    {
        priority: 3,
        title: 'Project Epsilon',
        shortDescription:
            'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic. Your task is to make it functional by writing business logic, to improve your frontend skills',
        cover: 'https://res.cloudinary.com/dyvkdwzcj/image/upload/v1656971294/waitlist-template_qr4l9k.png',
        type: 'Personal Project 🔥',
        livePreview: 'https://example.com/epsilon',
        githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
        githubStars: '40 Stars',
        numberOfSales: '138 Sales',
    },
    {
        priority: 4,
        title: 'Ejucationzz',
        shortDescription:
            'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed.',
        cover: 'https://res.cloudinary.com/dyvkdwzcj/image/upload/v1598035107/pomodoro-clock_ctp2af.png',
        type: 'Personal Project 🔥',
        livePreview: 'https://example.com/Ejucationzz',
        siteAge: '4 months old',
        visitors: '100 Visitors',
        githubLink: '',
        earned: '',
    },
]

// Service Data
export const serviceData = [
    {
        icon: Html5Icon,
        title: 'Front End Development',
        shortDescription: 'Building modern, responsive, and high-performance user interfaces with React, TypeScript, and Tailwind CSS.',
    },
    {
        icon: WordpressIcon,
        title: 'Web Design & Store Building',
        shortDescription: 'Creating stunning websites and e-commerce stores using WordPress, Shopify, and modern site builders.',
    },
    {
        icon: VercelIcon,
        title: 'Deployment & DevOps',
        shortDescription: 'Seamlessly deploying and managing applications on Vercel, Netlify, and GitHub.',
    },
    {
        icon: JavaScriptIcon,
        title: 'Custom Scripting',
        shortDescription: 'Writing clean, efficient, and scalable JavaScript/TypeScript logic for complex business requirements.',
    },
]

// Skill List
export const skillList = [
    // Front End
    { name: 'HTML', icon: Html5Icon, url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
    { name: 'CSS', icon: Css3Icon, url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    { name: 'Bootstrap', icon: BootstrapIcon, url: 'https://getbootstrap.com/' },
    { name: 'JavaScript', icon: JavaScriptIcon, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'React.js', icon: ReactIcon, url: 'https://react.dev/' },
    { name: 'TypeScript', icon: TypescriptIcon, url: 'https://www.typescriptlang.org/' },
    { name: 'Tailwind CSS', icon: TailwindCSS, url: 'https://tailwindcss.com/' },

    // Web Designing (Website Builders)
    { name: 'WordPress', icon: WordpressIcon, url: 'https://wordpress.org/' },
    { name: 'Sitepad', icon: SitepadIcon, url: 'https://sitepad.com/' },
    { name: 'Duda', icon: DudaIcon, url: 'https://www.duda.co/' },
    { name: 'Elementor', icon: ElementorIcon, url: 'https://elementor.com/' },
    { name: 'Shopify', icon: ShopifyIcon, url: 'https://www.shopify.com/' },

    // Tools & DevOps
    { name: 'Git', icon: GitIcon, url: 'https://git-scm.com/' },
    { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/' },
    { name: 'Vercel', icon: VercelIcon, url: 'https://vercel.com/' },
    { name: 'Netlify', icon: NetlifyIcon, url: 'https://www.netlify.com/' },
]

export const footerLinks = [
    { title: 'About', href: '#' },
    { title: 'Projects', href: '#projects' },
    { title: 'Testimonials', href: '#testimonials' },
    {
        title: 'Blogs',
        href: '#blogs',
    },
    {
        title: 'Services',
        href: '#services',
    },
]

export const themes = [
    {
        name: 'Light',
        colors: ['#fff', '#0d1a3b', '#dbe3f7', '#0d1a3b', '#5565e8'],
    },
    {
        name: 'Dark',
        colors: ['#011627', '#607b96', '#0d1a3b', '#5565e8', '#18f2e5'],
    },
    // {
    //     name: 'Aqua',
    //     colors: ['#b2e4e8', '#004a55', '#00c1d4', '#004a55', '#ff6f61'],
    // },
    // {
    //     name: 'Retro',
    //     colors: ['#fff3e0', '#6d4c41', '#ffcc80', '#5d4037', '#ffab40'],
    // },
]

export const languages = ['En', 'Es', 'Fr', 'De', 'Ru']
