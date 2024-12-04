import { NavLink } from "react-router-dom";
import logo from "../images/logo.jpg"
import cart from "../images/cart.png"


function Header() {
  return (
    <header>
      <div className="nav-cont">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <ul className="nav-center">
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/"
            >
              Main Page
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/categories"
            >
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/products"
            >
              All products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : '')}
              to="/sales"
            >
              All sales
            </NavLink>
          </li>
        </ul>
        <NavLink
          className={({ isActive }) => (isActive ? 'active' : '')}
          to="/cart"
        >
          <div className="cart">
            <img src={cart} alt="Cart Icon" />
          </div>
        </NavLink>
      </div>
    </header>
  );
}

export default Header;