import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "config/site"
import { AspectRatio } from "components/ui/aspectRatio";
import { Icons } from "components/icons"

interface AuthLayoutProps {
    children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
            <AspectRatio ratio={16 / 9}>
                <Image
                    src="/images/auth-layout.jpeg"
                    alt="A skateboarder doing a high drop"
                    priority
                    fill
                    className="absolute inset-0 object-cover opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />

                <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 text-base w-full">
                    <div className="grid grid-rows-2 gap-4">
                        <div className="flex justify-center items-center">
                            <Image
                                src="/images/logo.png"
                                alt="A skateboarder doing a high drop"
                                width={400}
                                height={300}
                                className=" object-cover z-1 "
                            />
                        </div>
                        <div className="px-4">
                        <h1 className="text-3xl text-center mb-3 font-bold">Helping you with your customer experience journey</h1>
                        <h2 className="text-xl text-center">Information Communications Technology solutions with a focus on professional services to help you help your customers.</h2>
                        </div>

                    </div>
                </div>
            </AspectRatio>
            <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1 bg-white dark:bg-[#424242] border-l-4">
                {children}
            </main>
        </div>
    )
}