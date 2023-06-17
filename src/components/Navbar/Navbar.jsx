import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { IoClose } from 'react-icons/io/IoClose';
import { IoClose } from "react-icons/io5"
// import logo from '../../constants/images/logo.png';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar ">
      <div className="app__navbar-logo">
        <Link to={"/"}><img src="/images/logo.png" alt="app__logo" /></Link>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to={"/"}>Home</Link></li>
        <li className="p__opensans"><Link to={"/about"}>About</Link></li>
        <li className="p__opensans"><Link to={"/menu"}>Products</Link></li>
        <li className="p__opensans"><Link to={"/awards"}>Quality</Link></li>
        <li className="p__opensans"><Link to={"/contact"}>Contact</Link></li>
      </ul>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <IoClose fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><Link to="/" onClick={() => setToggleMenu(false)}>Home</Link></li>
              <li><Link to="/about" onClick={() => setToggleMenu(false)}>About</Link></li>
              <li><Link to="/menu" onClick={() => setToggleMenu(false)}>Products</Link></li>
              <li><Link to="/awards" onClick={() => setToggleMenu(false)}>Quality</Link></li>
              <li><Link to="/contact" onClick={() => setToggleMenu(false)}>Contact</Link></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
