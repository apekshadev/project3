import {filterCategories} from "../../Data";
import Button from "../../Component/Button/Button";
import closeIcon from "../../Images/x.svg"
const MobileSideBar=({onClose})=>{
   const closeSideBar=()=>{
    onClose();
   }
    return(<>
             <aside className="mobileSidebar_menu container">
            <nav>
                <ul>
                    <li>Shop Categories</li>
                    <li onClick={closeSideBar}><img src={closeIcon} alt="close_icon"/></li>
                </ul>
   
               
            </nav>
                <div className="navlink">
                   <span>Women</span>
                </div>
                <div className="navlink">
                   <span>Men</span>
                </div>
                <div className="navlink">
                   <span>SmartGear</span>
                </div>
                <div className="navlink">
                   <span>Accessories</span>
                </div>
         
    <div className="Mobile_contactfooter">
       <ul>
        <li>Account</li>
        <li>Sign In</li>
       </ul>
   
  
    </div>

             
            </aside>
    </>)
}
export default MobileSideBar;

