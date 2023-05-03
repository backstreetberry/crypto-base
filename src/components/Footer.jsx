import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
	return (
		<div className="rounded-div mt-8 pt-8 text-primary">
			<div className="grid md:grid-cols-2">
				<div className="flex justify-evenly w-full md:max-w-[300px]">
					<div>
						<h2 className="font-bold">Support</h2>
						<ul>
							<li className="mt-4">Help Center</li>
							<li className="mt-4">Contact Us</li>
							<li className="mt-4">API Status</li>
							<li className="mt-4">Documentation</li>
						</ul>
					</div>
					<div>
						<h2 className="font-bold">Info</h2>
						<ul>
							<li className="mt-4">About Us</li>
							<li className="mt-4">Careers</li>
							<li className="mt-4">Invest</li>
							<li className="mt-4">Legal</li>
						</ul>
					</div>
				</div>

				<div className="mx-8 md:mt-0">
					<div className="w-full flex justify-end">
						<div className="w-full md:w-[300px] pb-8 relative">
							<div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
								<ThemeToggle />
							</div>
							<p className="text-center md:text-right">Sign up for crypto news</p>
							<div className="py-4">
								<form>
									<input
										className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto"
										type="email"
										placeholder="Enter your email"
									/>
									<button className="bg-button text-btnText px-4 p-2 w-full shadow-xl rounded-2xl hover:shadow-2xl md:w-auto my-2">
										Sign Up
									</button>
								</form>
							</div>
							<div className="flex py-4 justify-between">
								<AiOutlineInstagram />
								<FaTwitter />
								<FaTiktok />
								<FaFacebookF />
								<FaGithub />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center justify-center">
				<img
					className="w-12 mr-4"
					src="https://static.coingecko.com/s/thumbnail-d5a7c1de76b4bc1332e48227dc1d1582c2c92721b5552aae76664eecb68345c9.png"
					alt="/"
				/>
				<p className="text-center text-xl py-4">Powered by Coin Gecko API</p>
			</div>
		</div>
	);
};

export default Footer;
