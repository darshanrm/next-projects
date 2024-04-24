import Link from "next/link"

export default function Page() {
    const posts = [
        {
            id: "1",
            name: "Iphone 14",
            price: 500,
            description: "Apple"
        },
        {
            id: "2",
            name: "Nokia",
            price: 100,
            description: "Android"
        },
        {
            id: "3",
            name: "Vivo ",
            price: 400,
            description: "CHina"
        }
    ]

    return (
        <div className="p-24 text-center text-5xl font-bold">
            Product page
            <div className="grid gap-8 mt-8">
                {posts.map((p: any, i: number) => {
                    return (
                        <div key={i} className="">
                            <Link className="text-blue-700" href={`/product/${p.id}`}>{i + 1}. {p.name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}