export default function Page({params}: { params: { slug: string } }) {
    return (
        <div>
            <div>Project page</div>
            <div>{params.slug}</div>
        </div>
    )
}