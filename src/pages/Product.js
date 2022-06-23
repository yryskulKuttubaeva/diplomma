import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";
import Header from "../components/Header/Header";
import { getProduct } from "../data/products";
import "./Product.css";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <div className="Product">
    <Header image={product.image} title={product.title}>
      <div className="price">{product.price} Som</div>

      {product.description}
      <div className="cartButton"><CartButton productId={params.productId} />
</div>
    </Header>
  </div>
  );
}

export default Product;