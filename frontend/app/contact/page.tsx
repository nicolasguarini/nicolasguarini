import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Container from '../../components/layout/Container';
import Layout from '../../components/layout/Layout';

const contact = () => {
	return (
		<Layout>
			<Head>
				<title>Contact | Nicolas Guarini</title>
				<meta
					name="description"
					content="If you have an interesting idea, a project that you would like to start
                        but you don't know where to start, if you want to ask me anything, or if
                        you just want to say hello, contact me!"
				/>

				<meta name="og:title" content="Contact | Nicolas Guarini" />
				<meta
					name="og:description"
					content="If you have an interesting idea, a project that you would like to start
                        but you don't know where to start, if you want to ask me anything, or if
                        you just want to say hello, contact me!"
				/>
			</Head>
			<Container>
				<h1 className="text-2xl font-bold wow fadeInUp">say hello 👋</h1>
				<div className="max-w-full md:max-w-[80%] lg:max-w-[60%]">
					<p className="text-lightgray pt-5 wow fadeInUp">
						{`If you have an interesting idea, a project that you would like to start
                    but you don't know where to start, if you want to ask me anything, or if
                    you just want to say hello, contact me!`}
					</p>
				</div>

				<form
					method="POST"
					action="/success"
					name="contact"
					data-netlify="true"
					className="mt-10">
					<input type="hidden" name="form-name" value="contact" />
					<div className="wow fadeInUp" data-wow-delay="0s">
						<label htmlFor="name" className="text-lightgray font-normal block">
							Name:
						</label>
						<input
							type="text"
							name="name"
							className="border-b-2 border-white bg-black w-full block h-10 p-2 mt-2"
						/>
					</div>

					<div className="wow fadeInUp" data-wow-delay="0.1s">
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

					<div className="wow fadeInUp" data-wow-delay="0.2s">
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
						className="tracking-widest uppercase border py-4 px-6 mt-8 wow fadeInUp"
						data-wow-delay="0.3s">
						send message
					</button>
					<div
						className="pt-5 text-lightgray wow fadeInUp"
						data-wow-delay="0.3s">
						By continuing, you accept the terms and conditions contained in my{' '}
						<Link className="underline" href="/privacy-policy">
							Privacy Policy
						</Link>
					</div>
				</form>
			</Container>
		</Layout>
	);
};

export default contact;
