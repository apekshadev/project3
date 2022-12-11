const FooterTop=()=>{
    return(  
    <div className="aem-Grid aem-Grid--12 footer-top">
    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
        <h4 className="submenu__heading">Account</h4>
        <ul className="submenu__list">
            <li><a className="submenu_link" href=" ">Sign In</a></li>
            <li><a className="submenu_link" href=" ">Register</a></li>
            <li><a className="submenu_link" href=" ">Order Status</a></li>
        </ul>
    </div>
    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
         <h4 className="submenu__heading">About Us</h4>
         <ul className="submenu__list">
            <li><a className="submenu_link" href=" ">Our Story</a></li>
            <li><a className="submenu_link" href=" ">Careers</a></li>
        </ul>
    </div>
     <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
        <h4 className="submenu__heading">Help</h4>
        <ul className="submenu__list">
            <li><a className="submenu_link" href=" ">Contact Us</a></li>
            <li><a className="submenu_link" href=" ">Order Status</a></li>
            <li><a className="submenu_link" href=" ">Returs</a></li>
        </ul>
    </div>
     {/* {
        footerList.map((val)=>{
            return(<FooterSubMenu SubmenuHead={val.SubmenuHead} SunmenuLink={val.SunmenuLink}/>);
        })
    }  */}
     <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--6 aem-GridColumn--phone--12">
        <h4 className="submenu__heading">Follow Us!</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
        <ul className="submenu__list social_link">
            <li><a className="social_icon" href=" "><img src={require('../../Images/instagram.svg').default} alt='mySvgImage' /></a></li>
            <li><a className="social_icon" href=" "><img src={require('../../Images/twitter.svg').default} alt='mySvgImage' /></a></li>   
            <li><a className="social_icon" href=" "><img src={require('../../Images/facebook.svg').default} alt='mySvgImage' /></a></li>
        </ul>
     </div>
    </div>);
    }
    export default FooterTop;