

import "./Photo.css";
import { Link } from "react-router-dom";


export default function Photo() {
  

  return (
    

    <div className="Photo">

  <div className="pg"> Photo Gallery</div>

  <a href="https://en.wikipedia.org/wiki/Uttara_Ganabhaban" target="_blank">
  <div className="pp1"><img src="./images/p0.png" alt="" /></div></a>


  <a href="https://en.wikipedia.org/wiki/Mahasthangarh" target="_blank">
  <div className="pp2"><img src="./images/p01.png" alt="" /></div></a>


  <a href="https://en.wikipedia.org/wiki/Bermuda_Triangle" target="_blank">
  <div className="pp3"><img src="./images/p2.png" alt="" /></div></a>

  <a href="https://en.wikipedia.org/wiki/Niagara_Falls" target="_blank">
  <div className="pp4"><img src="./images/p3.png" alt="" /></div></a>

  <a href="https://en.wikipedia.org/wiki/Dead_Sea" target="_blank">
  <div className="pp5"><img src="./images/p4.png" alt="" /></div></a>

  <a href="https://en.wikipedia.org/wiki/Sahara" target="_blank">
  <div className="pp6"><img src="./images/p5.png" alt="" /></div></a>


  <div className="sw w1">   Uttara Ganabhaban, Place:-Natore</div>

  <div className="sw w2">   Mahasthangarh, Place:-Bogra</div>

  <div className="sw w3">   Bermuda Triangle,(Devil's Triangle), Place:-Atlantic Ocean </div>

  <div className="sw w4">   Niagara Falls, 
Location:-border of New York, United States, and Ontario, Canada </div>

<div className="sw w5">  Dead Sea, Location:-	Western Asia </div>

<div className="sw w6">   Sahara, Location:-African</div>




















    </div>
    

  );
}
