import React,{useRef, useEffect} from "react";
import { Container,Row } from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import "./Header.css";

const nav__link =[
  {
    path:'/home',
    display:'Home'
  },

  {
    path:'/about',
    display:'About'
  },

  {
    path:'/tour',
    display:'Tour'
  },
]

const Header = () => {
  const headerRef = useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking on a link
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
  <header className="header" ref={headerRef}>
    <Container>
      <Row>
        <div className="nav__wrapper d-flex align-items-cinter justify-content-between">

          {/* ================logo============== */}
          <div className="logo">
            <img src={logo} alt=""/>
          </div>
          {/* ================logo end============== */}

          {/* ================Menu start============== */}

          <div className="navigation">
            <ul className="menu d-flex align-items-center gap-5">
              {
                nav__link.map((item,index)=>(
                  <li className="nav_item" key={index}>
                    <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active_link': ""}>{item.display}</NavLink>
                  </li>
                ))
              }


            </ul>
          </div>

          {/* ================Menu End================ */}

          <div className="nav_right d-flex align-items-center gap-4 ">
            <div className="nav_btns d-flex align-items-center gap-4">
              <Link to="/login">
                <button className="btn secondary_btn">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="btn primary_btn">
                  Register
                </button>
              </Link>
            </div>

            <span className="mobile_menu" onClick={toggleMenu}>
              <i className={menuOpen ? "ri-close-line" : "ri-menu-line"}></i>
            </span>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile_nav_menu ${menuOpen ? 'active' : ''}`}>
          <ul className="menu d-flex flex-column align-items-center gap-3">
            {nav__link.map((item, index) => (
              <li className="nav_item" key={index}>
                <NavLink 
                  to={item.path} 
                  onClick={closeMenu}
                  className={navClass => navClass.isActive ? 'active_link' : ''}
                >
                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </Row>
    </Container>
  </header>
  );
};

export default Header;
