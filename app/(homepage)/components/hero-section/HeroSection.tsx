import React from 'react';
import {Button} from "@/components/ui/button";
import "./HeroSection.styles.scss"
import Image from "next/image";
import ChooseServiceDialog from "@/app/components/choose-service-dialog/ChooseServiceDialog";
import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="generic-section-wrapper hero-section-wrapper">
            <div className="content">
                <div className="client-info">
                    <Image width={250} height={250} className="client-image" src="client-bubbles.png" alt="Clients"
                           draggable={false}/>
                    <p>100+ satisfied clients</p>
                </div>
                <div className="text-content">
                    <h1>Launch in <span className={"primary-accent"}>Weeks</span>, Lead for <span
                        className={"primary-accent"}>Years</span>
                    </h1>
                    <h6 className="description">Complete digital solutions that perform.</h6>
                    <div className="buttons-wrapper">
                        <ChooseServiceDialog variant={"default"}/>
                        <Link href={"#services"}>
                            <Button variant={"outline"}>
                                Pricing
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
