'use client';
import Whoami from '@/components/Whoami';
import ScrollDownIcon from '@/components/icons/ScrollDownIcon';
import Layout from '@/components/layout/Layout';
import TypeWriter, { TypewriterClass } from 'typewriter-effect';

export default function Home() {
	return (
		<Layout>
			<div className="h-screen text-center">
				<div className="text-center text-3xl font-thin text-gray absolute top-[40%] p-6 md:px-40 lg:px-80">
					<TypeWriter
						onInit={(typewriter: TypewriterClass) => {
							typewriter
								.typeString(
									'I make webapps, mobile apps, UI/UX design, data analysis and more;',
								)
								.start();
						}}
						options={{
							delay: 75,
						}}
					/>
				</div>

				<ScrollDownIcon />
			</div>

			<Whoami />
		</Layout>
	);
}
