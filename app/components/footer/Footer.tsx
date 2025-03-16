import React from 'react';
import "./Footer.styles.scss";
import Link from "next/link";
import {Button} from "@/components/ui/button";
import {ArrowUpRight} from "lucide-react";
import Image from "next/image";

export default function Footer() {
	return (
		<footer>
			<div className="footer-content lg:w-[1360px] max-[1025px]:px-8">
				<div className="footer-message">
					<h1>Build tomorrows success stories!</h1>

					<div className="navbar-links">
						<Link href={"/"}>Home</Link>
						<Link href={"/"}>Services</Link>
						<Link href={"/"}>Projects</Link>
					</div>
				</div>

				<div className="cta-wrapper">
					<h3>Let us help you with your next big idea</h3>
					<Button variant={"secondary"} className={"w-full justify-between"}>
						Schedule a call
						<ArrowUpRight/>
					</Button>
					<h6>Feel free to reach out for any questions: <Link
						href={"mailto:contact.webique@proton.me"}>contact.webique@proton.me</Link></h6>
				</div>
				{/*<Image width={250} height={250} src={"/footer-logo.png"} alt={"Webique logo footer"} className="footer-logo"/>*/}
			</div>
		</footer>
	);
}
