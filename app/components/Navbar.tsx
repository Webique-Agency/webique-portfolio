import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, ChevronDown} from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between py-6 relative z-99">
            <div className="logo-wrapper w-7/12">
                <Link href={"/"}>
                    <Image width={250} height={250} className="object-fit w-3/12" src="logo.png" alt="Webique Logo"/>
                </Link>
            </div>

            <div className="inline-flex gap-8 items-center">
                <Link href={"#services"} className="inline-flex items-center gap-1">
                    Services
                    <ChevronDown size={16}/>
                </Link>
                <Link href={"/"}>Projects</Link>
                <Link href={"/"}>About</Link>
                <Button className="">
                    Schedule a call
                    <ArrowUpRight/>
                </Button>
            </div>
        </nav>
    );
}
