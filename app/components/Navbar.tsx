import React from 'react';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight, ChevronDown} from "lucide-react";

export default function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between py-6">
            <div className="logo-wrapper w-7/12">
                <img className="object-fit w-3/12" src="logo.png" alt="Webique Logo"/>
            </div>

            <div className="inline-flex gap-8 items-center">
                <Link href={"/"} className="inline-flex items-center gap-1">
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
