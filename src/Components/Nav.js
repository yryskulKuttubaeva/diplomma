import "./Nav.css";
import { useContext } from "react";
import CartContext from "../context/cart/CartContext";
import Home from "../pages/Home";

const Nav = () => {
  const { cartItems, showHideCart } = useContext(CartContext);

  return (
    <nav>
      <div className='nav__left'>Technics</div>
      <div className='nav__middle'>
        <div className='input__wrapper'>
          <input type='text' />
          <i className='fas fa-search' />
        </div>
      </div>
      <div className='nav__right'>
        <div className='cart__icon'>
          <i
            className='fa fa-shopping-cart'
            aria-hidden='true'
            onClick={showHideCart}
          />
          {cartItems.length > 0 && (
            
            <div className='item__count'>
              <span>{cartItems.length}</span>
            </div>
          )}
        </div>
      </div>
      <Home/>
    </nav>
  );
};

export default Nav;