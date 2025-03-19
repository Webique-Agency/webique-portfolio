import React from 'react';
import ServiceHeader from "@/app/(services)/components/service-header/ServiceHeader";
import PricingCard from "@/app/(services)/components/PricingCard";
import FaqSection from "@/app/(services)/components/faq-section/FaqSection";
import Image from "next/image";
import {Figma} from "lucide-react";

export default function Page() {
    return (
        <section className="ui-ux-design-section service-section">
            <ServiceHeader serviceName={"UI/UX Design"}
                           serviceDescription={"Stand out with a high-quality, custom-built website designed to enhance user experience and grow your business."}/>

            <Image width={250} height={250} src={"/service-assets/ui-ux-design.png"}
                   className="service-background" alt={"Grid"}/>

            <div className="pricing-wrapper">
                <PricingCard price={2999}
                             service={"uiUxDesign"}
                             icon={<Figma/>}
                             iconDescription={"Designed in Figma"}
                             description={"Stunning, intuitive, and high-performing UI/UX design tailored for seamless user experiences."}
                             includedServices={[
                                 "Full Figma design files & prototypes",
                                 "User research & persona development",
                                 "Wireframing & high-fidelity UI design",
                                 "Mobile-first & responsive design",
                                 "Design systems & component libraries",
                                 "Microinteractions & animations for better engagement"
                             ]}/>
            </div>

            <FaqSection service={"uiUxDesign"}/>
        </section>
    );
}
