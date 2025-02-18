import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight, BiLinkExternal } from "react-icons/bi"; // Added BiLinkExternal icon
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();

  const handleLoginRedirect = () => {
    window.location.href = "https://online.crechespots.co.za/";
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* Logo */}
        <Link to="/">
          <img src="./brand.png" alt="logo" width={200} />
        </Link>

        {/* Menu */}
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <NavLink to="https://portal.crechespots.co.za/" target="_blank" rel="noopener noreferrer">
              Creche Portal <BiLinkExternal size={16} />
            </NavLink>

            <NavLink to="/price">
              Pricing
            </NavLink>



            {/* Try Demo Button */}
            <a href="https://demo.crechespots.co.za/" target="_blank" rel="noopener noreferrer">
              <button className="button rainbow-button">Try Demo</button>
            </a>
          </div>
        </OutsideClickHandler>

        {/* Mobile Menu Icon */}
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
