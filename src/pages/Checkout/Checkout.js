
import React, { useState } from 'react';
import ProductCalculation from "../../Component/ProductCalculation/ProductCalculation";
// import ContactInfo from "../../Component/ContactInfo/ContactInfo"
import ShippingInformation from "../../Component/ShippingFlow/ShippingInformation";
import ShippingMethod from "../../Component/ShippingFlow/ShippingMethod";
import SignInCheckout from "../../Component/SignInCheckout/SignInCheckout";
import PaymentInfo from  "../../Component/ShippingFlow/PaymentInfo";
import ReviewInfo from "../../Component/ShippingFlow/ReviewInfo";
const Checkout=()=> {
    const [isActive, setIsActive]= useState(true);
    const [isShow, setIsShow]= useState(false); 
    const [display, setDisplay]= useState(false); 
    const [orderSummary, setOrderSummary] =useState(false);
    const accHandler=()=>{
        setIsActive(!isActive);
        setIsShow(!isShow);
    }
    const acctwoHandler=()=>{
        setIsShow(!isShow);
        setDisplay(!display);
    }
    const accPay=()=>{
        setDisplay(!display);
        setOrderSummary(!orderSummary)
    }
    return (
        <section className='aem-Grid aem-Grid--12 container checkout'>
            <div className='checkout_heading'>
                <h1>Checkout</h1>
                <button className='border_link'></button>
            </div>
            <div className='aem-Grid aem-Grid--12'>
            <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 checkout_form'>
            <h2>Guest Checkout</h2>
            {/* <ContactInfo /> */}
         
                {isActive &&  <ShippingInformation accHandler={accHandler}/>}
               
                {isShow &&  <ShippingMethod acctwoHandler={acctwoHandler} accHandler={accHandler}/>}
              
                {display &&  <PaymentInfo accPay={accPay} accHandler={accHandler} acctwoHandler={acctwoHandler}/>}
                {orderSummary && <ReviewInfo accPay={accPay} accHandler={accHandler} acctwoHandler={acctwoHandler}/>}
           
            
            </div>
            {isActive && <SignInCheckout />} 
            <ProductCalculation />
   
       
        </div>
        </section>
    );
}

export default Checkout;