export default function CategoryTag({ category }: { category: string }) {
    return (
        <div className="bg-ink text-black py-1 px-3 rounded-lg text-sm">{category}</div>
    )
}