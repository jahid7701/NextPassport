import Link from "next/link";

export default function Headerm(){
    return(
        <div>
            <Link href={"/signin"}>Sign In</Link>
            <div>
                <p>Englosh</p>
                <p>Bangla</p>
            </div>
            <div>
                <p>A+</p>
                <p>A-</p>
            </div>
        </div>
    )
}