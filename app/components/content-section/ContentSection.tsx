import React, {ReactNode} from 'react';
import SectionHeader from "@/app/components/content-section/SectionHeader";

export default function ContentSection({children, title}: { children: ReactNode, title: string }) {
    return (
        <section className="generic-section-wrapper">
            <SectionHeader title={title}/>
            {children}
        </section>
    );
}
