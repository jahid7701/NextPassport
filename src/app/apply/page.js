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
        <h1>Step 1: Check availability of e‑Passport in your region</h1>
    <h1 >Are you Bangladeshi?</h1>
    <div className="radiob">
        <div className="radiobt1">
    <input  type="radio" name="status"  onClick={positiv} />YES
    </div>
    <br/>
    <div>
    <input type="radio" name="status" />NO
    </div>
    </div>
    <form className="bangladeshi1_p">
        <div>
        <p>Select District your present address</p>
        <input type="text" />
        <p> Select the police station nearest to your present address</p>
        <input type="text"  />
        </div>
       

    </form>
    <form className="bangladeshi1_o">
        <div>
        <p>Select District your present addressBangladesho</p>
        <input type="text" />
        <p> Select the police station nearest to your present address</p>
        <input type="text"  />
        </div>
    

    </form>
    
    </div>
    )
}