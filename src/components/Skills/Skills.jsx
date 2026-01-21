'use client'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { skillList } from '@/appData'

const MarqueeWrapper = dynamic(() => import('../Marquee/MarqueeWrapper'), { ssr: false })

const Skills = () => {
    return (
        <section id="skills">
            <MarqueeWrapper className="from-primary to-primary via-marquee bg-linear-to-r">
                <div className="flex gap-8 lg:gap-24">
                    {skillList.map(({ name, icon: Icon, url }, index) => (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className="font-inter text-primary-content flex items-center text-[10px] lg:text-sm hover:text-accent transition-colors duration-300">
                            <div className="mx-2 size-6 lg:size-8 relative flex items-center justify-center">
                                {typeof Icon === 'function' ? (
                                    <Icon className="size-full" />
                                ) : (
                                    <Image src={Icon} alt={name} fill className="object-contain" />
                                )}
                            </div>
                            {name}
                        </a>
                    ))}
                </div>
            </MarqueeWrapper>
        </section>
    )
}

export default Skills
