import Logo from "../assets/img/images.png";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <a href="/">
      <img alt="logo" className="logo" src={Logo} />
    </a>
  );
};

//this is called function component-
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

//this the way that we can export our component and elements
//why it is default => It is default that means it has another way also for exporting components so that it us deafult.
// you can only one component can be export default in react
//And other for use other ways of exporting ways like exporting by Name
