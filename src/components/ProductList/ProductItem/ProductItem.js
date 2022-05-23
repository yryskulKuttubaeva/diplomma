import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <a href={"/products/" + product.productId}><img src={product.image} alt="img" /></a>
      <div className={classes.container}>
        <Link to={"/products/" + product.title}>{product.productId} </Link>
        <div className={classes.price}>{product.price}Com</div>
       

      </div>
    </div>
  );
}

export default ProductItem;