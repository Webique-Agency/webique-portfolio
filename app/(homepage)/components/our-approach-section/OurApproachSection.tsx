import React from 'react';
import ContentSection from "@/app/components/content-section/ContentSection";
import "./OurApproachSection.styles.scss";
import {Code, Figma, NotebookPen, Paintbrush, Paintbrush2, Rocket, TestTube2, Webcam} from "lucide-react";

export default function OurApproachSection() {
	return (
		<ContentSection title={"OUR APPROACH"}>
			<div className="steps-wrapper">
				<div className="step-card">
					<Webcam size={48} className="primary-color"/>
					<div className="step-description">
						<h6>1. Have a Meeting</h6>
						<p className="light-text">
							We start by scheduling a meeting to discuss your vision, goals, and expectations
							for the project. This helps us understand your needs in detail and tailor our approach accordingly.
						</p>
					</div>
				</div>
				<div className="step-card">
					<NotebookPen size={48} className="primary-color"/>
					<div className="step-description">
						<h6>2. Planing and Researching</h6>
						<p className="light-text">
							We begin by understanding your goals and researching your target audience and
							competitors. This helps us create the project that stands out and aligns with your business needs.
						</p>
					</div>
				</div>
				<div className="step-card">
					<Figma size={48} className="primary-color"/>
					<div className="step-description">
						<h6>3. Design and Prototyping</h6>
						<p className="light-text">
							Our team develops visual designs and wireframes that reflect your brand. These
							designs are tested with real users to gather feedback before we begin development.
						</p>
					</div>
				</div>
				<div className="step-card">
					<Code size={48} className="primary-color"/>
					<div className="step-description">
						<h6>4. Development and Implementation</h6>
						<p className="light-text">We bring the design to life by building the frontend and backend of the site/app.
							We ensure everything is scalable, secure, and integrated with necessary external systems.</p>
					</div>
				</div>
				<div className="step-card">
					<TestTube2 size={48} className="primary-color"/>
					<div className="step-description">
						<h6>5. Testing and Optimization</h6>
						<p className="light-text">
							We thoroughly test the site/app for functionality, security, and performance.
							Optimization is done to ensure fast load times and a smooth user experience across all devices.
						</p>
					</div>
				</div>
				<div className="step-card">
					<Rocket size={48} className="primary-color"/>
					<div className="step-description">
						<h6>6. Launch and Post-Launch Support</h6>
						<p className="light-text">
							After the project is ready, we deploy it and ensure it’s optimized for SEO. We
							continue providing support after launch, making improvements and updates based on user feedback.
						</p>
					</div>
				</div>
			</div>
		</ContentSection>
	);
}
