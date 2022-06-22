import { Link } from "react-router-dom";
import classes from "./ProductItem.module.css";

function ProductItem({ product }) {
  return (
    <div className={classes.ProductItem}>
      <Link to={"/products/" + product.productId}>
        <img src={product.image} alt="img" />
      </Link>
      <div className={classes.container}>
        <Link to={"/products/" + product.productId}>{product.title} </Link>
        <div className={classes.price}>{product.price}</div>
      </div>
    </div>
  );
}

export default ProductItem;
