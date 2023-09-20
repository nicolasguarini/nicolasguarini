'use client';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<div className="min-h-screen">
				<Navbar />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
