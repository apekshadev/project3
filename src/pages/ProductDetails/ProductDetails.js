import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetailsTop from "../../Component/ProductDetailTop/ProductDetailTop";
import ProductDescription from "../../Component/ProductDescription/ProductDescription";
const ProductDetails=()=>{

  
    let starsTotal = 5;
    const {id}=useParams();
    const [product , setProduct]= useState([]);
    const [loading , setLoading]= useState(false);
    const [rating, setRating]=useState([]);
   

       const getProducts =async()=>{
            setLoading(true);
            const response= await fetch(`https://fakestoreapi.com/products/${id}`);
            const data=await response.json();
            setProduct(data);
            setLoading(false); 
            let ratingFinal = [];
            const rate = data.rating.rate;
            const brand = data.rating.count.toString();     
               // Get percentage
            const starPercentage = (rate / starsTotal) * 100;
              // Round to nearest 10
            const starPercentageRounded = `${
          Math.round(starPercentage / 10) * 10
        }%`;

        ratingFinal.push({
          brand,
          rate,
          rateInPercentage: starPercentageRounded,
        });
        setRating(() => {
            return ratingFinal;
          });
                 
        }
    useEffect(()=>{ 
        getProducts();
    },[id]);
        
    return(
   
        <div className="aem-Grid aem-Grid--12 procard-container">
      
        {loading? <h1 className="loading_content" style={{padding:"24px", textAlign:"center"}}>Loading...</h1>: <>
        <ProductDetailsTop  
          image={product.image}  
          title={product.title} 
          price={product.price} 
          description={product.description}
          rating={rating}
          product={product}
        />
        <ProductDescription 
           title={product.title} 
           description={product.description}
        />
        </>
        } 
    </div>
    );
}
export default ProductDetails;