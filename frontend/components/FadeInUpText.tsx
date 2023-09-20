import { motion } from 'framer-motion';

type Props = {
	delay: number;
	children: React.ReactNode;
};

const FadeInUpText = ({ delay, children }: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: delay }}>
			{children}
		</motion.div>
	);
};

export default FadeInUpText;
