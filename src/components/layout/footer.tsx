import Link from 'next/link';
import ExternalLink from '../icons/externalLink';
import NewsletterContactForm from '../newsletterContactForm';

const PRIVACY_POLICY_URL =
	'https://www.iubenda.com/privacy-policy/61020748/legal';
const UNIVERSITY_NOTES_URL =
	'https://nicolasguarini.notion.site/Appunti-Universit-e5cefc29fff04a3283799023b7558337?pvs=74';

const internalLink = 'hover:text-white transition-colors';
const externalLinkClasses = 'text-[#A1A1A1] hover:text-white transition-colors';

const Footer = () => {
	return (
		<footer className="flex flex-col content-between container px-2 m-auto">
			<div className="flex flex-wrap justify-between border border-[#333232] rounded-lg md:p-12 sm:p-8 p-6 gap-10">
				<div className="flex flex-col gap-4">
					<h2 className="text-xl font-bold">Nicolas Guarini</h2>
					<p>Join my newsletter to stay up to date on my latest projects and ideas.</p>
					<NewsletterContactForm />
					<p className="text-sm text-[#A1A1A1]">
						By subscribing you agree to my{' '}
						<a
							href={PRIVACY_POLICY_URL}
							target="_blank"
							rel="noopener noreferrer"
							className="underline"
						>
							Privacy Policy
						</a>
						.
					</p>
				</div>

				<nav aria-label="Footer" className="flex flex-wrap gap-x-32 gap-y-8 w-max">
					<div className="flex flex-col gap-3 text-[#A1A1A1]">
						<Link href="/" className={internalLink}>Home</Link>
						<Link href="/about" className={internalLink}>About</Link>
						<Link href="/projects/client" className={internalLink}>Client Projects</Link>
						<Link href="/projects/personal" className={internalLink}>Personal Projects</Link>
					</div>

					<div className="flex flex-col gap-3 text-[#A1A1A1]">
						<Link href="/blog" className={internalLink}>Blog</Link>
						<Link href="/contact" className={internalLink}>Contact</Link>
						<a
							href={UNIVERSITY_NOTES_URL}
							target="_blank"
							rel="noopener noreferrer"
							className={internalLink}
						>
							University Notes <ExternalLink />
						</a>
						<a
							href={PRIVACY_POLICY_URL}
							target="_blank"
							rel="noopener noreferrer"
							className={internalLink}
						>
							Privacy Policy <ExternalLink />
						</a>
					</div>
				</nav>

				<div className="flex flex-col gap-3">
					<h2 className="text-lg font-medium">Follow me on</h2>
					<a
						href="https://www.linkedin.com/in/nicolasguarini/"
						target="_blank"
						rel="noopener noreferrer"
						className={externalLinkClasses}
					>
						LinkedIn <ExternalLink />
					</a>
					<a
						href="https://www.instagram.com/nicolas.guarini/"
						target="_blank"
						rel="noopener noreferrer"
						className={externalLinkClasses}
					>
						Instagram <ExternalLink />
					</a>
					<a
						href="https://github.com/nicolasguarini"
						target="_blank"
						rel="noopener noreferrer"
						className={externalLinkClasses}
					>
						GitHub <ExternalLink />
					</a>
				</div>
			</div>

			<div className="flex flex-wrap justify-between py-10 gap-y-2">
				<div>© {new Date().getFullYear()} Nicolas Guarini. All rights reserved.</div>
				<div className="flex flex-wrap gap-4">
					<a
						href={PRIVACY_POLICY_URL}
						target="_blank"
						rel="noopener noreferrer"
						className={internalLink}
					>
						Privacy Policy
					</a>
					<a
						href="https://github.com/nicolasguarini/nicolasguarini"
						target="_blank"
						rel="noopener noreferrer"
						className={internalLink}
					>
						GitHub
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
