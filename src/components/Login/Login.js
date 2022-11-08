import "./Login.css";
import { Link } from "react-router-dom";

const SignupFrom=()=>{
  const handleFormSubmit=(event)=>{
    event.preventDefault();
  }
}


export default function Login() {
  

  return (
        <div className="cl">
            <div className="app-wrapper">
              <div>
                <h2 className="ti">Create Account</h2>
              </div>
              <form className="form-wrapper">
                <div className="name">
                <label className="label5">Full name</label>
                <input className="input10"type="text" n/>

                </div>

                

                <div className="email">
                <label className="label6">Email</label>
                <input className="input11"type="email" name="email" />


                <div className="password">
                <label className="label7">Password</label>
                <input className="input12"type="password" />

                </div>
                <div>
                  <button className="submit">
                  Sign Up</button>
                </div>

                </div>
              </form>
            </div>

           </div>
           
  );
}