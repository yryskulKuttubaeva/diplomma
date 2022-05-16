import "./Nav.module.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import NavItem from "./NavItem";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <h1 className="nav__left">Technics</h1>

      <div className="Nav__left">
        <ul className="Nav">
          <NavItem url="/">Home</NavItem>
          <NavItem url="/products">Products</NavItem>
          <NavItem url="/contacts">Contacts</NavItem>
        </ul>
      </div>

      <div className="nav__middle">
        <div className="input__wrapper">
          <input type="text" />
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="nav__right">
        <div className="cart__icon">
          <i
            className="fa fa-shopping-cart"
            aria-hidden="true"
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            <div className="item__count">
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
