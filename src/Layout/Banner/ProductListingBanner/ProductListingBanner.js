import bannerImg from "../../../Images/homebannermain.png"
const ProductListingBanner=({text})=>{

    function capitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
      
    const caps = text.split(' ').map(capitalize).join(' ');
return(
    <div className="aem-Grid aem-Grid--12 main_banner">
        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 leftside_banner">
           <div>
           <h1>{caps}</h1>
           {/* <h1>Outerwear</h1> */}
           </div> 
            <div className="head_border"></div>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 rightside_banner">
            <img src={bannerImg} alt="herobanner"/>
        </div>
    </div>
);
}
export default ProductListingBanner;