import React, { useEffect, useState  } from "react";
import "./navbar.css";
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";
import { ListDataCart } from "../../Redux/selector";


const Navbar = () => {
  const dataList = useSelector(ListDataCart)
  

  return (
    <div className="navbar">
      <div className="namepage"><Link to="/">TungCode</Link></div> 
      <div className="navbar-icon">
      <Link to="/cart">
        <i class="bi bi-basket"></i>
        <span>{dataList.length}</span>
        </Link>
      </div>

    </div>
  );
};

export default Navbar;
