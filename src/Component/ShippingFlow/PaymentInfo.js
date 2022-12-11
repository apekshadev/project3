import React,{useState} from "react";
import ShippingDetails from "./ShippingDetails";
import Button from "../Button/Button";
import InputBox from "../ContactInfo/InputBox";
import helpCircle from "../../Images/help-circle.svg";
const PaymentInfo=({accPay,acctwoHandler,accHandler})=>{
    const [paymentData, setPaymentData]=useState({
        cardName:" ",
        cardNumber:" ",
        cvv:"4567",
        credit:"Credit Card",
    });
    const inputHandler=(e)=>{
        const name= e.target.name;
        const value= e.target.value;
        setPaymentData({...paymentData,[name]:value});
    }
        const submitHandler=(e)=>{
            e.preventDefault();
            console.log(paymentData);
            window.localStorage.setItem("paymentData", JSON.stringify(paymentData)); 
            accPay();
            setPaymentData({ })
        }
    let newObject = window.localStorage.getItem("formData");
    console.log(JSON.parse(newObject));
    const getData = JSON.parse(newObject);

return(<>
   <ShippingDetails
        heading="Shipping Information"
        email={getData.email}
        contactDetails={getData.phoneNumber}
        fullName={getData.firstName + getData.lastName}
        address= {getData.add1 + getData.add2 + getData.city +" "+getData.state + getData.Zip }
        onClick={accHandler}
        /> 
    <ShippingDetails 
    heading="Shipping Method" 
    shippingData={localStorage.getItem("shippingData")}  
     onClick={acctwoHandler}/>
    <div className="payment_info">
           
        <h3>3. Payment Information</h3>
       <form>
        <div className="radio_control">
            <input type="radio" 
            name="credit" 
            id="credit" 
            value="Credit Card"  
            defaultChecked={paymentData.credit === "Credit Card"}
            onClick={inputHandler} 
            checked />
            <label htmlFor="credit">Credit Card</label>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
            <InputBox type="text"
                label="Name on Card"
                name="cardName" 
                id="cardName" 
                value={paymentData.cardName} 
                onChange={inputHandler}
             />
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12 ">
            <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
            <InputBox type="number" 
                label="Credit Card Number"
                name="cardNumber" 
                id="cardNumber" 
                value={paymentData.cardNumber} 
                onChange={inputHandler}
            />
            </div>
        </div>
        <div className="aem-Grid aem-Grid--12">
            <div className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--7 date_inputBox ">
            <InputBox type="date" label="Expiration Date"/>
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--2 aem-GridColumn--phone--3 cvv_inputBox">
            <InputBox 
                type="text" 
                label="CVV"
                name="cvv" 
                id="cvv" 
                value={paymentData.cvv} 
                onChange={inputHandler}
            />
          
            </div>
            <div className="aem-GridColumn aem-GridColumn--default--1 aem-GridColumn--phone--2 help_circle">
        
                  <figure>
                    <img src={helpCircle} alt="help-circle"/>
                </figure>
         
              
           </div>
            
        </div>
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--6 checkbox_control">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1">Billing address same as shipping address</label>
        </div>
        <div className="radio_control paypal_box">
            <input type="radio" name="paypal" id="default" />
            <label for="paypal">PayPal</label>
        </div>
            <div className="action">
                <Button arialabel="shipping information" text="CONTINUE TO REVIEW ORDER" text1="CONTINUE" className="btn_lab shipping_button" onClick={submitHandler} />
            </div>
        </form>
      

    </div>
</>
    
);
}
export default PaymentInfo;