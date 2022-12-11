
const ProductDescription =({title,description})=>{
    let productTitle= title?.split(' ').slice(0,3).join(' ');
return(<>

    <div className="aem-Grid aem-Grid--12 prod_Description">

        <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--phone--12 mainprod_head">
            <h1>{productTitle}</h1>
        </div>
    
        <div className="aem-GridColumn aem-GridColumn--default--12aem-GridColumn--tablet--12 aem-GridColumn--phone--12 right_details">
            <h5>Description</h5>
            <p>{description}</p>

            <div className='border'>
                <button></button>
            </div>
           
        </div>

   </div>
   
   </>

);
}
export default ProductDescription;