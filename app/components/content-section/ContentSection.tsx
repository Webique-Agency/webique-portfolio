import React, {ReactNode} from 'react';
import SectionHeader from "@/app/components/content-section/SectionHeader";

export default function ContentSection({children, title, id = ""}: {
	children: ReactNode,
	title: string,
	id?: string
}) {
	return (
		<section className="generic-section-wrapper" id={id}>
			<SectionHeader title={title}/>
			{children}
		</section>
	);
}
