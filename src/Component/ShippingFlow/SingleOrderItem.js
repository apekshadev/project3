
const SingleOrderItem=({img,title,item})=>{
    const count= item.cartQuantity;
    let productTitle= title?.split(' ').slice(0,3).join(' ');
return(
    <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12 singleorder_Item">
   
            <div className='orderItem_image'>
                    <figure>
                        <img  src={img} alt=''/>
                    </figure>
            </div>
            <div className='orderItem_details'>
                            <strong>{productTitle}</strong>
                            <p>Size : Medium</p>
                            <p>Color : Medium</p>
                            <p>Quantity:{count}</p>
                       
            </div>

    </div>
);
}
export default SingleOrderItem;