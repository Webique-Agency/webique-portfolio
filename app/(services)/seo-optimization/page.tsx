import React from 'react';
import ServiceHeader from "@/app/(services)/components/service-header/ServiceHeader";
import PricingCard from "@/app/(services)/components/PricingCard";
import {View} from "lucide-react";
import Image from "next/image";
import FaqSection from "@/app/(services)/components/faq-section/FaqSection";
import PageTransition from "@/app/components/page-transitions/PageTransition";

export default function Page() {
  return (
      <PageTransition>
        <section className="seo-optimization-section service-section">
          <ServiceHeader serviceName={"SEO Optimization"}
                         serviceDescription={"Stand out with a high-quality, custom-built website designed to enhance user experience and grow your business."}/>

          <Image width={250} height={250} src={"/service-assets/seo-optimization-v2.png"}
                 className="service-background" alt={"Grid"}/>

          <div className="pricing-wrapper">
            <PricingCard price={499}
                         service={"seoOptimization"}
                         icon={<View/>}
                         iconDescription={"Optimized for Maximum Visibility"}
                         description={"Powerful SEO strategies designed to improve visibility, increase traffic, and enhance online performance."}
                         includedServices={[
                           "Keyword research & strategy",
                           "On-page SEO optimization",
                           "Competitor analysis & insights",
                           "Performance tracking & reporting",
                           "Content strategy & optimization"
                         ]}/>
          </div>

          <FaqSection service={"seoOptimization"}/>
        </section>
      </PageTransition>
  );
}
