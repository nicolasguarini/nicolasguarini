'use client';
import Footer from './footer';
import Navbar from './navbar';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<div className="">
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
};

export default Layout;
