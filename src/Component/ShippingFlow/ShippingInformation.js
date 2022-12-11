import React, {useState} from 'react';
import Button from "../Button/Button";
import InputBox from "../ContactInfo/InputBox";
import ContactInfo from "../ContactInfo/ContactInfo";
const ShippingInformation=({accHandler})=>{

const [formData, setFormData]=useState({
    email:"q_farhan@gmail.com", 
    phoneNumber:"+1 (555) 229-3367",
    country:"United States",
    firstName:"Qadim",
    lastName:"Farhan",
    add1:"1098 Wapello Street",
    add2:"Altadena",
    state :"California",
    city:"Street",
    zip:"91001",
    
});



  
const inputHandler=(e)=>{
    const name= e.target.name;
    const value= e.target.value;
    setFormData({...formData,[name]:value});
}
    const submitHandler=(e)=>{
        e.preventDefault();
      
        console.log(formData);
        window.localStorage.setItem("formData", JSON.stringify(formData)); 
        accHandler();
    
        setFormData({
            email:" ", 
            phoneNumber:" ",
            country:" ",
            firstName:" ",
            lastName:" ",
            add1:" ",
            add2:" ",
            state :" ",
            city:" ",
            zip:" ",

})
    }
  
    return(
        <>   
    <ContactInfo inputHandler={inputHandler} formData={formData}/>
    <div className="shipping_info">
        <h3>1. Shipping Information</h3>
   
        <form className="shipping_information " onSubmit={submitHandler}>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 leftInputBox">
            <label>Country<br />
                <select className="county-select" aria-label="country select" name='country' value={formData.country} onChange={inputHandler}>
                    <option value="United States">United States</option>
                    <option value="India">India</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Japan">Japan</option>
                </select>
                </label>
                <span id="countryHelp"></span>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 leftInputBox">
            <InputBox type="text" 
            label="First Name" 
            name="firstName" 
            id="firstName" 
            value={formData.firstName} 
            onChange={inputHandler}/>
               <span id="firstNameHelp"></span>
           
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 rightInputBox">
                <InputBox  type="text" 
                label="Last Name" 
                name="lastName" 
                id="lastName" 
                value={formData.lastName} 
                onChange={inputHandler}/>
            <span id="lastNameHelp"></span>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 leftInputBox">
            <InputBox 
            type="text"  
            name="add1" 
            id="add1" 
            value={formData.add1} 
              onChange={inputHandler}
            label="Street Address"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 rightInputBox">
                <InputBox  
                type="text" 
                name="add2" id="add2" 
                value={formData.add2} 
                onChange={inputHandler}
                label="Street Address 2"/>
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 leftInputBox">
            <InputBox 
            type="text" 
            name="city" 
            id="city" 
            value={formData.city} 
            onChange={inputHandler}
            label="City"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--12 rightInputBox">
            <label>State<br />
            <select className="state-select " aria-label="state select" name='state' value={formData.state} onChange={inputHandler}>
                    <option value="California">California</option>
                    <option value="Maharastra">Maharastra</option>
                    <option value="Gujrat">Gujrat</option>
                    <option value="Orisa">Orisa</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Delhi">Delhi</option>
                </select>
               </label>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--12 rightInputBox">
                <InputBox  
                type="number" 
                name="zip" 
                id="zip" 
                value={formData.zip} 
                onChange={inputHandler}
                size = "[0-9]{4}"
                label="ZIP"
              
                />
            </div>
        </div>
        <div className="action">
            <Button type="submit" arialabel="shipping information" text1="CONTINUE" text="CONTINUE TO SHIPPING METHOD" className="btn_lab shipping_button"/>
        </div>
        <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 estimating'>
                    <div className="section1">
                        2. Shipping Method
                    </div>
                    <div className="section2">
                        3. Payment Information
                    </div>
        </div>
        </form>
    </div>
    </>);
}

export default ShippingInformation;