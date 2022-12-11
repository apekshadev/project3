import SortProduct from "../SortProduct/SortProduct";
import slider from "../../Images/sliders.png"
import arrowup  from "../../Images/arrow-up.svg"
import arrowdown from "../../Images/arrow-down.svg"
import MobileFilterBar from "../../Layout/MobileSideBar/MobileFilterBar";
import { useState } from "react";
const ProdutListHeader=({totalProducts,sortProduct, lowToHigh, highToLow,handleChange,categories})=>{
  const [isclicked, setClicked]= useState(false);
return(
  <>
        {
                isclicked && <MobileFilterBar handleChange={handleChange} categories={categories} onClose={()=>{
                  setClicked(false);
                }}/> 
          }
        
    <div className="aem-Grid aem-Grid--12 category_row">

    <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--12 left_category">
      <a href="">Clothing</a> / <a href="">Women's</a> / <a href="">OuterWear</a>
    </div>

    <div className="aem-GridColumn aem-GridColumn--default--7 aem-GridColumn--phone--hide total_result">
      {totalProducts} Results
    </div> 
     <SortProduct sortProduct={sortProduct}/>
</div>


  <div className="mobileview_filterheader">
      <div className="filtergheader_top">
        <ul>
          <li onClick={()=>{setClicked(true)}}><img src={slider} alt="slider"/>Filter Results</li>
          <li onClick={lowToHigh} onDoubleClick={highToLow}>
          <img className="arrow_img" src={arrowup} alt="slider"/>
          <img className="arrow_img" src={arrowdown} alt="slider"/>Sort Products</li>
        </ul>
      </div>
      <div className="total_result">
         {totalProducts} Results
      </div>
    </div>
     </>
);
}
export default ProdutListHeader;