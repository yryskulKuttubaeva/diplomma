import Header from "../components/Header/Header";
import image from "../assets/home.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../data/products";
import { Link } from "react-router-dom";

function Cart() {
  const items = useSelector(store => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter(product => items[product.productId])
    .map(product => {
      total += product.price * items[product.productId];

      return (
        <div >
          <Link to="">{product.title}</Link> <div className="item">{items[product.productId]} {product.price * items[product.productId]} Som</div>
          <hr/>

           <div className="button">
           <button className="btn1" onClick={() => dispatch({ type: "cart/decrement", payload: product.productId })}>-</button>
          <button className="btn2" onClick={() => dispatch({ type: "cart/increment", payload: product.productId })}>+</button>
          <button className="btn3" onClick={() => dispatch({ type: "cart/delete", payload: product.productId })}> Delete</button>
           </div>
        </div>
      );
    });

  if (!output) {
    output = "No items in the cart.";
  }


  return (
    <>
      <Header
        title="Your Shopping Cart"
        image={image}>
        Please review items in your cart.
      </Header>
      <div>
      
        {output}
        <hr />
         <div className="Total"> Total: {total} Som</div>
     
      </div>
    </>
  );
}

export default Cart;