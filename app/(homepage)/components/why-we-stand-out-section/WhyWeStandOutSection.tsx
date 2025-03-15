import React from 'react';
import ContentSection from "@/app/components/content-section/ContentSection";
import {CalendarCheck2, GraduationCap, Handshake, Info, LayoutDashboard, MonitorCog} from "lucide-react";
import "./WhyWeStandOutSection.styles.scss"

export default function WhyWeStandOutSection() {
	return (
		<ContentSection title={"WHY WE STAND OUT"}>
			<div className="benefits-wrapper">
				<div className="benefit-card-wrapper">
					<div className="icon-wrapper">
						<GraduationCap size={24} className="primary-color"/>
					</div>
					<p>Our team brings a wealth of knowledge and skills across web development and design.</p>
				</div>
				<div className="benefit-card-wrapper">
					<div className="icon-wrapper">
						<Handshake size={24} className="primary-color"/>
					</div>
					<p>Custom website creation and digital experience designed specifically for your business needs.</p>
				</div>
				<div className="benefit-card-wrapper">
					<div className="icon-wrapper">
						<MonitorCog size={24} className="primary-color"/>
					</div>
					<p>Utilizing the latest technologies to ensure your website is fast, secure, and scalable.</p>
				</div>
				<div className="benefit-card-wrapper">
					<div className="icon-wrapper">
						<LayoutDashboard size={24} className="primary-color"/>
					</div>
					<p>Focusing on delivering intuitive, user-centric designs that capture your brands essence.</p>
				</div>
				<div className="benefit-card-wrapper">
					<div className="icon-wrapper">
						<Info size={24} className="primary-color"/>
					</div>
					<p>Keeping you informed at every step of the process, ensuring transparency and collaboration.</p>
				</div>
				<div className="benefit-card-wrapper">
					<div className="icon-wrapper">
						<CalendarCheck2 size={24} className="primary-color"/>
					</div>
					<p>Prioritizing deadlines, ensuring your project is completed efficiently and on schedule.</p>
				</div>
			</div>
		</ContentSection>
	);
}
