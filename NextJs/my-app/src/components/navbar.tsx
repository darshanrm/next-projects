import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="bg-blue-900 p-4 lg:px-48 ">
            <div className="flex gap-4 text-gray-100 text-lg">
                <Link href="/home">Home</Link>||
                <Link href="/about">About</Link>||
                <Link href="/customer">Customer</Link>||
                {/* <Link href="/product">Product</Link>|| */}
                <Link href="/order">Order</Link>||
                {/* <Link href="/order-one">Order One</Link>|| */}
            </div>
        </nav>
    )
}