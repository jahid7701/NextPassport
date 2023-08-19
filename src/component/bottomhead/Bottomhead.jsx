import "./bottom.css"
import Link from "next/link"
import HomeIcon from '@mui/icons-material/Home';
export default function Bottomhead() {
    return (
        <div className="bottomhead">
            <ul className="navbot">
                <li><Link href={"/navber/icon"}><HomeIcon className="ghome" /></Link></li>
                <li><p><Link href={"/navber/apply"}>APPLY ONLINE</Link></p></li>
                <li ><Link href={"/navber/step"} ><p>5 STEPS TO<br /> e-PASSPORT</p></Link></li>
                <li><Link href={"/navber/urgent"}><p>URGENT<br /> APPLICATION</p></Link></li>
                <li ><Link href={"/navber/instuction"}><p>INSTRUCTIONS</p></Link></li>
                <li><Link href={"/navber/fees"}> <p>PASSPORT FEES</p></Link></li>
                <li><Link href={"/navber/check"}><p>CHECK STATUS</p></Link></li>
                <li><Link href={"/navber/contact"}><p>CONTACT</p></Link></li>
            </ul>
        </div>
    )
}