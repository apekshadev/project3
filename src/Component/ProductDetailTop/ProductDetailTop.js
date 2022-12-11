import Button from "../Button/Button";
import React, {useState } from 'react'
import { useDispatch} from "react-redux";
import {cartActions} from "../../Redux/handleCartSlice";
import Rating from "../Rating/Rating";
import ProdDesc from "./ProdDesc"
import Quantity from "../Quantity/Quantity";
import Carousel from "../Carousel/Carousel";
import SliderImage from "react-zoom-slider";
const ProductDetailsTop=({title,price,rating,description,image, product})=>{
const dispatch = useDispatch();
let [num, setNum] = useState(1);

    const addProduct=(product,num)=>{ 
     
        dispatch(cartActions.addProdToCart(product, num));
    }
    let productTitle= title?.split(' ').slice(0,3).join(' ');
    
    let decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }

    let incNum = () => {
        if (num < 10) {
            setNum(Number(num) + 1);
        }
    };

    let handleChange = (e) => {
        setNum(e.target.value);
    }
    const data = [{image},{image},{image},{image},{image}];
    return(<>
    {/* productdetail page left part */}
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 product_image">
        
            <div className="aem-Grid aem-Grid--12">
                <div className="category_left">
                    <a href=" ">Clothing</a> / <a href=" ">{product.category}</a> / <a href=" ">OuterWear</a>
                </div>
                <div className="aem-GridColumn aem-GridColumn--default--12 aem-GridColumn--tablet--12 aem-GridColumn--phone--hide main_image">
                <SliderImage
                    data={data}
                    width="100%"
                    showDescription={false}
                    direction="right"
		        />
               
                </div>
                <div className="prodGallary_images">
                    <Carousel image={image} title={title}/>
                </div>
            </div>
        </div>

        {/* productdetail page right part */}
        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--tablet--6 aem-GridColumn--phone--12 product_details">
        {/* category */}
        <div className="category">
         <a href=" ">Clothing</a> / <a href=" ">{product.category}</a> / <a href=" ">OuterWear</a>
        </div>
        {/* product title */}
        <h1>{productTitle}</h1>

        {/* product price */}        
        <h4>${price}</h4>

        {/* rating */}  
        <Rating rating={rating}/>

        {/* product description */}
        <ProdDesc description={description}/>

    
        {/* Quantity */}
        <Quantity  decNum={decNum} incNum={incNum} num={num} handleChange={handleChange}/>

        {/* add to cart button */}
        <div className="addtocart">
        <Button text="ADD TO CART" arialabel="add to cart" className="btn_lab" onClick={()=>addProduct(product,num)}/>

        </div>

        {/* product response */}
            <div className="product_response">
                <a href=" "><img src={require('../../Images/heart.svg').default} alt='like' />Save</a>
                <a href=" "><img src={require('../../Images/share-2.svg').default} alt='share' />Share</a>
            </div>

        </div>
    </>)
}
export default ProductDetailsTop;