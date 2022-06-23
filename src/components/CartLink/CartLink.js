import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cartImage from "../../assets/cart-icons.svg";
import "./CartLink.css";

export default function CartLink() {
  const number = useSelector((store) => {
    return Object.values(store.cart.items).reduce(
      (sum, number) => sum + number,
      0
    );
  });

  return (
    <NavLink to="/cart">
      <div className="number">{number}</div>

      <img className="cart-icons" src={cartImage} alt="svg" />
    </NavLink>
  );
}
