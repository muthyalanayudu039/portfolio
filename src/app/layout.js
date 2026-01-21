import './globals.css'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import ThemeMenu from '@/components/Theme/ThemeMenu'
import WhatsAppButtons from '@/components/WhatsApp/WhatsApp'
import { Fira_Code } from 'next/font/google'

const firaCode = Fira_Code({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

const title = 'Muthyala Nayudu | Frontend Developer Currently Based in Hyderabad'

const description =
    "Skilled frontend developer in Hyderabad. I build responsive, user-friendly websites with React, NextJS, and NodeJS. Let's bring your vision to life. Hire me today!"

const url = process.env.NEXT_PUBLIC_SITE_URL

export const metadata = {
    title,
    description,
    category: 'technology',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
    alternates: {
        canonical: url,
    },
    openGraph: {
        title,
        description,
        url,
        siteName: 'Muthyala Nayudu Portfolio',
        type: 'website',
    },
    twitter: {
        title,
        description,
        card: 'summary_large_image',
        creator: '@Basit_Miyanji',
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" data-theme="dark">
            <body className={`${firaCode.className}`}>
                <header>
                    <Navbar />
                </header>
                {children}
                <ThemeMenu />
                <WhatsAppButtons />
                <Footer />
            </body>
        </html>
    )
}
