import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./Header.css";
// import AdliyaLogo from "../../assets/Adliya__logo.png";
// import UzbekistanFlag from "../../assets/uzbekistan.png";
// import RussiaFlag from "../../assets/russia.png";

const Header = () => {
  return (
    <header className="header">
      <div className="skiplinks">
        <button type="button" className="show-on-focus" id="skiplink">
          <IoSearchOutline />
          <span>Belgilangan uchrashuvni topish</span>
        </button>
      </div>

      <div className="header__logo">
        <img
          src="https://entry.davxizmat.uz/qmaticwebbooking/img/company_logo_header.png"
          alt="logo"
          title="logo"
        />
      </div>

      <div className="select__language">
        <select name="language" id="language">
          <option value="">UZ</option>
          <option value="">RU</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
