import React from 'react';
import ContentSection from "@/app/components/content-section/ContentSection";
import "./ServicesSection.styles.scss";
import Link from "next/link";

const services = [
	{
		service: "Website Development",
		path: "website-development",
		description: "Bring your ideas to life with custom-built websites designed for performance and scalability."
	},
	{
		service: "Website Design",
		path: "website-design",
		description: "Engage your audience with stunning designs crafted for seamless navigation and visual impact."
	},
	{
		service: "SaaS Development",
		path: "saas-development",
		description: "Transform your operations with innovative SaaS platforms tailored to your business growth."
	},
	{
		service: "UI/UX Design",
		path: "ui-ux-design",
		description: "Delight your users with intuitive interfaces and experiences that leave a lasting impression."
	},
	{
		service: "SEO Optimization",
		path: "seo-optimization",
		description: "Delight your users with intuitive interfaces and experiences that leave a lasting impression."
	},
]

export default function ServicesSection() {
	return (
		<ContentSection title={"SERVICES WE PROVIDE"} id={"services"}>
			<div className="services-wrapper">
				{services.map((service, index) => (
					<Link key={index} className={`service-card div${index + 1}`} href={service.path}>
						<h4 className="service-number primary-color">
							0{index + 1}
						</h4>
						<div className="service-text">
							<h4><span className="primary-color"></span> {service.service}</h4>
							<p className="light-text">{service.description}</p>
						</div>
					</Link>
				))}
			</div>
		</ContentSection>
	);
}
