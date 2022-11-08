import "./Home.css";
import { Link } from "react-router-dom";


export default function Home() {
  

  return (  
    <div className="frem">
    
        <div className="cpp">Homepage</div>
        <div className="sip"><img src="./images/image 7.jpg" alt="" /></div>

        <div className="kip"><img src="./images/image 2.png" alt="" /></div>


        <div className="first">
<div className="hem"><img src="./images/image 5.png" alt="" /></div>
        <div className="moral">
        <Link to="/Book">
          <button type="button" className="btno ">
          Book Review
          </button>
        </Link>
        </div>
        </div>


        <div className="first">
<div className="em"><img src="./images/image 9.png" alt="" /></div>
        <div className="moral">
        <Link to="/Photo">
          <button type="button" className="btno2 ">
          Photo
          </button>
        </Link>
        </div>
        </div>


        <div className="first">
<div className="m"><img src="./images/image 30.png" alt="" /></div>
        <div className="moral">
        <Link to="/News">
          <button type="button" className="btno3 ">
          <div className="first">Calculator </div>
          </button>
        </Link>
        </div>
        </div>



  <div className="first">
<div className="im"><img src="./images/image 12.png" alt="" /></div>
        <div className="moral">
        <Link to="/Gk">
          <button type="button" className="btno4 ">
          General Knowledge
          </button>
        </Link>
        </div>
        </div>



        <div className="first">
<div className="ck"><img src="./images/image 29.png" alt="" /></div>
        <div className="moral">
        <Link to="/Tic">
          <button type="button" className="btno5 ">
          Tic Tac Toe
          </button>
        </Link>
        </div>
        </div>


        <div className="first">
<div className="mv"><img src="./images/image 15.png" alt="" /></div>
        <div className="moral">
        <Link to="/Movie">
          <button type="button" className="btno6 ">
          Movie Review
          </button>
        </Link>
        </div>
        </div>


        <div className="first">
<div className="gm"><img src="./images/image 13.png" alt="" /></div>
        <div className="moral">
        <Link to="/Game">
          <button type="button" className="btno7 ">
          Cartoon
          </button>
        </Link>
        </div>
        </div>


        <div className="first">
<div className="wm"><img src="./images/image 31.png" alt="" /></div>
        <div className="moral">
        <Link to="/Quiz">
          <button type="button" className="btno9 ">
          Quiz
          </button>
        </Link>
        </div>
        </div>


        <div className="first">
<div className="lg"><img src="./images/image 17.png" alt="" /></div>
        <div className="moral">
        <Link to="/Logout">
          <button type="button" className="btno8 ">
          Logout
          </button>
        </Link>
        </div>
        </div>


        




</div>

  );
}