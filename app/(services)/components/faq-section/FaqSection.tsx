import React from 'react';
import {
    BookOpen,
    CircleDollarSign, CircleHelp, Cpu,
    Figma, FileStack,
    Headset, Hexagon,
    LayoutPanelTop,
    MonitorCog,
    MonitorSmartphone,
    Package, PaintRoller, Scaling, Shapes, Shield,
    Timer, Webhook
} from "lucide-react";
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

const websiteDesign = [
    {
        question: "What is included in your website design services?",
        answer: "Our design services include wireframing, UI/UX design, prototyping, and full design implementation with a focus on usability and aesthetics.",
        icon: <Package/>
    },
    {
        question: "Will I receive the design files after the project is completed?",
        answer: "Yes, we provide all necessary design assets, including Figma files, along with exported images and icons.",
        icon: <Figma/>
    },
    {
        question: "Can I request revisions during the design process?",
        answer: "Yes, all our websites are fully responsive and optimized for mobile, tablet, and desktop use.",
        icon: <FileStack/>
    },
    {
        question: "Can you redesign my existing website?",
        answer: "Yes, we can redesign your current website if you don't like the current design",
        icon: <PaintRoller/>
    },
    {
        question: "Do you follow any specific design principles?",
        answer: "We follow modern design trends, usability guidelines, and accessibility standards to create intuitive and visually appealing websites.",
        icon: <BookOpen/>
    },
    {
        question: "Do you offer branding and logo design as part of website design?",
        answer: "Partially, currently we only offer logo creation.",
        icon: <Hexagon/>
    },
]

const saasDevelopment = [
    {
        question: "What is SaaS development?",
        answer: "SaaS (Software as a Service) development involves creating cloud-based applications that users can access via a web browser without needing installation.",
        icon: <CircleHelp/>
    },
    {
        question: "How secure are your SaaS applications?",
        answer: "We implement enterprise-grade security measures, including encryption, authentication, and compliance with data protection regulations.",
        icon: <Shield/>
    },
    {
        question: "How scalable are your SaaS solutions?",
        answer: "Our SaaS applications are built to scale, allowing businesses to grow without worrying about infrastructure limitations.",
        icon: <Scaling/>
    },
    {
        question: "What technologies do you use for SaaS development?",
        answer: "We use modern tech stacks like NextJs, Angular, Node.js, Java, Python, and cloud platforms like AWS and Google Cloud.",
        icon: <Cpu/>
    },
    {
        question: "Do you provide API integrations?",
        answer: "Yes, we can integrate third-party APIs or develop custom APIs to connect your SaaS platform with other services.",
        icon: <Webhook/>
    },
    {
        question: "Do you offer a free trial or demo version of SaaS products?",
        answer: "Yes, we can implement free trial periods or demo versions to allow users to test the platform before committing to a subscription.",
        icon: <Shapes/>
    },
]

export default function FaqSection({service}: {
    service: "websiteDevelopment" | "websiteDesign" | "saasDevelopment" | "uiUxDesign" | "seoOptimization"
}) {

    let questionsForService: { question: string, answer: string, icon: React.ReactNode }[] = [];

    switch (service) {
        case "websiteDevelopment":
            questionsForService = websiteDevelopment;
            break
        case "websiteDesign":
            questionsForService = websiteDesign;
            break
        case "saasDevelopment":
            questionsForService = saasDevelopment;
            break
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
