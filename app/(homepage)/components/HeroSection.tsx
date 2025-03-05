import React from 'react';
import HeroAnimation from "@/app/(homepage)/components/hero-animation/HeroAnimation";
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";

export default function HeroSection() {
    return (
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-4 items-start justify-start flex-3">
                <div className="flex flex-row gap-2 items-center justify-start w-full">
                    <img className="w-24" src="client-bubbles.png" alt="Clients"/>
                    <h6>100+ satisfied clients</h6>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="leading-16">Building bridges between you and your next <span
                        className="primary-color">SaaS Idea</span></h1>
                    <h6 className="light-text w-8/12">We ensure that your ideas don’t just remain concepts but evolve
                        into fully functional and impactful solutions.</h6>
                    <div className="inline-flex flex-row gap-4">
                        <Button>
                            Schedule a call
                            <ArrowUpRight/>
                        </Button>
                        <Button variant={"outline"}>
                            Learn more
                        </Button>
                    </div>
                </div>
            </div>
            <div className="animation flex-2">
                <HeroAnimation/>
            </div>
        </div>
    );
}
