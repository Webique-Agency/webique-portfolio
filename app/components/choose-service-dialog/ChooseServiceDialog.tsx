import React from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";
import Link from "next/link";
import "./ChooseServiceDialog.styles.scss";

export default function ChooseServiceDialog({variant, className}: {
	variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "inverted",
	className?: string
}) {

	const services = [
		{
			service: "Website Development",
			link: "https://cal.com/webique/website-development",
		},
		{
			service: "Website Design",
			link: "https://cal.com/webique/website-design",
		},
		{
			service: "SaaS Development",
			link: "https://cal.com/webique/saas-development",
		},
		{
			service: "UI/UX Design",
			link: "https://cal.com/webique/ui-ux-design",
		},
		{
			service: "SEO Optimization",
			link: "https://cal.com/webique/seo-optimization",
		},
	]

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={variant} className={className}>
					Schedule a Call
					<ArrowUpRight/>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>Choose a service</DialogTitle>
					<DialogDescription>
						Schedule a call for a service that fits your needs.
					</DialogDescription>
				</DialogHeader>
				<div className="services-wrapper-dialog">
					{services.map((service, index) => (
						<Link key={index}
									className={`service-card div${index + 1}`}
									href={service.link}
									target={"_blank"}>
							<h6><span className="primary-color"></span> {service.service}</h6>
						</Link>
					))}
				</div>
			</DialogContent>
		</Dialog>);
}
