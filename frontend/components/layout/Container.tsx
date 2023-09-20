type Props = {
	children: React.ReactNode;
};

const Container = ({ children }: Props) => {
	return (
		<div className="container xl:max-w-[70%] md:max-w-[80%] pt-32 m-auto p-10">
			{children}
		</div>
	);
};

export default Container;
