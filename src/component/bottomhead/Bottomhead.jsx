import Link from "next/link"
import HomeIcon from '@mui/icons-material/Home';
export default function Bottomhead() {
    return (
        <div className="bottomhead">
            <ul className="navbot">
                <li><Link href={"/"}><p><HomeIcon className="ghome" /></p></Link></li>
                <li><Link href={"/apply"}><p>APPLY ONLINE</p></Link></li>
                <li ><Link href={"/step"} ><p>5 STEPS TO<br /> e-PASSPORT</p></Link></li>
                <li><Link href={"/urgent"}><p>URGENT<br /> APPLICATION</p></Link></li>
                <li ><Link href={"/instuction"}><p>INSTRUCTIONS</p></Link></li>
                <li><Link href={"/fees"}> <p>PASSPORT FEES</p></Link></li>
                <li><Link href={"/check"}><p>CHECK STATUS</p></Link></li>
                <li><Link href={"/contact"}><p>CONTACT</p></Link></li>
            </ul>
        </div>
    )
}