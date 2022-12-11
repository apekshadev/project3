import { useSelector } from 'react-redux';
import SingleOrderItem from "./SingleOrderItem";

const OrderItemContainer=()=>{
    const st = useSelector((state) => {
        console.log(state);
         return state.handleCart.items;
       }
       
       );
       let totalQty = st.length;
       
    const cartItems = useSelector((st) => st.handleCart.items);
    
    const orderItem = cartItems.map(item => {
        return (
        <SingleOrderItem key={item.price} item={item} title={item.title} img={item.image}/>)
      }) 
return(
    <div className="aem-Grid aem-Grid--12 order_container">
        <h4>{totalQty} items in your order</h4>
      
            {orderItem}
            
    </div>
);
}
export default OrderItemContainer;