type Props = {
	children: React.ReactNode;
};

const Container = ({ children }: Props) => {
	return (
		<div className="container m-auto">
			{children}
		</div>
	);
};

export default Container;
