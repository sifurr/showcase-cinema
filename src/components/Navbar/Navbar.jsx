import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import logo from '../../assets/images/showcase-cinema-logo.svg'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
            <img src={logo} height="40" alt="Showcase Cinema Logo" />
            <span>Showcase Cinema</span>
            </div>

        <div className={`menu ${showMenu ? 'show' : ''}`}>
          <Link className='menu__item' to="/">Home</Link>
          <Link className='menu__item' to="/about">About</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`bar ${showMenu ? 'open' : ''}`}></div>
          <div className={`bar ${showMenu ? 'open' : ''}`}></div>
          <div className={`bar ${showMenu ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
