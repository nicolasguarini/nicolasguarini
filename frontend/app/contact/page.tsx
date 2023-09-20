import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Container from '../../components/layout/Container';
import Layout from '../../components/layout/Layout';
import { Metadata } from 'next';
import FadeInUpText from '@/components/FadeInUpText';

export const metadata: Metadata = {
	title: 'Contacts',
	description:
		'If you have an interesting idea, a job offer, or a project that you would like to start, if you want to ask me anything, or if you just want to say hello, contact me!',
};

const contact = () => {
	return (
		<Layout>
			<Container>
				<FadeInUpText delay={0.08}>
					<h1 className="text-2xl font-bold ">say hello 👋</h1>
				</FadeInUpText>

				<FadeInUpText delay={0.16}>
					<div className="max-w-full md:max-w-[80%] lg:max-w-[60%]">
						<p className="text-lightgray pt-5 ">
							{`If you have an interesting idea, a job offer, or a project that you would like to start, if you want to ask me anything, or if you just want to say hello, contact me!`}
						</p>
					</div>
				</FadeInUpText>

				<FadeInUpText delay={0.24}>
					<form
						action="https://formspree.io/f/mzbljvpn"
						method="POST"
						name="contact"
						className="mt-10">
						<div>
							<label
								htmlFor="name"
								className="text-lightgray font-normal block">
								Name:
							</label>
							<input
								type="text"
								name="name"
								className="border-b-2 border-white bg-black w-full block h-10 p-2 mt-2"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="text-lightgray font-normal mt-6 block">
								Email:
							</label>
							<input
								type="email"
								name="email"
								className="border-b-2 border-white bg-black w-full block h-10 p-2 mt-2"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="text-lightgray font-normal mt-6 block">
								Message:
							</label>
							<textarea
								name="message"
								rows={7}
								className="border-b-2 border-white bg-black w-full block p-2 mt-2 "></textarea>
						</div>

						<button
							type="submit"
							className="tracking-widest uppercase border py-4 px-6 mt-8">
							send message
						</button>
						<div className="pt-5 text-lightgray">
							By continuing, you accept the terms and conditions contained in my{' '}
							<Link className="underline" href="/privacy-policy">
								Privacy Policy
							</Link>
						</div>
					</form>
				</FadeInUpText>
			</Container>
		</Layout>
	);
};

export default contact;
