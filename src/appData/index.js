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
        title: 'Project Alpha',
        shortDescription:
            'A groundbreaking project that revolutionizes the way we approach technology. Built with cutting-edge tools for maximum efficiency, it sets new industry standards.',
        cover:
            'https://images.unsplash.com/photo-1585282263861-f55e341878f8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        livePreview: 'https://example.com/alpha',
        type: 'Client Work 🙍‍♂️',
        siteAge: '1 month old',
    },
    {
        priority: 2,
        title: 'Project Beta',
        shortDescription:
            'Project Beta is a static technical blog site built with GatsbyJS. I share tips on topics like building reusable components in React, explaining JavaScript methods and concepts, Node.js scripts, and more.',
        cover:
            'https://plus.unsplash.com/premium_photo-1663040328859-48bddaa9dfeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        livePreview: 'https://example.com/beta',
        visitors: '8K Visitors',
        earned: '$400 Earned',
    },
    {
        priority: 3,
        title: 'Project Epsilon',
        shortDescription:
            'A collection of engaging coding challenges designed to help developers improve their ReactJS skills by writing functional business logic. Your task is to make it functional by writing business logic, to improve your frontend skills',
        cover:
            'https://plus.unsplash.com/premium_photo-1661700152890-931fb04588e6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

        type: 'Free 🔥',
        livePreview: 'https://example.com/epsilon',
        githubLink: 'https://github.com/example/ReactJS-Coding-Challenges',
        githubStars: '40 Stars',
        numberOfSales: '138 Sales',
    },
    {
        priority: 4,
        title: 'Ejucationzz',
        shortDescription:
            'Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed. Ejucationzz is a directory site I created for myself using Next.js. On Ejucationzz, you can find free and paid online and offline courses available in Pakistan. 14 academies and 12 main categories, each with subcategories, have been listed.',
        cover:
            'https://images.unsplash.com/photo-1527334919515-b8dee906a34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        type: 'New 🔥',
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
