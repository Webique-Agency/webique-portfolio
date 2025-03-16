import React from 'react';
import HeroAnimation from "@/app/(homepage)/components/hero-section/hero-animation/HeroAnimation";
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";
import "./HeroSection.styles.scss"
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="generic-section-wrapper hero-section-wrapper">
            <div className="content">
                <div className="client-info">
                    <Image width={250} height={250} className="client-image" src="client-bubbles.png" alt="Clients"/>
                    <h6>100+ satisfied clients</h6>
                </div>
                <div className="text-content">
                    <h1>Building bridges between you and your next <span className="primary">SaaS Idea</span></h1>
                    <h6 className="description">We ensure that your ideas don’t just remain concepts but evolve into
                        fully functional and impactful solutions.</h6>
                    <div className="buttons-wrapper">
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
            <div className="animation">
                <HeroAnimation/>
            </div>
        </section>
    );
}
