import React, {ReactNode} from 'react';
import {
	BookOpen,
	BookOpenCheck,
	CalendarClock,
	CircleDollarSign,
	CircleHelp,
	Cog,
	Cpu,
	Figma,
	FileStack,
	Headset,
	Hexagon,
	LayoutPanelTop,
	LocateFixed,
	MonitorCog,
	MonitorSmartphone,
	MousePointerClick,
	NotebookPen,
	Package,
	PaintRoller,
	Ratio,
	Scaling,
	SearchCode,
	Shapes,
	Shield,
	TestTubes,
	Timer,
	View,
	Webhook,
	WrapText
} from "lucide-react";
import "./FaqSection.styles.scss";
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from '@/components/ui/accordion';

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

const uiUxDesign = [
	{
		question: "What is the difference between UI and UX design?",
		answer: "UI (User Interface) focuses on the look and feel of an application, while UX (User Experience) ensures smooth and intuitive user interactions.",
		icon: <MousePointerClick/>
	},
	{
		question: "Can you design for both web and mobile applications?",
		answer: "Yes, we specialize in designing responsive interfaces for websites, mobile apps, and web applications.",
		icon: <MonitorSmartphone/>
	},
	{
		question: "How do you ensure good user experience in your designs?",
		answer: "We conduct user research, usability testing, and follow best design practices to create engaging and user-friendly interfaces.",
		icon: <NotebookPen/>
	},
	{
		question: "Do you conduct A/B testing for UI/UX improvements?",
		answer: "Yes, we can run A/B tests to compare design variations and determine the best-performing UI/UX solutions.",
		icon: <TestTubes/>
	},
	{
		question: "Do you create prototypes before finalizing the design?",
		answer: "Yes, we develop interactive prototypes using tools like Figma to visualize and test the user flow before development.",
		icon: <Ratio/>
	},
	{
		question: "How do you ensure accessibility in your designs?",
		answer: "We follow WCAG (Web Content Accessibility Guidelines) to ensure inclusivity for users with disabilities, such as using proper color contrast and keyboard navigation.",
		icon: <View/>
	},
]

const seoOptimization = [
	{
		question: "What is SEO, and why is it important?",
		answer: "SEO (Search Engine Optimization) improves your website’s visibility on search engines like Google, driving organic traffic to your business.",
		icon: <Cog/>
	},
	{
		question: "Can you optimize an existing website for SEO?",
		answer: "Absolutely! We can analyze and optimize your current website for better search engine performance.",
		icon: <SearchCode/>
	},
	{
		question: "How long does it take to see SEO results?",
		answer: "SEO is a long-term strategy, and it typically takes 3-6 months to see significant improvements in rankings and traffic.",
		icon: <CalendarClock/>
	},
	{
		question: "Do you follow Google’s SEO guidelines?",
		answer: "Yes, we strictly adhere to Google’s best practices to ensure long-term success and avoid penalties.",
		icon: <BookOpenCheck/>
	},
	{
		question: "Do you offer keyword research services?",
		answer: "Yes, we conduct in-depth keyword research to identify the best opportunities for ranking higher in search results.",
		icon: <WrapText/>
	},
	{
		question: "Do you provide local SEO services?",
		answer: "Yes, we optimize websites for local searches, including Google My Business setup and location-based keyword strategies.",
		icon: <LocateFixed/>
	},
]

export default function FaqSection({service}: {
	service: "websiteDevelopment" | "websiteDesign" | "saasDevelopment" | "uiUxDesign" | "seoOptimization"
}) {

	const faqMap = new Map<string, { question: string, answer: string, icon: ReactNode }[]>();
	faqMap.set("websiteDevelopment", websiteDevelopment);
	faqMap.set("websiteDesign", websiteDesign);
	faqMap.set("saasDevelopment", saasDevelopment);
	faqMap.set("uiUxDesign", uiUxDesign);
	faqMap.set("seoOptimization", seoOptimization);

	return (
		<section className="faq-section-wrapper">
			<h3>Frequently Asked Questions</h3>
			<div className="faq-wrapper">
				{faqMap.get(service).map((faq, index) => (
					<Accordion type="single" collapsible key={index} className="border-1 p-4 w-full rounded-2xl">
						<AccordionItem value="item-1">
							<AccordionTrigger>
								<h6 className="inline-flex flex-row items-center gap-4">
									{faq.icon}
									{faq.question}
								</h6>
							</AccordionTrigger>
							<AccordionContent>
								<p className="light-text">{faq.answer}</p>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				))}
			</div>
		</section>
	);
}
