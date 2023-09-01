'use client'
import Cdatas from "@/component/lib/countrydata";
import Pdata from "@/component/lib/Police";
import { useState } from "react";
export default function Apply() {
    const [pold, setpold] = useState("");
    const [pstaes, setpStaes] = useState([]);
    const policehn = (e) => {
        const policest = e.target.value;
        const pla = Pdata.find(poli => poli.district === policest).areas;
        setpStaes(pla);
        setpold(policest);
    }

    const [states, setStates] = useState("");
    const [staes, setStaes] = useState([]);
    const [csta, setCsta] = useState("");
    const countryhn = (e) => {
        const bcountry = e.target.value;
        const sta = Cdatas.find(coun => coun.country === bcountry).cities;
        setStaes(sta)
        setStates(bcountry);
    }
    const stil = (e) => {
        const citd = e.target.value;
        setCsta(citd);
    }
   
    const positiv = () => { 
        const hasan = document.querySelector(".bangladeshi1_p");
    const hasanin = document.querySelector(".bangladeshi1_o");      
        hasan.style.display = "none";
        hasanin.style.display = "block";
    }
    return (
        <div className="apply">
            <div className="haji">
                <h1>Step 1: Check availability of e‑Passport in your region</h1>
                <h3 >Are you Bangladeshi?</h3>
            </div>
            <div className="radiob">
                <div className="radiobt1">
                    <input type="radio" name="status" id="hadi"  onClick={nativ} />YES
                </div>
                <br />
                <div>
                    <input type="radio" name="status" onClick={positiv} />NO
                </div>
            </div>
            <form className="bangladeshi1_p">
                <div className="native">
                    <p>Select District your present address</p>
                    <select onChange={policehn}>
                        {
                            Pdata.map((valu, index) => {
                                return (
                                    <option key={index}>{valu.district}</option>
                                )
                            })
                        }
                    </select>
                    <p className="fuji"> Select the police station nearest to your present address</p>
                    <select>
                        {
                            pstaes.map((sp, index) => {
                                return (
                                    <option value={sp} key={index}>{sp}</option>
                                )
                            })
                        }
                    </select>
                </div>
              
                <button type="submit" className="btn">Continue</button>
                <h1>{pold}</h1>
            </form>
            <form className="bangladeshi1_o">
                <h2>Select the country of your present address</h2>
                <div className="foreign">
                    <p className="jahil">Select country</p>
                    <select onChange={countryhn}>
                        {
                            Cdatas.map((value, index) => {
                                return (
                                    <option value={value.country} key={index}>{value.country}</option>
                                )
                            })
                        }
                    </select>
                    <p className="hnn"> Select a Bangladesh Mission</p>
                    <select onChange={stil}>
                        {
                            staes.map((st, index) => {
                                return (
                                    <option value={st} key={index}>{st}</option>
                                )
                            })
                        }
                    </select>
                </div>
                <button type="submit" className="btn">Continue</button>
            </form>
            <h1>{states}</h1>
            <p>{csta}</p>
        </div>
    )
}