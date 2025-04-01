import React from 'react';
import ContentSection from "@/app/components/content-section/ContentSection";
import "./OurApproachSection.styles.scss";
import {Code, Figma, NotebookPen, Rocket, TestTube2, Webcam} from "lucide-react";

export default function OurApproachSection() {
	return (
		<ContentSection title={"OUR APPROACH"}>
			<div className="steps-wrapper">
				<div className="step-card">
					<Webcam size={24} className="primary-color"/>
					<div className="step-description">
						<h6>1. Have a Meeting</h6>
					</div>
				</div>
				<div className="step-card">
					<NotebookPen size={24} className="primary-color"/>
					<div className="step-description">
						<h6>2. Planing and Researching</h6>
					</div>
				</div>
				<div className="step-card">
					<Figma size={24} className="primary-color"/>
					<div className="step-description">
						<h6>3. Design and Prototyping</h6>
					</div>
				</div>
				<div className="step-card">
					<Code size={24} className="primary-color"/>
					<div className="step-description">
						<h6>4. Development and Implementation</h6>
					</div>
				</div>
				<div className="step-card">
					<TestTube2 size={24} className="primary-color"/>
					<div className="step-description">
						<h6>5. Testing and Optimization</h6>
					</div>
				</div>
				<div className="step-card">
					<Rocket size={24} className="primary-color"/>
					<div className="step-description">
						<h6>6. Launch and Post-Launch Support</h6>
					</div>
				</div>
			</div>
		</ContentSection>
	);
}
