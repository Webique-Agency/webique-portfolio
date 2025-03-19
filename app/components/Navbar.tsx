"use client";

import React, {useCallback, useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import ScheduleACallButton from "@/app/components/ScheduleACallButton";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger
} from "@/components/ui/sheet";
import {Menu} from "lucide-react";

export default function Navbar() {

    const [scrollYPage, setScrollYPage] = useState(0);

    const onScroll = useCallback(() => {
        const {scrollY} = window;
        setScrollYPage(scrollY);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    return (
        <nav
            className="w-full flex items-center justify-between py-4 top-4 z-50 sticky bg-[#FFFFFF] border-1 rounded-xl px-4">
            <div className="lg:logo-wrapper w-7/12">
                <Link href={"/"}>
                    <Image width={250} height={250} className="object-fit w-3/12 max-[1025px]:w-6/12" src="logo.png"
                           alt="Webique Logo"/>
                </Link>
            </div>

            <div className="lg:inline-flex gap-8 items-center max-[1025px]:hidden">
                <Link href={"/#services"} className="inline-flex items-center gap-1">
                    Services
                </Link>
                <Link href={"/"}>Projects</Link>
                <Link href={"/"}>About</Link>

                <ScheduleACallButton variant={scrollYPage > 500 ? "default" : "ghost"}
                                     withIcon={true}></ScheduleACallButton>
            </div>
            <div className="hamburger-wrapper lg:hidden max-[1025px]:block">
                <Sheet>
                    <SheetTrigger><Menu/></SheetTrigger>
                    <SheetContent side={"top"}>
                        <SheetTitle>
                            <Link href={"/"}>
                                <Image width={250} height={250} className="object-fit w-6/12" src="logo.png"
                                       alt="Webique Logo"/>
                            </Link>
                        </SheetTitle>
                        <div className="flex flex-col gap-8 items-start justify-center p-6">
                            <Link href={"/#services"} className="inline-flex items-center gap-1">
                                Services
                            </Link>
                            <Link href={"/"}>Projects</Link>
                            <Link href={"/"}>About</Link>

                            <ScheduleACallButton variant={"default"}
                                                 className={"w-full"}
                                                 withIcon={true}></ScheduleACallButton>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}
