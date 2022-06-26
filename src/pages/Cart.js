import Header from "../components/Header/Header";
import image from "../assets/home.jpeg";
import CartDisplay from "../components/CartDisplay/CartDisplay";
import { Link } from "react-router-dom";

function Cart() {
  return (
    <>
      <Header
        title="Your Shopping Cart"
        image={image}>
        Please review items in your cart.
      </Header>

      <CartDisplay actions />

      <Link className="Checkout" to="/checkout">Checkout</Link>
    </>
  );
}

export default Cart;


// import Header from "../components/Header/Header";
// import image from "../assets/home.jpeg";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../data/products";
// import { Link } from "react-router-dom";
// import { increment, remove, decrement } from "../redux/cartSlice";

// function Cart() {
//   const items = useSelector((store) => store.cart.items);
//   const dispatch = useDispatch();
//   const products = getProducts();

//   let total = 0;
//   let output = products
//     .filter((product) => items[product.productId])
//     .map((product) => {
//       total += product.price * items[product.productId];

//       return (
//         <div>
//         <Link to="">{product.title}</Link> 
//           <hr/>
//            <div className="items"> {items[product.productId]} doings -
          
         
//          {product.price * items[product.productId]} Som</div>

//         <button className="btn1" onClick={() => dispatch(decrement(product.productId))}>-</button>
//         <button className="btn1" onClick={() => dispatch(increment(product.productId))}>+</button>
//         <button className="btn1" onClick={() => dispatch(remove(product.productId))}>Delete</button>
//       </div>
//       );
//     });

//   if (!output.length) {
//     output = "No items in the cart.";
//   }

//   return (
//     <>
//       <Header title="Your Shopping Cart" image={image}>
//         Please review items in your cart.
//       </Header>
//       <div>
//         {output}
//         <hr />
//         <div className="Total">Total: {total} Som</div>
//         <hr />

//         <div className="Link">
//           <Link to="/checkout">Checkout</Link>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cart;
