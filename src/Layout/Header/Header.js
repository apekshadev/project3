import logo from "../../Images/logo2.PNG";

import { NavLink, Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { navMainMenu } from "../../Data";
import { useState } from "react";
import MobileSideBar from "../MobileSideBar/MobileSideBar";
const Header=()=>{
  
const [isclicked, setClicked]= useState(false);
const st = useSelector((state) => {
 console.log(state);
  return state.handleCart.items;
}

);
let totalQty = st.length;
return(
        <header className="header">
          <nav className="aem-Grid aem-Grid--12 container" role="navigation">
          {
                isclicked && <MobileSideBar onClose={()=>{
                  setClicked(false);
                }}/> 
          }
        
            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 aem-GridColumn--phone--9 logo">
              <Link to="#" className="mobile_menu" onClick={()=>{setClicked(true)}}>
                <img  src={require('../../Images/align-justify.svg').default} alt='search'/>
              </Link>
             
              <NavLink className="navbar-brand" to="/">
               <img src={logo} alt="logo"/>
              </NavLink>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--8 aem-GridColumn--phone--hide main_menus">
              <ul>
               {navMainMenu.map((val)=>{
                 return(
                <li key={val.id}><NavLink to={val.link}><span className={val.border}>{val.list}</span></NavLink></li>)
                  })}   
              </ul>
            </div>

            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--2 aem-GridColumn--phone--3 right_nav">
              <ul>
                  <li>
                  <NavLink to="/cart">
                  <span className="add-cart">
                  <img src={require('../../Images/shopping-bag.svg').default} alt='cart' />
                  <span className="cart_counter">{totalQty}</span>
                  </span>
                  </NavLink>
                  </li>
              </ul>
            </div>
            
          </nav>
        </header>
);

}
export default Header;