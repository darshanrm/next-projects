import Image from "next/image";

export default function Home(){
    return(
        <div className="ml-20">
            <Image src="/nextjs.png" alt="nextjs image" width="750" height="500"></Image>
        </div>
    )
}