import Header from "../components/Header/Header";
import image from "../assets/home.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import CartDisplay from "../components/CartDisplay/CartDisplay";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector(store => store.cart.items);

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const order = { items: items, ...Object.fromEntries(formData.entries()) };
    dispatch(checkout(order));
    navigate('/');
  }

  return (
    <>
      <Header
        title="Checkout"
        image={image}>
        Please enter your information.
      </Header>

      <CartDisplay />

      <form onSubmit={onCheckout}>
        <label className="label">
          First name:
          <input className="label1" type="text" name="firstName" required />
        </label>
        <label>
          Last name:
          <input className="label1"type="text" name="lastName" required />
        </label>
<br/>
        <label>
          Address:
          <input className="label1" type="text" name="address" required />
        </label>
        <label>
          Phone:
          <input className="label1" type="text" name="phone" required />
        </label>
        <hr/>
        <button className="button">Complete the order</button>
      </form>
    </>
  );
}

export default Checkout;





// import Header from "../components/Header/Header";
// import image from "../assets/home.jpeg";
// import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../data/products";
// import { Link, useNavigate } from "react-router-dom";
// import { checkout } from "../redux/cartSlice";

// function Checkout() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const items = useSelector((store) => store.cart.items);
//   const products = getProducts();

//   let total = 0;
//   let output = products
//     .filter((product) => items[product.productId])
//     .map((product) => {
//       total += product.price * items[product.productId];

//       return (
//         <div>
//           <Link to="">{product.title}</Link>
//           <hr />
//           {items[product.productId]} things{" "}
//           {product.price * items[product.productId]} Som
//         </div>
//       );
//     });

//   if (!output) {
//     output = "No items in the cart.";
//   }

//   function onCheckout(event) {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const order = { items: items, ...Object.fromEntries(formData.entries()) };
//     dispatch(checkout(order));
//     navigate("/");
//   }

//   return (
//     <>
//       <Header title="Checkout" image={image}>
//         Please enter your information.
//       </Header>
//       <div>
//         {output} 
//         <hr />
//         <div className="Total">Total: {total} Som</div>

//         <hr />

//         <form onSubmit={onCheckout}>
//           <div className="label">
//             <label>
//               First name:
//               <input className="label1" type="text" name="firstName" required />
//             </label>

//             <label className="label">
//               Last name:
//               <input className="label1" type="text" name="lastName" required />
//             </label>
//             <hr/>
//             <label className="label">
//               Address:
//               <input className="label1" type="text" name="address" required />
//             </label>

//             <label className="label">
//               Phone:
//               <input className="label1" type="text" name="phone" required />
//             </label>
//           </div>
//           <hr />
//           <div className="btn-order"><button className="button">Complete the order</button></div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Checkout;
