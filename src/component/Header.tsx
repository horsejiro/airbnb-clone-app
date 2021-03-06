/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header: FC = () => (
  <div className="header">
    <Link to="/">
      <img
        className="header__icon"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png"
        alt=""
      />
    </Link>

    <div className="header__center">
      <input type="text" />
      <SearchIcon />
    </div>

    <div className="header__right">
      <p>ホストになる</p>
      <LanguageIcon />
      <ExpandMoreIcon />
      <AccountCircleIcon />
    </div>
  </div>
);

export default Header;
