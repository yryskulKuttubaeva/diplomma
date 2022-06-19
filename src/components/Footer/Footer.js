import "./Footer.css";
import teleImage from "../../assets/tele-icon.png"
import youImage from "../../assets/youtype-icon.png"
import twitterImage from "../../assets/twitter-icon.png"
import faceImage from "../../assets/facebook-icon.png"
import gitImage from "../../assets/githup-icon.png"
import instaImage from "../../assets/insta-icon.png"


function Footer() {
  return (
    <footer className="Footer">
      <div className="container">

    <h1> NIKE STORE 2022</h1>

    <ul>
      <li><img  className="icon" src={teleImage} alt="tele"/></li>
      <li><img  className="icon" src={youImage} alt="tele"/></li>
      <li><img  className="icon" src={twitterImage} alt="tele"/></li>
      <li><img  className="icon" src={faceImage} alt="tele"/></li>
      <li><img  className="icon" src={gitImage} alt="tele"/></li>
      <li><img  className="icon" src={instaImage} alt="tele"/></li>

    </ul>

   
      </div> 
    </footer>
  );
}

export default Footer;