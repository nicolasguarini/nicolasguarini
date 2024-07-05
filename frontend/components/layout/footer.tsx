import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="flex flex-col content-between container px-2 m-auto">
			<div className='flex flex-wrap justify-between border border-[#333232] rounded-lg md:p-12 sm:p-8 p-6 gap-10'>
				<div className='flex flex-col gap-4'>
					<h2 className='text-xl font-bold'>Nicolas Guarini</h2>
					<p>Join my newsletter to stay up to date on my latest projects and ideas.</p>
					<form action="" className='flex flex-row gap-2'>
						<input type="email" placeholder="Email address" className="w-full rounded-lg p-2 text-sm bg-[#EDEDED]" />
						<button className='bg-transparent rounded-lg p-2 border-[#333232] border-2 py-2 px-6'>Subscribe</button>
					</form>
					<p className='text-sm text-[#A1A1A1]'>
						By subscribing you agree to with my Privacy Policy.
					</p>
				</div>

				<div className='flex flex-wrap gap-x-32 gap-y-8 w-max'>
					<div className='flex flex-col gap-3 text-[#A1A1A1]'>
						<p className='underline'>Home</p>
						<p className='underline'>About</p>
						<p className='underline'>Client Projects</p>
						<p className='underline'>Personal Projects</p>
					</div>

					<div className='flex flex-col gap-3 text-[#A1A1A1]'>
						<p className='underline'>Blog</p>
						<p className='underline'>Resume</p>
						<p className='underline'>Contact</p>
						<p className='underline'>University Notes</p>
					</div>

				</div>

				<div className='flex flex-col gap-3'>
					<h1 className='text-lg font-medium'>Follow me on</h1>
					<p className='underline text-[#A1A1A1]'>LinkedIn</p>
				</div>
				
			</div>
			
			<div className='flex flex-wrap justify-between py-10'>
				<div>© 2024 Nicolas Guarini. All rights reserved.</div>
				<div className='flex flex-wrap gap-4'>
					<Link href="/">Privacy Policy</Link>
					<Link href="/">Terms of Service</Link>
					<Link href="/">Cookie Settings</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
