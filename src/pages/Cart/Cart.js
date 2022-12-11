import { useSelector } from 'react-redux';  
import Accordion from '../../Component/Accordion/Accordion';
import Button from '../../Component/Button/Button';
import ProductCalculation from '../../Component/ProductCalculation/ProductCalculation';
import SingleCartItem from '../../Component/SingleCartItem/SingleCartItem';
import { Link } from 'react-router-dom';
import { accordionData } from '../../Data';

const Cart=()=>{
 
    const cartItems = useSelector((st) => st.handleCart.items);
    
    const itemsInCart = cartItems.map(item => {
        return (
        <SingleCartItem item={item} key={item.price} id={item.id} title={item.title} price={item.price} img={item.image}/>)
      }) 

    const accordionList = accordionData.map((list)=>{
        return(<Accordion key={list.id} leftHead={list.leftHead} rightHead={list.rightHead}/>)
    })
    return(<>
    <section className='aem-Grid aem-Grid--12 container'>
    <div className='cart'>
      <div className='cart_heading'>
        <h1>Your Shopping Bag</h1>
        <button></button>
      </div>
      {
      cartItems.length === 0 ? (
        <>
        <p className='empty_card'>Your Cart is Empty!</p>
        <p className='emptyCard_message'>Add something to make me happy :)</p>
        <Link to="/">
        <div className='center'>
             <Button  text="Continue Shopping" arialabel="Continue Shopping" className="btn_lab continue_shopping"/>
        </div>
          </Link>
        </>):( 
        <div className='aem-Grid aem-Grid--12'>
          <div className='aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--12 cartLeft'>
            {itemsInCart}
            {accordionList}
          </div>
        <ProductCalculation />
    </div>)
      }
   
      </div>
        </section>
    
      
    </>)
}
export default Cart;