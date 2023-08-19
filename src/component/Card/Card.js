import "./card.css";
import Cardcom from "./Cardcomp";
import UpdateIcon from '@mui/icons-material/Update';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import DescriptionIcon from '@mui/icons-material/Description';
import CurrencyPoundIcon from '@mui/icons-material/CurrencyPound';
import MonitorOutlinedIcon from '@mui/icons-material/MonitorOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
export default function Card(){
    return(
    <div className="card_container">
        <div className="card">          
        <Cardcom name="Apply Online  for e-Passport/Re-Issue"  ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={<MonitorOutlinedIcon className="moni"/>} title="Directly to online application"  liname="/navber/apply"/>
        <Cardcom name="5 steps to e-Passport"  ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={<FormatListNumberedOutlinedIcon className="moni" />}  title="Information about all application steps" liname="/navber/fees"/>
        <Cardcom name="Urgent applications"  ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={< UpdateIcon className="moni" />} title="Need a passport   quickly? " liname="/navber/urgent"/>
        <Cardcom name="Passport fees"  ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={<CurrencyPoundIcon className="moni"/>} title="Payment information and options"liname="/navber/check"/>
        <Cardcom name="Instuctions"   ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={<MenuBookIcon className="moni"/>} title="Have a look before applying" liname="/navber/step"/>
        <Cardcom name="Application at RPO Bangladesh Secretariat"  title="More information" ficon={<ArrowForwardIosIcon className="khoni"/>} hicon={<DescriptionIcon className="moni"/>} liname="/navber/apply"/>
    </div>
    </div>)
}