import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";
import ProfileMenu from "../ProfileMenu/ProfileMenu";
import AddPropertyModal from "../AddPropertyModal/AddPropertyModal";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const [modalOpened, setModalOpened] = useState(false);

  const handleAddPropertyClick = () => {
    setModalOpened(true);
  };

  // Function to navigate to the Creche Portal
  const handleLoginRedirect = () => {
    window.location.href = "https://online.crechespots.co.za/";
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to="/">
          <img src="./brand.png" alt="logo" width={200} />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="https://portal.crechespots.co.za/" target="_blank">
              Creche Portal
            </NavLink>
            <NavLink to="/price" >
              Pricing
            </NavLink>
            <NavLink to="https://online.crechespots.co.za/" target="_blank">
              Parent App
            </NavLink>
            {/* add property */}
            {/* login / sign up button */}
            
            {/* Try Demo Button */}
            <a href="https://demo.crechespots.co.za/" target="_blank" rel="noopener noreferrer">
              <button className="button rainbow-button">Try Demo</button>
            </a>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
