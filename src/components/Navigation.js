import * as React from "react";
import { Link } from "gatsby";
import "src/style/navigation.scss";
import { AiOutlineMenu } from "react-icons/ai";
import MobileMenu from "src/components/MobileMenu.js";

export default function Navigation() {

  const [displayMenu, setDisplayMenu] = React.useState(false);

  const showMenu = () => {displayMenu? setDisplayMenu(false) : setDisplayMenu(true)}
 
  return (
    <main>
      <div className="menu-icon">
        <AiOutlineMenu onClick={showMenu} size="35" />
      </div>
      {displayMenu? <MobileMenu /> : null}
      <nav className="nav-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
