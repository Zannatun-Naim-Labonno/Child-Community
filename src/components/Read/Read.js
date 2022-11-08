import "./Read.css";
import { Link } from "react-router-dom";


export default function Read() {
  

  return (
    <div className="me">
    <div className="lp">Child Communication</div>

    <div className="them">
        <img src="./images/image 1.jpg" alt="" />

    </div>

    <div className="cool">
        <div className="you"><img src="./images/User - Scan.png" alt="" /></div>
        <div className="ren">
        <Link to="/Login">
          <button type="button" className="btn btn2">
          Create Account
          </button>
        </Link>

        </div>
    </div>

    <div className="poor">

        <div className="rich"><img src="./images/User-plus.svg" alt="" /></div>
        <div className="op">

        <Link to="/Home">
          <button type="button" className="btn btn2">
          Already Member
          </button>
        </Link>
        



        </div>
    </div>
</div>
  );
}
