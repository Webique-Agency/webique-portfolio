import React from 'react';
import ContentSection from "@/app/components/content-section/ContentSection";
import "./ServicesSection.styles.scss";
import Link from "next/link";
import {ArrowUpRight} from "lucide-react";

const services = [
  {
    service: "UI/UX Design",
    path: "ui-ux-design",
    price: 2999,
    description: "Delight your users with intuitive interfaces and experiences that leave a lasting impression."
  },
  {
    service: "SaaS Development",
    path: "saas-development",
    price: 2499,
    description: "Transform your operations with innovative SaaS platforms tailored to your business growth."
  },
  {
    service: "Website Design",
    path: "website-design",
    price: 599,
    description: "Engage your audience with stunning designs crafted for seamless navigation and visual impact."
  },
  {
    service: "SEO Optimization",
    path: "seo-optimization",
    price: 499,
    description: "Delight your users with intuitive interfaces and experiences that leave a lasting impression."
  },
  {
    service: "Website Development",
    path: "website-development",
    price: 99,
    description: "Bring your ideas to life with custom-built websites designed for performance and scalability."
  },
]

export default function ServicesSection() {
  return (
      <ContentSection title={"SERVICES WE PROVIDE"} id={"services"}>
        <div className="services-wrapper">
          {services.map((service, index) => (
              <Link key={index} className={`service-card div${index + 1}`} href={service.path}>
                <div className="service-number-and-header">
                  <h4 className="service-number primary-color">
                    0{index + 1}
                  </h4>
                  <div className="service-text">
                    <h4><span className="primary-color"></span> {service.service}</h4>
                  </div>
                </div>
                <div className="separator-line primary-color"></div>
                <div className="service-pricing-wrapper">
                  {service.price ?
                      <div className={"start-pricing"}>
                        <h4>Starting from: <span className={"primary-color"}>{service.price}€+</span></h4>
                        <div className={"see-details"}>
                          <h6>See all details</h6>
                          <ArrowUpRight/>
                        </div>
                      </div>
                      :
                      <div className={'primary-color explore-plans'}>
                        <h6>Explore plans </h6>
                        <ArrowUpRight/>
                      </div>}
                </div>
              </Link>
          ))}
        </div>
      </ContentSection>
  );
}
