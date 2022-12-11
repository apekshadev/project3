import React, {useState} from "react";
import {filterCategories} from "../../Data";
const FilterContainer=({filterProduct})=>{
    const [isChosen, setIsChosen] = useState(false);

return(
<div className="filter_aside">
<div className="filter_container">
    <div className="attribute">  
    <h5>Filters</h5>
    </div>
    <div className="attribute">  
        <h6>Categories</h6>
        {
            filterCategories.map((val)=>{
              
                return(<div className="checkbox"> 
                            <input type="checkbox"
                            id={val.id}
                            name={val.name}
                            onChange={()=>{ setIsChosen(!isChosen);
                            filterProduct(`${val.name}`);}}
                           
                            /> 
                            <label htmlFor={val.id} className="checkbox">{val.label}</label>
                        </div>);
            })
        }
        {/* <div className="checkbox"> 
            <input type="checkbox"
             id="chk1-label"
             name="jewelery"
             onChange={()=>{ setIsChosen(!isChosen);
            filterProduct("jewelery");}}
            /> 
            <label htmlFor="chk1-label" className="checkbox">Jewellery</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" 
            id="chk2-label"  
            name="electronics"
            onChange={()=>{ setIsChosen(!isChosen);
            filterProduct("electronics");}}

            /> 
            <label htmlFor="chk2-label" className="checkbox">Electronics</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" 
            id="chk3-label"  
            name="men's clothing" 
            onChange={()=>{ setIsChosen(!isChosen);
            filterProduct("men's clothing");}}
            /> 
            <label htmlFor="chk3-label" className="checkbox">Men's Clothing</label>
        </div>
        <div className="checkbox"> 
            <input type="checkbox" 
            id="chk4-label"  
            name="women's clothing" 
            onChange={()=>{ setIsChosen(!isChosen);
            filterProduct("women's clothing");}}

            /> 
            <label htmlFor="chk4-label" className="checkbox">Women's Clothing</label>
        </div>
        <div className="checkbox"> 
            <a href=" ">Show More</a>
        </div> */}
        
        <a href=" ">Show More</a>
    </div>
  
</div>
</div>);
}
export default FilterContainer;