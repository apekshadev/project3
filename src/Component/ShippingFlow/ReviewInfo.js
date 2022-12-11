import ShippingDetails from "./ShippingDetails";
import OrderItemContainer from "./OrderItemContainer";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const ReviewInfo=({acctwoHandler,accHandler,accPay})=>{

      let navigate = useNavigate();
        //Change page
        const pageHandler=()=>{
            let path=`/order_confirmation`;
            navigate(path);
        }
        let newObject = window.localStorage.getItem("formData");
        console.log(JSON.parse(newObject));
        const getData = JSON.parse(newObject);

        let paymentDetails= window.localStorage.getItem("paymentData");
        const getpaymentData= JSON.parse(paymentDetails);
        return(
                <section className="review_order">
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
                        <ShippingDetails 
                        heading="Payment Information" 
                        cvvNumber={getpaymentData.cvv} 
                        credit={getpaymentData.credit}  
                        onClick={accPay}      
                        />
                        <OrderItemContainer />
                        <div className="action">
                        <Button arialabel="place order" text="Place Order" className="btn_lab placeorder_button" onClick={pageHandler}/>
                        </div>
                        <div className="action">
                                <p>By clicking confirm order you agree to our <a href=" ">Terms and Conditions</a> </p>
                        </div>
                </section>
                );
}
export default ReviewInfo;