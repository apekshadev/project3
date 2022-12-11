import {filterCategories} from "../../Data";
import Button from "../../Component/Button/Button";
import closeIcon from "../../Images/x.svg"
const MobileFilterBar=({onClose,handleChange,categories})=>{
   const closeSideBar=()=>{
    onClose();
   }
    return(<>
             <aside className="mobilefilter_menu">
            <nav>
                <ul>
                    <li>Filters</li>
                    <li onClick={closeSideBar}><img src={closeIcon} alt="close_icon"/></li>
                </ul>
   
               
            </nav>
                <div className="attribute">
                    <a href=" ">Clear all</a>
                </div>
         
    <div className="filter_container">
   
    <div className="attribute border_none">  
        <h6>Categories</h6>
        {
            filterCategories.map((val)=>{
                let cat= val.name;
                return(<div className="checkbox"> 
                            <input type="checkbox"
                            id={val.id}
                            name={val.name}
                            onChange={handleChange}
                            checked={categories}
                            /> 
                            <label htmlFor={val.id} className="checkbox">{val.label}</label>
                        </div>);
            })
        }
        <div className="checkbox"> 
            <a href=" ">Show More</a>
        </div>
      
    </div>
    <div className="action">
        <Button aria-label="see more results" className="btn_lab" text="SEE 17 RESULTS"/>

        </div>

</div>
             
            </aside>
    </>)
}
export default MobileFilterBar;

