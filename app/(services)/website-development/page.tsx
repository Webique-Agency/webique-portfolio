"use client";

import React, {useState} from 'react';
import ServiceHeader from "@/app/components/service-header/ServiceHeader";
import "./WebsiteDevelopment.styles.scss";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Check, Info, Minus, Stars} from "lucide-react";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import FaqSection from "@/app/(services)/faq-section/FaqSection";

function Page() {

    const [pricing, setPricing] = useState("monthly");

    const websiteDevPlans = [
        {
            name: "Basic",
            priceMonthly: 99,
            priceAnnually: 960,
            perMonthAnnually: 80,
            description: "The ideal solution that empowers your brand to stand out in today's competitive digital landscape.",
            mostPopular: false,
            icon: "/service-assets/website-development/basic-plan-icon.png",
        },
        {
            name: "Standard",
            priceMonthly: 149,
            priceAnnually: 1440,
            perMonthAnnually: 120,
            description: "Enhanced online presence with a custom page included",
            mostPopular: true,
            icon: "/service-assets/website-development/standard-plan-icon.png",
        },
        {
            name: "Premium",
            priceMonthly: 199,
            priceAnnually: 1920,
            perMonthAnnually: 160,
            description: "Complete online business solution with enhanced features",
            mostPopular: false,
            icon: "/service-assets/website-development/premium-plan-icon.png",
        }
    ]

    return (
        <section className="website-development-section">
            <ServiceHeader
                serviceName={"Website Development"}
                serviceDescription={"Transparent and flexible pricing for any type of website. Choose a plan that suits your business the best and get started today!"}
            ></ServiceHeader>

            <Image width={250} height={250} src={"/service-assets/website-development.png"}
                   className="service-background" alt={"Grid"}/>

            <div className="pricing-table-wrapper">
                <Tabs defaultValue="monthly" onValueChange={event => setPricing(event)}>
                    <TabsList>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                        <TabsTrigger value="annually">Annually</TabsTrigger>
                        {pricing == "monthly" && (
                            <Image className="discount-message" width={250} height={250}
                                   src={"/service-assets/website-development/discount-message.png"} alt={"Save 20%"}/>
                        )}
                    </TabsList>
                    {/************************************* MONTHLY PRICING *************************************/}
                    <TabsContent value={"monthly"}>
                        <div className="plans-wrapper-grid">
                            {websiteDevPlans.map((plan, index) => (
                                <React.Fragment key={index}>
                                    <div
                                        className={plan.mostPopular ? "plan-wrapper most-popular" : "plan-wrapper"}>
                                        <div className="plan-header">
                                            {plan.mostPopular && (
                                                <div className="popular-tag">
                                                    <Stars/>
                                                    <p>Most popular</p>
                                                </div>
                                            )}
                                            <h4>{plan.name}</h4>
                                            <Image width={32} height={32}
                                                   className="plan-icon"
                                                   src={plan.icon}
                                                   alt={plan.name}/>
                                        </div>
                                        <div className="price-wrapper">
                                            <h2>{plan.priceMonthly}€</h2>
                                            <h6>per month</h6>
                                        </div>
                                        <div className="plan-actions">
                                            <p className="light-text">{plan.description}</p>
                                            <Button className="w-full"
                                                    variant={plan.mostPopular ? "default" : "inverted"}>
                                                Schedule a call
                                            </Button>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                            {/*____________________________________*/}
                            <h6 className="separator">Professional one-page website</h6>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Customized design</h6>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Mobile-first optimization</h6>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Additional pages</h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                1 page
                            </p>
                            <p className="flex items-center justify-center w-full">
                                3+ pages
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Domain and hosting</h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                1 year
                            </p>
                            <p className="flex items-center justify-center w-full">
                                Lifetime
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Newsletter mailing system</h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Custom features
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Info className="primary-color"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Example features: Reservation, order placement</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                1 feature
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">SEO Optimization</h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                Basic SEO
                            </p>
                            <p className="flex items-center justify-center w-full">
                                Basic + Technical SEO
                            </p>
                            {/*____________________________________*/}
                        </div>
                    </TabsContent>
                    <TabsContent value={"annually"}>
                        <div className="plans-wrapper-grid">
                            {websiteDevPlans.map((plan, index) => (
                                <React.Fragment key={index}>
                                    <div
                                        className={plan.mostPopular ? "plan-wrapper most-popular" : "plan-wrapper"}>
                                        <div className="plan-header">
                                            {plan.mostPopular && (
                                                <div className="popular-tag">
                                                    <Stars/>
                                                    <p>Most popular</p>
                                                </div>
                                            )}
                                            <h4>{plan.name}</h4>
                                            <Image width={32} height={32}
                                                   src={plan.icon}
                                                   alt={plan.name}/>
                                        </div>
                                        <h6 className="light-text"><s>{plan.priceMonthly}€</s> per month</h6>
                                        <div className="price-wrapper">
                                            <h2>{plan.perMonthAnnually}€</h2>
                                            <h6>per month</h6>
                                        </div>
                                        <div className="plan-actions">
                                            <p className="light-text">{plan.description}</p>
                                            <Button className="w-full"
                                                    variant={plan.mostPopular ? "default" : "inverted"}>
                                                Schedule a call
                                            </Button>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                            {/*____________________________________*/}
                            <h6 className="separator">Professional one-page website</h6>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Customized design</h6>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Mobile-first optimization</h6>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Additional pages</h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                1 page
                            </p>
                            <p className="flex items-center justify-center w-full">
                                3+ pages
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Domain and hosting</h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                1 year
                            </p>
                            <p className="flex items-center justify-center w-full">
                                Lifetime
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Newsletter mailing system</h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Check className="primary-color"/>
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">Custom features
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Info className="primary-color"/>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Example features: Reservation, order placement</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                1 feature
                            </p>
                            {/*____________________________________*/}
                            <h6 className="separator">SEO Optimization</h6>
                            <p className="flex items-center justify-center w-full">
                                <Minus className="light-text"/>
                            </p>
                            <p className="flex items-center justify-center w-full">
                                Basic SEO
                            </p>
                            <p className="flex items-center justify-center w-full">
                                Basic + Technical SEO
                            </p>
                            {/*____________________________________*/}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
            <FaqSection service={"websiteDevelopment"}/>
        </section>
    );
}

export default Page;
