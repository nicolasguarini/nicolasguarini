export default function ProjectCard() {
    return (
        <div className="flex flex-col gap-3 max-w-sm lg:max-w-md">
            <img className="h-full w-full rounded-xl" src="https://picsum.photos/500/500" alt="" />
            <h3 className="font-bold text-xl">Project name here</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className="flex flex-row gap-4">
                <div className="bg-[#EDEDED] text-black py-1 px-3 rounded-lg text-sm">Tag one</div>
                <div className="bg-[#EDEDED] text-black py-1 px-3 rounded-lg text-sm">Tag two</div>
                <div className="bg-[#EDEDED] text-black py-1 px-3 rounded-lg text-sm">Tag three</div>
            </div>
            <a className="font-medium mt-3" href="/">View project {'>'}</a>
        </div>
    )
}