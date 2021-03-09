// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import styles from '../styles/Home.module.css'
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   NavbarText
// } from 'reactstrap';

// const Header = (props) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);

//   return (
//     <div>
//       <Navbar light expand="md" className={styles.navbar}>
//         <div className={styles.allContents}>
//        <div> <NavbarBrand href="#" className={styles.navBarBrand}>Newsbuzz</NavbarBrand></div>

//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="me-auto" navbar>
//             <NavItem>
//             </NavItem>
//             <NavItem>
//             </NavItem>
//           </Nav>
//         </Collapse>
//         </div>
//       </Navbar>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import styles from '../styles/Home.module.css'
const Header = () => {
  const [menu, setMenu] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }

  const show = (menu) ? "show" : "";

  return (

    // <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"#00A47C"}}>
    //   <div><a className={styles.navBarBrand} href="#">Navbar</a></div>
    //        <div className="form-group has-search">
    //              <FontAwesomeIcon icon={faSearch} color="#00A47C" size="lg" className={styles.searchIcon}>
    //              </FontAwesomeIcon>
    //              <input type="text" className={styles.inputSearch} placeholder="Search" />
    //            </div>
    //   <button className="navbar-toggler" type="button" onClick={ this.toggleMenu }>
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div className={"collapse navbar-collapse " + show}>
    //             <ul className="navbar-nav">
    //   <li>
    //   <button className={styles.registerButton}>LOGIN</button>
    //   </li>
    //   <li>
    //   <button className={styles.loginButton}>REGiSTER</button>
    //   </li>
    // </ul>

    //   </div>
    // </nav>

    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#00A47C" }}>
      <div className="d-flex flex-row">
        <a className={styles.navBarBrand} href="#">Newsbuzz</a>
        <div className={styles.ContainerInput}>
          <FontAwesomeIcon icon={faSearch} color="#00A47C" size="lg" className={styles.searchIcon}>
          </FontAwesomeIcon>
          <input className="form-control mr-sm-2" type="search" className={styles.inputSearch} placeholder="Search" />
        </div>
        <button className="navbar-toggler ml-5" type="button" data-toggle="collapse" onClick={toggleMenu} data-target="#navbarTogglerDemo03">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className={"collapse navbar-collapse " + show} id="navbarTogglerDemo03" 
      style={{ justifyContent: "flex-end", marginRight: "50px" }}>
        <form className="form-inline my-2 my-lg-0">
          <button className={styles.loginButton} type="submit"><span className={styles.loginText}>login</span></button>
          <button className={styles.registerButton} type="submit"><span className={styles.registerText}>register</span></button>
        </form>
      </div>
    </nav>
  );
}

export default Header