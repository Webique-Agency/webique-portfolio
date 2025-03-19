import {Button} from '@/components/ui/button';
import React from 'react';
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";

export default function ScheduleACallButton({variant, withIcon, className, service}: {
    variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "inverted",
    withIcon: boolean,
    service: "websiteDevelopment" | "websiteDesign" | "saasDevelopment" | "uiUxDesign" | "seoOptimization" | "any"
    className?: string
}) {

    const serviceLinks = new Map<string, string>();
    serviceLinks.set("websiteDevelopment", "https://cal.com/webique/website-development");
    serviceLinks.set("websiteDesign", "https://cal.com/webique/website-design");
    serviceLinks.set("saasDevelopment", "https://cal.com/webique/saas-development");
    serviceLinks.set("uiUxDesign", "https://cal.com/webique/ui-ux-design");
    serviceLinks.set("seoOptimization", "https://cal.com/webique/seo-optimization");
    serviceLinks.set("any", "#");

    return (
        <Button variant={variant} className={className}>
            <Link href={serviceLinks.get(service)} target={"_blank"} className={"inline-flex items-center gap-2 justify-center w-full"}>
                Schedule a Call
                {withIcon && (
                    <ArrowUpRight/>
                )}
            </Link>
        </Button>
    );
}
