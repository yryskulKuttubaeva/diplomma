import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";
import Button from "../Button/Button";

function Nav() {
  return (
    <ul className={classes.Nav}>
      <NavItem url="/">Home</NavItem>
      <NavItem url="/products">Products</NavItem>
      <NavItem url="/contacts">Contacts</NavItem>
      <Button/>
    </ul>

  
  );
}

export default Nav;
