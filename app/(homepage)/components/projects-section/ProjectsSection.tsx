import React from 'react';
import ContentSection from "@/app/components/content-section/ContentSection";
import projectList from "./project-list.json";
import Image from "next/image";
import Link from "next/link";
import "./ProjectsSection.styles.scss"

export default function ProjectsSection() {
	return (
		<ContentSection title={"FEATURED PROJECTS"} id={"projects"}>
			<div className="projects-wrapper">
				{projectList.map((project, projectIndex) => (
					<Link href={project.link} target={"_blank"} key={projectIndex} className="project-card">
						<Image width={250} height={250} src={project.splashImage} alt={project.name}/>
						<div className="project-text-wrapper">
							<h4>{project.name}</h4>
							<div className="project-services">
								{project.services.map((service, index) => (
									<p key={index} className="light-text">{service}</p>
								))}
							</div>
						</div>
					</Link>
				))}
			</div>
			{/*<Button variant={"outline"} className="w-full mt-8">*/}
			{/*	See all projects*/}
			{/*	<ChevronRight/>*/}
			{/*</Button>*/}
		</ContentSection>
	);
}
