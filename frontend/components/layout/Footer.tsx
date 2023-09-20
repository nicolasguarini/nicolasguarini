import Link from 'next/link';
import FadeInUpText from '../FadeInUpText';

const Footer = () => {
	return (
		<footer className="container md:max-w-[80%] font-extralight m-auto inset-x-0 bottom-0 w-full p-3 mt-20">
			<div className="font-extralight text-gray text-center md:text-right mb-10">
				Got an Interesting project? I can help you!
			</div>

			<div className="w-full border-t border-lightgray"></div>

			<div className="p-12 pb-12 md:pb-3 px-0 grid gird-cols-1 lg:grid-cols-5">
				<div className="pb-10 text-center md:text-left lg:col-span-2">
					<div className="text-lightgray mb-1">connect with me</div>
					<div>
						<Link
							href="https://www.linkedin.com/in/nicolasguarini/"
							target={'_blank'}
							rel="noreferrer">
							in @nicolasguarini
						</Link>
					</div>
				</div>

				<div className="pb-12 text-center md:text-right">
					<div className="text-lightgray mb-1">links</div>
					<div>
						<Link href="/privacy-policy">privacy policy</Link>
					</div>
				</div>

				<div className="pb-0 text-center md:text-right lg:col-span-2">
					<div className="text-lightgray mb-1">say hello</div>
					<div>
						<Link
							href="mailto:nicolasguarini.py@gmail.com"
							target={'_blank'}
							rel="noreferrer">
							nicolasguarini.py@gmail.com
						</Link>
					</div>
				</div>
			</div>

			<div className="text-center text-lightgray font-extralight mt-8 mb-4 lg:mt-2 text-sm">
				developed by nicolas guarini
			</div>
		</footer>
	);
};

export default Footer;
