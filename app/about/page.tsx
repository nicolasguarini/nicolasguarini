import React from 'react';
import Container from '../../components/layout/Container';
import Layout from '../../components/layout/Layout';
import { Metadata } from 'next';
import FadeInUpText from '@/components/FadeInUpText';

export const metadata: Metadata = {
	title: 'About',
};

const About = () => {
	return (
		<Layout>
			<Container>
				<FadeInUpText delay={0.16}>
					<h1 className="text-2xl font-bold ">about me</h1>
				</FadeInUpText>

				<FadeInUpText delay={0.24}>
					<div className="pt-6 text-lightgray mb-20 ">
						<div className="prose prose-invert max-w-none m-auto text-gray">
							I'm Nicolas Guarini and I'm a 22y/o student and occasionally freelancer
							based in Italy. Graduated in Computer
							Science at University of Insubria, I'm currently studying for a Master's Degree
							in Computer Science at University of Milano-Bicocca.
							<br />
							<br />
							I'm also a private teacher of programming and data analysis for
							university students, and a freelance developer of web solutions
							for small and medium-sized companies and freelancers. I have
							developed several projects in the mobile field, fullstack webapps,
							desktop, data analysis, and lately I'm getting very passionate
							about security analysis and reverse engineering. Currently, i'm
							studying the Flutter framework and backend development with
							express.js.
							<br />
							<br />
							During 2023, 
							I was a contracted university tutor for first-year freshmen, 
							teaching Computer Programming and Architecture courses
							<br />
							<br />
							In my free time, I love creating and playing music, and I'm
							extremely passionate to chess and strategy games in general. I've
							also won a few rubik's cube speedsolving competitions, averaging
							about 14 seconds of resolution time.
						</div>
					</div>
				</FadeInUpText>
			</Container>
		</Layout>
	);
};

export default About;
