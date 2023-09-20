'use client';
import Link from 'next/link';
import { useState } from 'react';
import GitHubIcon from '../icons/GitHubIcon';
import MobileMenu from './MobileMenu';
import FadeInUpText from '../FadeInUpText';

export type Navigation = {
	name: string;
	to: string;
}[];

const navigation: Navigation = [
	{ name: 'home/', to: '/' },
	{ name: 'about/', to: '/about' },
	{ name: 'contact/', to: '/contact' },
	{ name: 'resume/', to: 'https://www.linkedin.com/in/nicolasguarini/' },
];

const Navbar = () => {
	const [open, setOpen] = useState(false);
	let delay: number = 0;

	return (
		<nav className="bg-black py-5 px-6 md:py-3 fixed min-w-full z-50">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<Link href="/" className="flex items-center wow fadeIn font-bold">
					<FadeInUpText delay={0}>nicolas guarini</FadeInUpText>
				</Link>

				<button
					type="button"
					className="inline-flex items-center p-2 ml-3 md:hidden"
					onClick={() => setOpen(!open)}>
					<span className="sr-only">Open main menu</span>
					<FadeInUpText delay={0.08}>
						<span>menu</span>
					</FadeInUpText>
				</button>

				<div className="hidden w-full md:block md:w-auto">
					<ul className="flex flex-col p-4 mt-4 md:flex-row  md:mt-0 ">
						{navigation.map((item) => {
							delay += 0.08;
							return (
								<li key={item.name}>
									<Link href={item.to} className="block py-1 px-8 font-normal">
										<FadeInUpText delay={delay}>{item.name}</FadeInUpText>
									</Link>
								</li>
							);
						})}

						<li>
							<Link
								href="https://github.com/nicolasguarini"
								className="block py-1 pl-8 font-normal border-l-[1px] border-[#5E5E5E]">
								<FadeInUpText delay={delay + 0.08}>
									<GitHubIcon />
								</FadeInUpText>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<MobileMenu open={open} setOpen={setOpen} navigation={navigation} />
		</nav>
	);
};

export default Navbar;
