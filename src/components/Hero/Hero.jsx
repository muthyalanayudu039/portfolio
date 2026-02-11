'use client'
import useRoleSwitcher from '@/hooks/useRoleSwitcher'
import useRotatingAnimation from '@/hooks/useRotatingAnimation'
import Image from 'next/image'
import { HeroImage } from '../../utils/images'
import Ellipse from './Ellipse'

const Hero = () => {
    const ellipseRef = useRotatingAnimation()
    const role = useRoleSwitcher({ roles: ['FRONTEND DEVELOPER', 'WEB SITE BUILDER', 'UI DESIGNER'] })

    return (
        <section id="hero" className="bg-primary bg-small-glow bg-small-glow-position md:bg-large-glow-position lg:bg-large-glow min-h-[calc(dvh-4rem)] bg-no-repeat">
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-4 px-4 sm:pt-23 pt-30 pb-10 md:grid-cols-2">
                <div className="flex min-h-48 flex-col justify-between lg:min-h-56 lg:max-w-[33.75rem]">
                    <h1>
                        <span className="text-neutral mb-2 block text-3xl font-bold">Hi - I'm Muthyala Nayudu</span>
                        <span className="text-accent block text-[1.75rem] font-bold">{role}</span>
                    </h1>

                    <p className="text-neutral mt-3">
                        I currently work as a Frontend Engineer with over 1 year of professional experience in this role. Overall, I have 2.3 years of IT experience and am based in Hyderabad.
                    </p>
                    <p className="text-neutral mt-3">
                        I specialize in building responsive, user friendly web applications using JavaScript, React.js, TypeScript, and modern CSS frameworks like Tailwind. I have strong experience in REST API integration, state management using Redux, performance optimization, and clean UI design.
                    </p>
                    <p className="text-neutral mt-3">
                        Before that, I worked as a Web Designer, where I built and customized websites using WordPress, Shopify, SitePad, Elementor, and Duda. I focused on modern themes, responsive design, SEO, and clean user experience.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-6">
                        <a
                            href="#"
                            aria-label="Connect with me"
                            className="bg-secondary w-full font-bold sm:max-w-max cursor-pointer rounded-lg px-[14px] py-[10px] text-center text-sm font-medium text-[#00071E] bg-[#FFFFFF1A] p-1 text-sm text-accent backdrop-blur-[80px]">
                            Hire Me
                        </a>
                        <a
                            href="https://www.linkedin.com/in/muthyalanayudu39"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="View LinkedIn Profile"
                            className="text-neutral bg-secondary text-center sm:text-left w-full sm:max-w-max cursor-pointer rounded-lg px-[14px] py-[10px] text-sm">
                            LinkedIn Profile
                        </a>
                    </div>
                </div>

                <div className="flex min-h-[18.75rem] items-center justify-center lg:min-h-[35rem]">
                    <div className="text-accent relative size-56 sm:size-60 md:size-[20rem] lg:size-[25.75rem]">
                        <Image
                            src={HeroImage}
                            fill={true}
                            priority={true}
                            sizes="(min-width: 1024px) 25.75rem, (min-width: 768px) 20rem, (min-width: 640px) 15rem, 14rem"
                            alt="Muthyala Nayudu - Frontend Developer"
                            className="object-contain p-7"
                        />
                        <Ellipse
                            ref={ellipseRef}
                            className="absolute top-0 left-0 size-56 transition-transform duration-500 ease-out sm:size-60 md:size-[20rem] lg:size-[25.75rem]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
