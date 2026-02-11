import type {Metadata} from "next";
import {Geist_Mono, Host_Grotesk, Plus_Jakarta_Sans} from "next/font/google";
import "./globals.scss";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer/Footer";
import {Analytics} from "@vercel/analytics/next";


const hostGroteskSans = Host_Grotesk({
    variable: "--font-host-grotesk-sans",
    subsets: ["latin"],
});

const interTightSans = Plus_Jakarta_Sans({
    variable: "--font-inter-tight-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Webique Agency",
    description: "Professional web development agency creating custom websites, digital experiences and SaaS solutions. Expert team delivering modern, scalable websites that drive business growth and customer engagement.",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body className={`${interTightSans.variable} ${hostGroteskSans.variable} ${geistMono.variable} antialiased`}>
        <main>
            {/*<Navbar/>*/}
            {children}
            <Analytics />
        </main>
        {/*<Footer/>*/}
        </body>
        </html>
    );
}
