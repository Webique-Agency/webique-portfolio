import React from 'react';
import ServiceHeader from "@/app/(services)/components/service-header/ServiceHeader";
import PricingCard from "@/app/(services)/components/PricingCard";
import {Figma} from "lucide-react";
import FaqSection from "@/app/(services)/components/faq-section/FaqSection";
import Image from "next/image";

export default function Page() {
    return (
        <section className="website-design-section service-section">
            <ServiceHeader serviceName={"Website Design"}
                           serviceDescription={"Stand out with a high-quality, custom-built website designed to enhance user experience and grow your business."}/>

            <Image width={250} height={250} src={"/service-assets/website-design.png"}
                   className="service-background" alt={"Grid"}/>

            <div className="pricing-wrapper">
                <PricingCard price={599}
                             description={"Premium web design solutions tailored to your brand, ensuring a stunning, high-performing online presence."}
                             icon={<Figma/>}
                             iconDescription={"Designed in Figma"}
                             includedServices={[
                                 "Full Figma design files & prototypes",
                                 "Responsive & mobile-friendly layouts",
                                 "SEO-optimized design",
                                 "Conversion-focused landing pages",
                                 "Revisions & feedback rounds"
                             ]}/>
            </div>

            <FaqSection service={"websiteDevelopment"}/>
        </section>
    );
}
