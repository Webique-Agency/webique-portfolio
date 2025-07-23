import HeroSection from "@/app/(homepage)/components/hero-section/HeroSection";
import SuccessSection from "@/app/(homepage)/components/success-section/SuccessSection";
import TestimonialSection from "@/app/(homepage)/components/testimonial-section/TestimonialSection";
import ServicesSection from "@/app/(homepage)/components/services-section/ServicesSection";
import ProjectsSection from "@/app/(homepage)/components/projects-section/ProjectsSection";
import WhyWeStandOutSection from "@/app/(homepage)/components/why-we-stand-out-section/WhyWeStandOutSection";
import OurApproachSection from "@/app/(homepage)/components/our-approach-section/OurApproachSection";
import PageTransition from "@/app/components/page-transitions/PageTransition";

export default function Home() {
    return (
        <PageTransition>
            <HeroSection/>
            <SuccessSection/>
            <ServicesSection/>
            <ProjectsSection/>
            <TestimonialSection/>
            <WhyWeStandOutSection/>
            <OurApproachSection/>
        </PageTransition>
    );
}
