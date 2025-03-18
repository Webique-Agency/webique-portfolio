"use client";

import React, {useCallback, useEffect, useState} from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, ChevronDown} from "lucide-react";
import Image from "next/image";
import ScheduleACallButton from "@/app/components/ScheduleACallButton";

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
            className="w-full flex items-center justify-between py-4 top-4 z-99 sticky bg-[#FFFFFF] border-1 rounded-xl px-4">
            <div className="logo-wrapper w-7/12">
                <Link href={"/"}>
                    <Image width={250} height={250} className="object-fit w-3/12" src="logo.png" alt="Webique Logo"/>
                </Link>
            </div>

            <div className="inline-flex gap-8 items-center">
                <Link href={"/#services"} className="inline-flex items-center gap-1">
                    Services
                </Link>
                <Link href={"/"}>Projects</Link>
                <Link href={"/"}>About</Link>

                <ScheduleACallButton variant={scrollYPage > 500 ? "default" : "ghost"}
                                     withIcon={true}></ScheduleACallButton>
            </div>
        </nav>
    );
}
