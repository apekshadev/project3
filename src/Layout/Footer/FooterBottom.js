import { NavLink } from "react-router-dom";
import logo from "../../Images/logo3.PNG";
const FooterBottom=()=>{
    return(
<>

<div className="aem-Grid aem-Grid--12 footer-bottom">
         <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--12 aem-GridColumn--phone--12">
         <NavLink className="navbar-brand" to="/">
         <figure>
               <img src={logo} alt="logo"/>
        </figure>
              </NavLink>
         </div>
         <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 copyright" >
             <span>© Company Name Address Ave, City Name, State ZIP</span>
         </div>
         <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 left-nav align_center">
            <ul>
                <li>
                <a href=" ">Terms of Use</a>
                </li>
                <li>
                <a href=" ">Privacy Policy</a>
                </li>
            </ul>
         </div>
</div>

  </>

    );
}
export default FooterBottom;