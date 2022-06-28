import { useParams } from "react-router-dom";
import CartButton from "../components/CartButton/CartButton";
import { getProduct } from "../data/products";

function Product() {
  const params = useParams();
  const product = getProduct(params.productId);

  if (!product) {
    return null;
  }

  return (
    <>
      <div
        className="product-media" >
        <img className="product-img"  src={product.image}  alt={product.title}/>
        <div className="section">
          <h2 className="title-h2">{product.title}</h2>
          <div className="product-price">{product.price} Som </div>
          <p className="title-p" >
            {product.description}
          </p>
          <CartButton productId={params.productId} />
        </div>
      </div>
    </>
  );
}

export default Product;