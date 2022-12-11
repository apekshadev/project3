import editIcon from "../../Images/edit-2.svg";
import Button from "../Button/Button";
const ShippingDetails=({heading, contactDetails, email,address,fullName ,shippingData,cvvNumber,credit,onClick})=>{
    return(  <div className="aem-Grid aem-Grid--12 shipInfo_details">

    <div className="shipInfo_details_top">
        <h4>{heading}</h4>
        <Button arialabel="edit" text="Edit" img={editIcon} className="edit_button" onClick={onClick}/>

    </div>
   <div className="aem-Grid aem-Grid--12 shipInfo_details_bottom">
        <div className="aem-GridColumn aem-GridColumn--default--5 aem-GridColumn--phone--12">
         {/* <p>q_farhan@gmail.com +1 (555) 229-3367</p> */}
         <p>{email}</p>
         <p>{contactDetails}</p>
         <p>{shippingData}</p>
         <p>{credit}</p>
         {cvvNumber ? <p>Visa ending in {cvvNumber}</p>:null  }
        
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12">
            <p>{fullName}</p>
            <p>{address}</p>
         
        </div>
    </div>
    </div> );
}
export default ShippingDetails;