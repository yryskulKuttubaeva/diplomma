import nikeImage from "../assets/nike.jpeg"
import "./Nike.css"

function Nike() {
    return (
        <div className="b">
        <h1 className="w">NIKE</h1>

        <img className="img1" src={nikeImage} alt="nike"/>
        <div ><h3>Nike delivers innovative products, experiences and services to inspire athletes Nike air. 60% Off On All Products Of Week Special Offer. best product everyday. Nikesdelivers. Payment Options Available. Check Order Status. Find A Store. Nike Inc. is a Russian multinational company specializing in sports activities and footwear. The headquarters is in Beaverton.</h3></div>

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
   <h4>JD Sports is Canada's premiere destination for all things sneakers, streetwear and sports style. Shop the latest men's, women's and kid's gear now.</h4>
         </div>
       
    )
}

export default Nike