import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import CartButton from "../components/CartButton/CartButton";
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
        <div className="price">{product.price}</div>

        {product.description}
      </Header>
      <CartButton productId={product.id} />
    </div>
  );
}

export default Product;
