'use client'
export default function Apply() {

    const positiv = () => {
        const hasan = document.querySelector(".bangladeshi1_p");
        hasan.style.display = "none";
        const hasanin = document.querySelector(".bangladeshi1_o");
        hasanin.style.display = "block";
    }

    return (
        <div className="apply">
            <div className="haji">
                <h1>Step 1: Check availability of e‑Passport in your region</h1>
                <h3 >Are you Bangladeshi?</h3>
            </div>
            <div className= "radiob">
                <div className="radiobt1">
                    <input type="radio"  name="status" id="hadi" />YES
                </div>
                <br />
                <div>
                    <input type="radio" name="status" onClick={positiv} />NO
                </div>
            </div>
            <form className="bangladeshi1_p">
                <div className="native">
                    <p>Select District your present address</p>
                    <input type="text" />
                    <p className="fuji"> Select the police station nearest to your present address</p>
                    <input type="text" />
                </div>
                <button type="submit" className="btn">Continue</button>

            </form>
            <form className="bangladeshi1_o">
                <h2>Select the country of your present address</h2>
                <div className="foreign">
                    <p className="jahil">Select country</p>
                    <select id="selecboxt">
                     
                        <option>Bangladesh</option>
                        <option>Afganisthan</option>
                        <option>Nepal</option>
                        <option>Srilanka</option>
                        <option>South Africa</option>
                        <option>Australia</option>
                        <option>England</option>
                        <option>New Zealand</option>
                    </select>
                    
                    <p className="hnn"> Select a Bangladesh Mission</p>
                    <input type="text" />
                </div>
                <button type="submit" className="btn">Continue</button>
            </form>

        </div>
    )
}