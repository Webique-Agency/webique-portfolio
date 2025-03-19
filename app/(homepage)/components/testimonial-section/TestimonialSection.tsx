import React from 'react';
import "./TestimonialSection.styles.scss";
import ContentSection from "@/app/components/content-section/ContentSection";
import testimonials from "./testimonials.json";
import Image from "next/image";
import Link from "next/link";

export default function TestimonialSection() {
	return (
		<ContentSection title={"WORDS FROM OUR CLIENTS"}>
			<div className="testimonial-cards-wrapper">
				{testimonials.map((testimonial, index) => (
					<div key={index} className="testimonial-card-content">
						<Image width={250} height={250} src={testimonial.avatar} alt={testimonial.firm}/>
						<div className="testimonial-text-wrapper">
							<p>{testimonial.text}</p>

							<div className="author-wrapper">
								<p className="primary-color">{testimonial.from}</p>
								<p className="light-text">
									{testimonial.role} - <Link className="light-text" href={testimonial.link} target={"_blank"}>
									{testimonial.firm}
								</Link>
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</ContentSection>
	);
}
