import HeroSection from "@/app/(homepage)/components/hero-section/HeroSection";
import SuccessSection from "@/app/(homepage)/components/success-section/SuccessSection";
import TestimonialSection from "@/app/(homepage)/components/testimonial-section/TestimonialSection";
import ServicesSection from "@/app/(homepage)/components/services-section/ServicesSection";

export default function Home() {
    return (
        <div>
            <HeroSection/>
            <SuccessSection/>
            <TestimonialSection/>
            <ServicesSection/>
        </div>
    );
}
