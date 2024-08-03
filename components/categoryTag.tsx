export default function CategoryTag({ category }: { category: string }) {
    return (
        <div className="bg-[#EDEDED] text-black py-1 px-3 rounded-lg text-sm">{category}</div>
    )
}