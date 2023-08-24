'use client'
export default function Apply(){
   
    const positiv=()=>{
        const hasan=document.querySelector(".bangladeshi1_o");
       
        hasan.style.display="block";
        const hasanin=document.querySelector(".bangladeshi1_p");
        hasanin.style.display="none";

    }
    
    return(
        
        <div className="apply">
            <div className="haji">
        <h1>Step 1: Check availability of e‑Passport in your region</h1>
    <h3 >Are you Bangladeshi?</h3>
    </div>
   {/* radio button */}
    <div className="radiob">
        <div className="radiobt1">
    <input  type="radio" name="status" checked  onClick={positiv} />YES
    </div>
   
    <br/>
    <div>
    <input type="radio" name="status" />NO
    </div>
    </div>
    {/* radiobtn */}
    <form className="bangladeshi1_p">
        <div className="native">
        <p>Select District your present address</p>
        <input type="text" />
        <p className="fuji"> Select the police station nearest to your present address</p>
        <input type="text"  />
        </div>
        <button type="submit" className="btn">Continue</button>

    </form>
    <form className="bangladeshi1_o">
        <h2>Select the country of your present address</h2>
        <div className="foreign">
        <p className="jahil">Select country</p>
        <input type="text" />
        <p className="hnn"> Select a Bangladesh Mission</p>
        <input type="text"  />
        </div>
    <button type="submit" className="btn">Continue</button>

    </form>
    
    </div>
    )
}