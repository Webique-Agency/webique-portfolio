"use client";

import React, {useState} from 'react';
import ServiceHeader from "@/app/(services)/components/service-header/ServiceHeader";
import "./WebsiteDevelopment.styles.scss";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import Image from "next/image";
import {Check, Info, Minus, Stars} from "lucide-react";
import FaqSection from "@/app/(services)/components/faq-section/FaqSection";
import ScheduleACallButton from "@/app/components/ScheduleACallButton";
import PageTransition from "@/app/components/page-transitions/PageTransition";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";

function Page() {

	const [pricing, setPricing] = useState("monthly");

	const websiteDevPlans = [
		{
			name: "Basic",
			priceMonthly: 249,
			priceAnnually: 2390,
			perMonthAnnually: 199,
			description: "The ideal solution that empowers your brand to stand out in today's competitive digital landscape.",
			mostPopular: false,
			icon: "/service-assets/website-development/basic-plan-icon.png",
			included: [
				{
					name: "Professional one-page website",
					included: true,
				},
				{
					name: "Customized design",
					included: true,
				},
				{
					name: "Mobile-first optimization",
					included: true,
				},
				{
					name: "Additional pages",
					included: false,
				},
				{
					name: "Domain and Hosting",
					included: false,
				},
				{
					name: "Newsletter services",
					included: false,
				},
				{
					name: "Custom features",
					included: false,
				},
				{
					name: "SEO Optimization",
					included: false,
				},
			]
		},
		{
			name: "Standard",
			priceMonthly: 499,
			priceAnnually: 4790,
			perMonthAnnually: 399,
			description: "Enhanced online presence with a custom page included",
			mostPopular: true,
			icon: "/service-assets/website-development/standard-plan-icon.png",
			included: [
				{
					name: "Professional one-page website",
					included: true,
				},
				{
					name: "Customized design",
					included: true,
				},
				{
					name: "Mobile-first optimization",
					included: true,
				},
				{
					name: "Additional pages",
					included: true,
				},
				{
					name: "Domain and Hosting",
					included: true,
				},
				{
					name: "Newsletter services",
					included: false,
				},
				{
					name: "Custom features",
					included: false,
				},
				{
					name: "SEO Optimization",
					included: false,
				},
			]
		},
		{
			name: "Premium",
			priceMonthly: 999,
			priceAnnually: 9590,
			perMonthAnnually: 799,
			description: "Complete online business solution with enhanced features",
			mostPopular: false,
			icon: "/service-assets/website-development/premium-plan-icon.png",
			included: [
				{
					name: "Professional one-page website",
					included: true,
				},
				{
					name: "Customized design",
					included: true,
				},
				{
					name: "Mobile-first optimization",
					included: true,
				},
				{
					name: "Additional pages",
					included: true,
				},
				{
					name: "Domain and Hosting",
					included: true,
				},
				{
					name: "Newsletter services",
					included: true,
				},
				{
					name: "Custom features",
					included: true,
				},
				{
					name: "SEO Optimization",
					included: true,
				},
			]
		}
	]

	return (
		<PageTransition>
			<section className="website-development-section service-section">
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
												<ScheduleACallButton className="w-full" withIcon={false}
																						 service={"websiteDevelopment"}
																						 variant={plan.mostPopular ? "default" : "inverted"}>
												</ScheduleACallButton>
											</div>
											<hr/>
											<div className="flex flex-col items-start justify-start gap-2 pt-8">
												{plan.included.map((serviceInList, index) => (
													<div key={index} className={"inline-flex gap-2 items-center justify-start"}>
														{serviceInList.included ? <Check className="primary-color"/> :
															<Minus className="light-text"/>}
														{serviceInList.name == 'Custom features' ?
																<TooltipProvider>
																	<Tooltip>
																		<TooltipTrigger>
																			<p>{serviceInList.name}</p>
																		</TooltipTrigger>
																		<TooltipContent>
																			<p>e.g: Reservation, order placement</p>
																		</TooltipContent>
																	</Tooltip>
																</TooltipProvider>
																:
																<p>{serviceInList.name}</p>
														}
													</div>
												))}
											</div>
										</div>
									</React.Fragment>
								))}
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
												<ScheduleACallButton className="w-full" withIcon={false}
																						 service={"websiteDevelopment"}
																						 variant={plan.mostPopular ? "default" : "inverted"}>
												</ScheduleACallButton>
											</div>
											<hr/>
											<div className="flex flex-col items-start justify-start gap-2 pt-8">
												{plan.included.map((serviceInList, index) => (
													<div key={index} className={"inline-flex gap-2 items-center justify-start"}>
														{serviceInList.included ? <Check className="primary-color"/> :
															<Minus className="light-text"/>}
                            {serviceInList.name == 'Custom features' ?
                                <TooltipProvider>
                                  <Tooltip>
                                    <TooltipTrigger>
                                      <p>{serviceInList.name}</p>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>e.g: Reservation, order placement</p>
                                    </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                                :
                                <p>{serviceInList.name}</p>
                            }
													</div>
												))}
											</div>
										</div>
									</React.Fragment>
								))}
							</div>
						</TabsContent>
					</Tabs>
				</div>
				<FaqSection service={"websiteDevelopment"}/>
			</section>
		</PageTransition>
	);
}

export default Page;
