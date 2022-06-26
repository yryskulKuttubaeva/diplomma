import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../../redux/cartSlice";
import classes from "./CartItem.module.css";

export default function CartItem({ product, actions, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className={classes.CartItem}>
      <div className={classes.image}>
        <img  src={product.image} alt={product.title} />
      </div>
      <div className={classes.title}>
        <Link to="">{product.title}</Link>
      </div>
      <div className={classes.quantity}>

     
        {actions ? <button className="btn1" onClick={() => dispatch(decrement(product.productId))}>-</button> : null}
       <br/>
        {quantity}
       <br/>
        {actions ? <button className="btn2" onClick={() => dispatch(increment(product.productId))}>+</button> : null}
        
      </div>
      <div className={classes.subtotal}>
      {product.price * quantity}Som
      <hr/>
        {actions ? <button className="btn3" onClick={() => dispatch(remove(product.productId))}>Delete</button> : null}

      </div>
      
    </div>
    
  )
}