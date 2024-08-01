import Link from "next/link";

export default function PostCard() {
	return (
		<div className="flex flex-col gap-3 rounded-lg shadow-md">
            <div className="flex flex-row gap-3">
                <div className="bg-[#EDEDED] text-black py-1 px-3 rounded-lg text-sm">Category</div>
            </div>
			<div className="flex flex-col gap-3">
				<h3 className="font-bold text-2xl">Blog title heading will go here</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim...
                </p>
            </div>

            <Link href="/blog" className="font-medium mt-1">
               Read more ➝
            </Link>
        </div>
	);
}