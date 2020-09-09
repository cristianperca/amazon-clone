import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  console.log(basket);

  return (
    <nav className="header">
      {/* logon on the left */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/* Search box */}
      <div className="header__search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links */}
      <div className="header__nav"></div>
      {/* 1rst link */}
      <Link to="/login" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Cristian</span>
          <span className="header__optionLineTwo">SignIn</span>
        </div>
      </Link>

      {/* 2nd link */}
      <Link to="/login" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
      </Link>

      {/* 3rd link */}
      <Link to="/login" className="header__link">
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </Link>

      {/* 4th link */}
      <Link to="/checkout" className="header__link">
        <div className="header__optionBasket">
          {/* Shopping basket icon */}
          <ShoppingBasketIcon />
          <span className="header__optionLineTwo header__basketCount">
            {basket?.length}
          </span>
        </div>
      </Link>

      {/* Basket icon with number */}
    </nav>
  );
}

export default Header;
