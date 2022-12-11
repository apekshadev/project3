import Button from "../../Component/Button/Button";
import { useNavigate } from "react-router-dom";

const HomeTeaserOne=()=>{
    let navigate = useNavigate(); 
    const routeChange=()=>{
        let path = `/productListing`; 
        navigate(path);
    }
    return(
    <section className="aem-Grid aem-Grid--12 teaserbanner_one container">

        <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn aem-GridColumn--phone--12 teaserbanner_content" >

            <h1>Take off in the new Signature Legging</h1>
            <strong>Lorem Ipsum Dolor Tempor</strong>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor labore dolore magna lorem ipsum dolor sit dolore magna.</p>
            <div className="action">
                <Button aria-label="shop collection" className="shop_collection btn_lab" onClick={routeChange} text="Shop Collection"/>
                <Button aria-label="shop now" className="shop_now btn_lab" onClick={routeChange} text="Shop Now"/>
            </div>
            <div className="border_box">
            <div className="border"></div>
            </div>
        
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12 teaserbanner_image">
             
        </div>
    </section>);
}
export default HomeTeaserOne;