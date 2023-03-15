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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <li>Cart</li>
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
