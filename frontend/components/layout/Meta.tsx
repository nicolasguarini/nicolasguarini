import Head from 'next/head';

const Meta = () => {
	return (
		<Head>
			{/* General Meta tags */}
			<meta charSet="utf-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<title>Nicolas Guarini | Portfolio</title>
			<meta
				name="description"
				content="Computer Science student at University of Insubria, private teacher of programming and data analysis for university students, and freelance developer of web solutions for small and medium-sized companies and freelancers. I make webapps, mobile apps, UI/UX design, data analysis and more."
			/>
			<meta name="robots" content="index, follow" />
			<meta
				name="keywords"
				content="nicolas guarini, developer, software engineer, react, next, node, hugo, netlify, computer science, università, insubria, uninsubria, data analysis, web development, mobile development, kotlin, java, python, jupyter, notebook"
			/>

			{/* Open Graph tags */}
			<meta property="og:title" content="Nicolas Guarini | Portfolio" />
			<meta
				property="og:description"
				content="Computer Science student at University of Insubria, private teacher of programming and data analysis for university students, and freelance developer of web solutions for small and medium-sized companies and freelancers. I make webapps, mobile apps, UI/UX design, data analysis and more."
			/>
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content="nicolasguarini.it" />
			<meta property="og:local" content="en" />
		</Head>
	);
};

export default Meta;
