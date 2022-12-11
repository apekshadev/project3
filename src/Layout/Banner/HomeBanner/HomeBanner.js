import Button from "../../../Component/Button/Button";
import { useNavigate } from "react-router-dom";
import leftarrow from "../../../Images/chevron-left.svg";

const HomeBanner=()=>{
    let navigate = useNavigate(); 
    const routeChange=()=>{
        let path = `/productListing`; 
        navigate(path);
    }
    return(
    <section className="aem-Grid aem-Grid--12 homebanner">
        <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--tablet--hide aem-GridColumn--phone--hide arrow">
                <figure>
                    <img src={leftarrow} alt="leftarrow"/>
                </figure>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--tablet--6 aem-GridColumn aem-GridColumn--phone--12 homebanner_content" >
            <h1>Shop the new Signature Collection</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lobortis mattis aliquam faucibus purus.</p>
            <Button aria-label="shop now" className="shop_now btn_lab" onClick={routeChange} text="Shop Now"/>
            <div className="dots_action">
                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 homebanner_image">
 
        </div>
    </section>);
}
export default HomeBanner;