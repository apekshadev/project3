import InputBox from "./InputBox";
const ContactInfo=({formData,inputHandler})=>{
    return(
    <div className="contact_info">
        <h3>Contact information</h3>
        <p>We’ll use these details to keep you informed on your delivery.</p>
        <form className="aem-Grid aem-Grid--12 contact_form">
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 leftInputBox ">
         <InputBox type="email"
             name="email" 
            id="email" 
            value={formData.email}  
            onChange={inputHandler}
            label="Email"/>
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 rightInputBox">
            <InputBox  
            type="number"  
            name="phoneNumber" 
            id="phoneNumber" 
            value={formData.phoneNumber} 
            onChange={inputHandler}
            label="Phone Number"/>
        </div>
        </form>
    </div>);
}

export default ContactInfo;