import Button from "../Button/Button";

const SignInCheckout=()=>{
return(
<div className="aem-GridColumn aem-GridColumn--default--4  aem-GridColumn--tablet--12 aem-GridColumn--phone--hide signIn_summary">
   
        <div className="signIn_heading">
            <h3>Sign in for Express Checkout</h3>
        </div>
        <div className="signIn_action">
            <Button  text="SIGN IN" className="btn_lab signIn_button" type="button"/> 
        </div>
 
</div>);
}
export default SignInCheckout;