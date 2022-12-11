import mountain from "../../Images/standingman.png"
import mappin from "../../Images/map-pin.svg";
import Button from "../Button/Button";
const HomeTeaserTwo=()=>{
return(
<section className="teaserbanner_footer aem-Grid aem-Grid--12 container">
                <div className="teaserbanner_secone">
                    <img src={mountain} alt="Mountain" />
                </div>
                <div className="teaserbanner_sectwo">
                    <h2>Conquer your <span className="mobile_hide">next adventure</span></h2>
                    <span>Lorem Ipsum Dolor Tempor</span>
                    <Button aria-label="shop devices" className="shop_devices btn_lab" text="Shop Devices"/>
                    <img src={mappin} alt="map pin"/>
                    <hr/>
                </div>
            </section>
);
}
export default HomeTeaserTwo;