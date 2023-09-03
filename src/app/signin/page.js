import Link from "next/link";

export default function SignIn(){
    return(
        <div>
            <h1>Enter Online Registration Portal</h1>
            <div><label for="Email">Email address</label><br/>
            <input type="email"/>
            </div>
            <div><label for="password">Password</label><br/>
            <input type="password"/>
            </div>
            <Link href={"/forgot"}>Forgot Password</Link>
            <div>
                <input type="checkbox"/>
            </div>
            <button>Sign In</button>
        </div>
    )
}