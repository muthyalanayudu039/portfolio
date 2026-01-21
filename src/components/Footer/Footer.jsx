import { footerLinks } from '@/appData'
import { socials } from '@/appData/personal'
import Logo from '../Navbar/Logo'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="relative mt-20 overflow-hidden border-t border-border bg-primary px-4 pt-16 pb-8 md:px-14">
            {/* Background Glow */}
            <div className="absolute -top-24 -left-24 z-0 h-48 w-48 rounded-full bg-accent/10 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-[1200px]">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-24">

                    {/* Branding & Bio */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Logo width={32} height={26} />
                            <span className="text-2xl font-bold tracking-tight text-neutral">Muthyala Nayudu</span>
                        </div>
                        <p className="text-secondary-content max-w-sm leading-relaxed">
                            Crafting seamless digital experiences with precision and passion.
                        </p>
                        <div className="flex gap-4 mt-2">
                            {socials.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="bg-secondary/50 border-border text-neutral hover:bg-accent hover:text-secondary flex h-10 w-10 items-center justify-center rounded-xl border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1"
                                    aria-label={`Social link ${index}`}
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-2 gap-8 md:col-span-1">
                        <div>
                            <h5 className="mb-6 text-lg font-semibold text-neutral">Sitemap</h5>
                            <ul className="space-y-4">
                                {footerLinks.slice(0, 3).map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} className="text-secondary-content hover:text-accent text-sm transition-colors duration-300">
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h5 className="mb-6 text-lg font-semibold text-neutral">Resources</h5>
                            <ul className="space-y-4">
                                {footerLinks.slice(3).map((link) => (
                                    <li key={link.href}>
                                        <a href={link.href} className="text-secondary-content hover:text-accent text-sm transition-colors duration-300">
                                            {link.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <h5 className="text-lg font-semibold text-neutral">Get In Touch</h5>
                        <div className="space-y-4">
                            <a
                                href="mailto:muthyalanayudu39@gmail.com"
                                className="group flex items-center gap-3 text-secondary-content hover:text-accent transition-colors"
                            >
                                <div className="bg-secondary flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors group-hover:border-accent/50">
                                    <Mail size={16} />
                                </div>
                                <span className="text-sm">muthyalanayudu39@gmail.com</span>
                            </a>
                            <a
                                href="tel:+919515090119"
                                className="group flex items-center gap-3 text-secondary-content hover:text-accent transition-colors"
                            >
                                <div className="bg-secondary flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors group-hover:border-accent/50">
                                    <Phone size={16} />
                                </div>
                                <span className="text-sm">+91 9515090119</span>
                            </a>
                            <div className="group flex items-center gap-3 text-secondary-content">
                                <div className="bg-secondary flex h-9 w-9 items-center justify-center rounded-lg border border-border">
                                    <MapPin size={16} />
                                </div>
                                <span className="text-sm">Hyderabad, Telangana, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 border-t border-border pt-8 text-center">
                    <p className="text-secondary-content text-sm">
                        © {new Date().getFullYear()} Muthyala Nayudu Maddu. Thank you for visiting my portfolio.
                    </p>
                </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -right-20 bottom-0 z-0 h-[300px] w-[300px] bg-accent/5 blur-[80px] rounded-full" />
        </footer>
    )
}

export default Footer
