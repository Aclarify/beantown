import {
	faLocation,
	faMailBulk,
	faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function Footer() {
	return (
		<section id="footer">
			<div
				id="footerContainer"
				className="flex flex-col md:grid md:grid-cols-5   w-full h-auto bg-[#15284C] text-white px-4 "
			>
				<div
					id="linkSection"
					className="sm:col-span-4 sm:order-last  sm:flex sm:justify-between m-10 "
				>
					<div id="services" className="pt-10 max-w-sm">
						<h1 className="text-xl ">Services</h1>
						<div className="flex justify-between sm:flex-col">
							<span>Heating & Cooling</span>
							<span>Electrical</span>
							<span>Plumbing</span>
						</div>
					</div>
					<div id="company" className="pt-8 max-w-sm">
						<h1 className="text-xl font-bold">Company</h1>
						<div className="flex justify-between sm:flex-col">
							<span>About Us</span>
							<span>Carreers</span>
							<span>Memberships</span>
							<span>FAQ</span>
							<span>Blog</span>
						</div>
					</div>
					<div id="resources" className="pt-8 max-w-sm">
						<h1 className="text-xl font-bold">Resources</h1>
						<div className="flex justify-between sm:flex-col">
							<span>Resources1</span>
							<span>Resources2</span>
							<span>Resources3</span>
							<span>Resources4</span>
							<span>Resources5</span>
						</div>
					</div>
					<div id="contact" className="pt-8">
						<div>
							<span className="font-bold text-xl">Contact</span>
						</div>
						<div className="flex justify-start pt-2 space-x-2">
							<FontAwesomeIcon icon={faLocation} />
							<span>9 Aldrin Rd Suite 10, Plymouth, MA 02360</span>
						</div>
						<div className="flex justify-start pt-2 space-x-2 ">
							<FontAwesomeIcon icon={faPhone} />
							<span>(508) 594-3279</span>
						</div>
						<div className="flex justify-start pt-2 space-x-2 ">
							<FontAwesomeIcon icon={faMailBulk} />
							<span>info@brantownac.com</span>
						</div>
					</div>
				</div>
				<div id="logoSection" className="">
					<div className="flex space-x-4 pt-8">
						<div id="logoImage">
							<img src="images/logo.svg" />
						</div>
						<div
							id="socialMediaIconGroup"
							className="sm:hidden flex align-middle items-center space-x-2"
						>
							<img className="mx-auto h-5 w-5" src="images/home_page/fb.svg" />
							<img
								className="mx-auto h-5 w-5"
								src="images/home_page/instagram.svg"
							/>
							<img
								className="mx-auto h-5 w-5"
								src="images/home_page/twitter.svg"
							/>
						</div>
					</div>
					<div id="footerDescription" className="pb-8 ">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim{' '}
						</p>
					</div>
					<div
						id="socialMediaIconGroup"
						className="hidden md:flex space-x-2 pb-8"
					>
						<img className="h-5 w-5" src="images/home_page/fb.svg" />
						<img className=" h-5 w-5" src="images/home_page/instagram.svg" />
						<img className=" h-5 w-5" src="images/home_page/twitter.svg" />
					</div>
				</div>
			</div>
			<div
				id="copyWrite"
				className="flex justify-center items-center align-middle pt-6 border-t-2 border-grey-100 bg-[#15284C] text-white"
			>
				<span className="text-xs">© Beantown 2022 · Privacy Policy</span>
			</div>
		</section>
	);
}
