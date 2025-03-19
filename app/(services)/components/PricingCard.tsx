import React, {ReactNode} from 'react';
import {Check} from "lucide-react";
import ScheduleACallButton from "@/app/components/ScheduleACallButton";

export default function PricingCard({price, description, icon, iconDescription, includedServices, service}: {
    price: number,
    description: string,
    icon: ReactNode,
    iconDescription: string,
    includedServices: string[],
    service: "websiteDevelopment" | "websiteDesign" | "saasDevelopment" | "uiUxDesign" | "seoOptimization"
}) {
    return (
        <div className="flex items-center justify-center py-12">
            <div className="flex flex-col p-8 border-2 gap-4 border-[#ededed] rounded-xl max-w-xl bg-[#FFFFFF]">
                <div className="inline-flex gap-1 light-text">
                    {icon}
                    <p>{iconDescription}</p>
                </div>
                <h2>{price}€+</h2>
                <p className="light-text">{description}</p>
                <ScheduleACallButton service={service} variant={"default"} withIcon={true}/>
                <hr/>
                <div className="flex flex-col items-start justify-start gap-2">
                    {includedServices.map((serviceInList, index) => (
                        <div key={index} className={"inline-flex gap-2 items-center justify-start"}>
                            <Check className="primary-color"/>
                            <p>{serviceInList}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
