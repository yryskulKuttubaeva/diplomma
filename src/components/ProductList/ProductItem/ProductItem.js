import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <a href={"/products/" + product.productId}><img src={product.image} alt="img" /></a>
      <div className={classes.container}>
        <Link to={"/products/" + product.productId}>{product.title} </Link>
        <div className={classes.price}>{product.price}Som</div>
       

      </div>
    </div>
  );
}

export default ProductItem;