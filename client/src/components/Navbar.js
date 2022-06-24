import React , { useState }from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import "../navbar.css";
const Navbar = () => {
  
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <>
    <nav className="nav">
      <a href="/" className="nav__brand">
      𝕄𝕒𝕤𝕠𝕠𝕕 𝔾𝕒𝕟𝕒𝕚
      </a>
      <ul className={active}>
        <li className="nav__item">
          <a href="/" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="/About" className="nav__link">
            About
          </a>
        </li>
        <li className="nav__item">
          <a href="/Contact" className="nav__link">
            Contact
          </a>
        </li>
        <li className="nav__item">
          <a href="/Login" className="nav__link">
            Login
          </a>
        </li>
        <li className="nav__item">
          <a href="/Signup" className="nav__link">
            Signup
          </a>
        </li>
        <li className="nav__item">
          <a href="/Logout" className="nav__link">
            Logout
          </a>
        </li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
   {
   
   /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#">
    <img className="logo-masood" src={logo} alt="logo" />
  </NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/">Home <span className="sr-only"></span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/About">About</NavLink>
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link" to="/Contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Login">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Signup">Signup</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/Logout">Logout</NavLink>
      </li>
     
    </ul>
  </div>
</nav> */}
    </>
  )
}

export default Navbar
