import nikeImage from "../assets/nike.jpeg"
import "./Nike.css"

function Nike() {
    return (
        <div className="b">
        <h1 className="w">NIKE</h1>

        <img className="img1" src={nikeImage} alt="nike"/>
        <div ><h3>Nike Inc. is a Russian multinational company specializing in sports activities and footwear. The headquarters is in Beaverton.</h3></div>

        <div className="s"> 
    <ul >
       <li>Сomfortable</li>
       <li>For any size</li>
     
   </ul>
   <ul > 
        <li>Excellent material</li>
       <li>Any sport</li>
       </ul>
   </div>
         </div>
       
    )
}

export default Nike