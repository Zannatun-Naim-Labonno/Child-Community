import "./Movie.css";
import { Link } from "react-router-dom";


export default function Movie() {
  

  return (
    <div className="fk">
       
    <div className=" cards1" >
    
    <h1 className="heading_style1">List of Movies</h1>
    <div className="card1">
        <img
        src="./images/m1.jpg"
        alt="mypic"
        className="card_img1"/>

        <div className="card_info1">
        <span className="card_category1">A Netflix Original Movie</span>
        <h3 className="card_title1">The Goonies</h3>
        <a
        href="https://www.netflix.com/bd/title/60000575?source=35&preventIntent=true"
        target="_blank">
        <button className="mov"> Watch Now</button>
        </a>

    </div>
    </div>






    <div className="card1">
        <img
        src="./images/m2.jpg"
        alt="mypic"
        className="card_img1"/>

        <div className="card_info1">
        <span className="card_category1">Amazon prime Movie</span>
        <h3 className="card_title1">Explorers</h3>
        <a
        href="https://www.amazon.com/Explorers-Ethan-Hawke/dp/B07V9NHGGN"
        target="_blank">
        <button className="mov"> Watch Now</button>
        </a>

    </div>
    </div>




    <div className="card1">
        <img
        src="./images/m3.jpg"
        alt="mypic"
        className="card_img1"/>

        <div className="card_info1">
        <span className="card_category1">A Netflix Original Movie</span>
        <h3 className="card_title1">Stand By mE</h3>
        <a
        href="https://www.netflix.com/title/994992?preventIntent=true"
        target="_blank">
        <button className="mov"> Watch Now</button>
        </a>

    </div>
    </div>




    <div className="card1">
        <img
        src="./images/m4.jpg"
        alt="mypic"
        className="card_img1"/>

        <div className="card_info1">
        <span className="card_category1">A Netflix Original Movie</span>
        <h3 className="card_title1">the green mail</h3>
        <a
        href="https://www.netflix.com/bd/title/60000417?preventIntent=true"
        target="_blank">
        <button className="mov"> Watch Now</button>
        </a>

    </div>
    </div>






    <div className="card1">
        <img
        src="./images/m5.jpg"
        alt="mypic"
        className="card_img1"/>

        <div className="card_info1">
        <span className="card_category1">Amazon prime Movie</span>
        <h3 className="card_title1">The lost boy</h3>
        <a
        href="https://www.amazon.com/Lost-Boys-Jason-Patric/dp/B003F44QRQ"
        target="_blank">
        <button className="mov"> Watch Now</button>
        </a>

    </div>
    </div>


    <div className="card1">
        <img
        src="./images/m6.jpg"
        alt="mypic"
        className="card_img1"/>

        <div className="card_info1">
        <span className="card_category1">Amazon prime Movie</span>
        <h3 className="card_title1">Ready player one</h3>
        <a
        href="https://www.warnerbros.com/movies/ready-player-one"
        target="_blank">
        <button className="mov"> Watch Now</button>
        </a>

    </div>
    </div>


    
</div>
</div>

  );
}
