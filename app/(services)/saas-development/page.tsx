import React from 'react';
import ServiceHeader from "@/app/(services)/components/service-header/ServiceHeader";
import Image from "next/image";
import PricingCard from "@/app/(services)/components/PricingCard";
import {Blocks} from "lucide-react";
import FaqSection from "@/app/(services)/components/faq-section/FaqSection";

export default function Page() {
    return (
        <section className="service-section">
            <ServiceHeader serviceName={"SaaS Development"}
                           serviceDescription={"Custom SaaS development designed for growth, security, and efficiency—turn your vision into a powerful digital product."}/>

            <Image width={250} height={250} src={"/service-assets/saas-development.png"}
                   className="service-background" alt={"Grid"}/>

            <PricingCard price={2499}
                         service={"saasDevelopment"}
                         icon={<Blocks/>}
                         iconDescription={"From idea to Product"}
                         description={"Custom SaaS development designed for growth, security, and efficiency—turn your vision into a powerful digital product."}
                         includedServices={[
                             "Fully customized solution",
                             "UI/UX Design included",
                             "Dedicated development team",
                             "24/7 priority support",
                             "Custom feature development",
                             "Enterprise-grade security",
                             "Unlimited scale potential"
                         ]}/>

            <FaqSection service={"saasDevelopment"}/>
        </section>
    );
}
