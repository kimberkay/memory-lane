import React from "react";
import { Link } from 'react-router-dom';
import leftCat from '../img/caticorn-left.png';
import rightCat from '../img/caticorn-right.png';

function Header(){
  return(
    <React.Fragment>
    <h1><img className="caticorn" src={leftCat} />Memories<img className="caticorn" src={rightCat} /></h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
      </ul>
    </React.Fragment>
  );
}

export default Header;