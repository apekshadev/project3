import React, {useState} from 'react';
import Button from "../Button/Button";
import ShippingDetails from "./ShippingDetails";
const ShippingMethod=({acctwoHandler,accHandler})=>{
    const [shippingData, setshippingData]=useState("Express Delivery (2-5 business days via USPS) $17.95");
    
    let newObject = window.localStorage.getItem("formData");
    console.log(JSON.parse(newObject));
    const getData = JSON.parse(newObject);

const formHandler=(e)=>{
    e.preventDefault();
    acctwoHandler();
    localStorage.setItem("shippingData",shippingData);
}
    return(
    <div className="shipMethod_info">
       <ShippingDetails
        heading="Shipping Information"
        email={getData.email}
        contactDetails={getData.phoneNumber}
        fullName={getData.firstName +" "+ getData.lastName}
        address= {getData.add1 +" "+ getData.add2 +" "+ getData.city +" "+getData.state+" "+ getData.zip +" "+ getData.country}
        onClick={accHandler}
        />        
        <h3>2. Shipping Method</h3>
       <form>
        <div className="radio_control">
            <input type="radio" 
            name="shipping" 
            id="shipping" 
            value="Standard Shipping (4-8 business days via USPS) FREE"  
            defaultChecked={shippingData === "Standard Shipping (4-8 business days via USPS) FREE"}
            onClick={(e)=>setshippingData(e.target.value)} 
            required
            />

            <label for="shipping">Standard Shipping (4-8 business days via USPS) FREE</label>
        </div>
        <div className="radio_control">
            <input type="radio"
             name="shipping"
            id="delivery"
            value="Express Delivery (2-5 business days via USPS) $17.95"
            defaultChecked={shippingData === "Express Delivery (2-5 business days via USPS) $17.95"}
            onClick={(e)=>setshippingData(e.target.value)}
            required
              />
            <label for="delivery">Express Delivery (2-5 business days via USPS) $17.95</label>
        </div>
        <div className="radio_control">
            <input type="radio" 
            name="shipping" 
            id="nextday"
            value="Next Day Delivery (Next business days via FedEx) $53.61"
            defaultChecked={shippingData === "Next Day Delivery (Next business days via FedEx) $53.61"}
            onClick={(e)=>setshippingData(e.target.value)}
            required
            />
            <label for="nextday">Next Day Delivery (Next business days via FedEx) $53.61</label>
        </div>
            <div className="action">
                <Button arialabel="shipping information" text="CONTINUE TO PAYMENT" text1="CONTINUE" className="btn_lab shipping_button" onClick={formHandler}/>
            </div>
            <div className='aem-Grid aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--12 estimating'>
                <div className="section2">
                    3. Payment Information
                </div>
            </div>
        </form>
      

    </div>);
}

export default ShippingMethod;