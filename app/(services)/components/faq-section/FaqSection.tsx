import React from 'react';
import {CircleDollarSign, Headset, LayoutPanelTop, MonitorCog, MonitorSmartphone, Timer} from "lucide-react";
import "./FaqSection.styles.scss";

const websiteDevelopment = [
    {
        question: "How long does it take to develop a website?",
        answer: "The timeline depends on the complexity of the project. A simple website can take 1-2 weeks, while more complex sites may take several months.",
        icon: <Timer/>
    },
    {
        question: "Do you build websites from scratch or use templates?",
        answer: "We offer both options. We can create a custom website tailored to your needs or work with high-quality templates to speed up the process",
        icon: <LayoutPanelTop/>
    },
    {
        question: "Will my website be optimized for mobile devices?",
        answer: "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop use.",
        icon: <MonitorSmartphone/>
    },
    {
        question: "What technologies do you use for web development?",
        answer: "We use modern technologies like NextJs, React, Angular, and backend frameworks like Node.js.",
        icon: <MonitorCog/>
    },
    {
        question: "Do you provide website maintenance after launch?",
        answer: "Yes, we offer ongoing maintenance and support to keep your website updated and secure.",
        icon: <Headset/>
    },
    {
        question: "Can you integrate third-party services like payment gateways or CRM systems?",
        answer: "Yes, we can integrate various third-party services such as Stripe, PayPal, HubSpot, and more to enhance your website’s functionality. But this feature is commonly integrated into SaaS solutions.",
        icon: <CircleDollarSign/>
    },
]


export default function FaqSection({service}: { service: string }) {

    let questionsForService: { question: string, answer: string, icon: React.ReactNode }[] = [];

    switch (service) {
        case "websiteDevelopment":
            questionsForService = websiteDevelopment;
    }

    return (
        <section className="faq-section-wrapper">
            <h3>Frequently Asked Questions</h3>
            <div className="faq-wrapper">
                {questionsForService.map((faq, index) => (
                    <div key={index} className="question">
                        <div className="question-icon">
                            {faq.icon}
                        </div>
                        <div className="question-text">
                            <h6>{faq.question}</h6>
                            <p className="light-text">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
