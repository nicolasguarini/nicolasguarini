import Link from 'next/link';
import ExternalLink from '../icons/externalLink';
import { LinkedinIcon } from 'react-share';
import NewsletterContactForm from '../newsletterContactForm';

const Footer = () => {
	return (
		<footer className="flex flex-col content-between container px-2 m-auto">
			<div className='flex flex-wrap justify-between border border-[#333232] rounded-lg md:p-12 sm:p-8 p-6 gap-10'>
				<div className='flex flex-col gap-4'>
					<h2 className='text-xl font-bold'>Nicolas Guarini</h2>
					<p>Join my newsletter to stay up to date on my latest projects and ideas.</p>
					<NewsletterContactForm />
					<p className='text-sm text-[#A1A1A1]'>
						By subscribing you agree to with my <a href="https://www.iubenda.com/privacy-policy/61020748/legal" target='_blank' className='underline'>Privacy Policy</a>.
					</p>
				</div>

				<div className='flex flex-wrap gap-x-32 gap-y-8 w-max'>
					<div className='flex flex-col gap-3 text-[#A1A1A1]'>
						<a href="/" className='hover:text-white transition-all'>Home</a>
						<a href="/about" className='hover:text-white transition-all'>About</a>
						<a href="/projects/client" className='hover:text-white transition-all'>Client Projects</a>
						<a href="/projects/personal" className='hover:text-white transition-all'>Personal Projects</a>
					</div>

					<div className='flex flex-col gap-3 text-[#A1A1A1]'>
						<a href="/" className='hover:text-white transition-all'>Blog</a>
						<a href="/contact" className='hover:text-white transition-all'>Contact</a>
						<a href="https://nicolasguarini.notion.site/Appunti-Universit-e5cefc29fff04a3283799023b7558337?pvs=74" target='_blank' className='hover:text-white transition-all'>University Notes <ExternalLink /></a>
						<a href="https://www.iubenda.com/privacy-policy/61020748/legal" target='_blank' className='hover:text-white transition-all'>Privacy Policy <ExternalLink /></a>
					</div>

				</div>

				<div className='flex flex-col gap-3'>
					<h1 className='text-lg font-medium'>Follow me on</h1>
					<Link href="https://www.linkedin.com/in/nicolasguarini/" target='_blank' className=' text-[#A1A1A1] hover:text-white transition-all'>LinkedIn <ExternalLink /></Link>
					<Link href="https://www.instagram.com/nicolas.guarini/" target='_blank' className=' text-[#A1A1A1] hover:text-white transition-all'>Instagram <ExternalLink /></Link>
					<Link href="https://github.com/nicolasguarini" target='_blank' className=' text-[#A1A1A1] hover:text-white transition-all'>GitHub <ExternalLink /></Link>
				</div>
				
			</div>
			
			<div className='flex flex-wrap justify-between py-10 gap-y-2'>
				<div>© 2024 Nicolas Guarini. All rights reserved.</div>
				<div className='flex flex-wrap gap-4'>
					<Link href="https://www.iubenda.com/privacy-policy/61020748/legal" target='_blank'>Privacy Policy</Link>
					<Link href="https://github.com/nicolasguarini/nicolasguarini" target='_blank'>GitHub</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
