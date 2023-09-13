'use client';

import TypeWriter, { TypewriterClass } from 'typewriter-effect';

const Hero = () => {
	return (
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
	);
};

export default Hero;
