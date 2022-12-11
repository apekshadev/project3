import { useState } from "react";
const ProdDesc=({description})=>{

const [isReadMore,setReadMore]=useState(false);
      
      //seemore and see less
const toggleBtn=()=>{
    setReadMore(preState=>!preState)
}

return(  
<div className="prod_description">
    <p>{isReadMore ? description : description?.substr(0,80)} 
    <button onClick={toggleBtn} className="read_more">{isReadMore ? 'Read Less' :'...Read more'}</button>
    </p>
</div>)
}
export default ProdDesc;