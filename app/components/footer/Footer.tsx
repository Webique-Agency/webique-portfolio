import React from 'react';
import "./Footer.styles.scss";
import Link from "next/link";
import ChooseServiceDialog from "@/app/components/choose-service-dialog/ChooseServiceDialog";

export default function Footer() {
	return (
		<footer>
			<div className="footer-content lg:w-[1360px] max-[1025px]:px-8">
				<div className="footer-message">
					<h1>Build tomorrows success stories!</h1>

					<div className="navbar-links">
						<Link href={"/"}>Home</Link>
						<Link href={"/#services"}>Services</Link>
						<Link href={"/#projects"}>Projects</Link>
					</div>
				</div>

				<div className="cta-wrapper">
					<h3>Let us help you with your next big idea</h3>
					<ChooseServiceDialog variant={"secondary"} className={"w-full justify-between"}/>
					<h6>Feel free to reach out for any questions: <Link
						href={"mailto:webique.contact@proton.me"}>webique.contact@proton.me</Link></h6>
				</div>
			</div>
		</footer>
	);
}
