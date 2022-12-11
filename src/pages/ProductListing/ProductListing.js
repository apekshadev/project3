import ProductContainer from "../../Component/ProductContainer/ProductContainer";
import ProductListingBanner from "../../Layout/Banner/ProductListingBanner/ProductListingBanner";
import ProdutListHeader from "../../Component/ProductListHeader/ProductListHeader";
import FilterContainer from "../../Component/FilterContainer/FilterContainer";
// import MobileSideBar from "../Layout/Navigation/MobileFilterSidebar";
import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
const ProductListing=()=>{
//addedpart from productContainer start 
    const [data, setData]= useState([]);
    const [filter, setFilter]= useState(data);
    const [loading, setLoading]= useState(false);
    const [categories, setCategories] = useState(
        {
            electronics: false,
            jewelery: false,
            "men's clothing":false,
            "women's clothing":false,

        }
    )
    let categorys = useParams().category;

    useEffect(()=>{
        const getProducts =async()=>{
            setLoading(true);
            const response= await fetch("https://fakestoreapi.com/products");
                // console.log(response);
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
                // console.log(filter);      
        }
            getProducts();
    },[]);

    const  handleChange = (e) => {
        const { name } = e.target;
        setCategories(()=>{return{...categories,[name]: !categories[name]}}
        )
      };
    // addedpart end from productContainer

    const totalProducts= filter.length;
    const sortProductLTH=()=>{
        let sortedData= data?.sort((a, b) => (a.price > b.price ? 1 : -1));
        setFilter(sortedData);
       }
       const sortProductHTL=()=>{
        let sortedData= data?.slice().sort((a, b) => b.price - a.price);
        setFilter(sortedData);
       }
        // const filterProduct =(item)=>{
        //     const productList = data.filter((val)=>val.category === item);
        //     setFilter(productList);
        // }
        const checkedProducts = Object.entries(categories)
        .filter((category) => category[1])
        .map((category) => category[0]);
      const filteredProducts = data.filter(({ category }) =>
        checkedProducts.includes(category)
      );
        const sortProduct=(event)=>{
        
            if(event.target.value === "lowtohigh"){
                sortProductLTH();
            }else if(event.target.value === "hightolow"){
                sortProductHTL();
            }else{
            setFilter(data);
            }
     
        }

    return(
    <>
    
        <ProductListingBanner text1={`Men's`} text={categorys ? categorys : "All Products"}/>
        <section className="aem-Grid aem-Grid--12 container">
        <ProdutListHeader 
        totalProducts={totalProducts} 
        sortProduct={sortProduct} 
        lowToHigh={sortProductLTH} 
        highToLow={sortProductHTL}
        handleChange={handleChange}    
        />
      
        <aside className="aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--3 aem-GridColumn--phone--hide">
         {/* <FilterContainer filterProduct={filterProduct}/> */}
            <div className="filter_aside">
                    <div className="filter_container">
                        <div className="attribute">  
                        <h5>Filters</h5>
                        </div>
                        <div className="attribute">  
                            <h6>Categories</h6>
                            <div className="checkbox"> 
                                <input type="checkbox" 
                                id="chk2-label"  
                                name="electronics" 
                                onChange={handleChange}
                                checked={categories.electronics}
                                /> 
                                <label htmlFor="chk2-label" className="checkbox">Electronics</label>
                            </div>
                            <div className="checkbox"> 
                                <input type="checkbox"
                                id="chk1-label"
                                name="jewelery"
                                onChange={handleChange}
                                checked={categories.jewelery}
                                /> 
                                <label htmlFor="chk1-label" className="checkbox">Jewelery</label>
                            </div>
                            
                            <div className="checkbox"> 
                                <input type="checkbox" 
                                id="chk3-label"  
                                name="men's clothing" 
                                onChange={handleChange}
                                checked={categories["men's clothing"]}
                                /> 
                                <label htmlFor="chk3-label" className="checkbox">Men's Clothing</label>
                            </div>
                            <div className="checkbox"> 
                                <input type="checkbox" 
                                id="chk4-label"  
                                name="women's clothing"   
                                onChange={handleChange}
                                checked={categories["women's clothing"]}
                              
                                /> 
                                <label htmlFor="chk4-label" className="checkbox">Women's Clothing</label>
                            </div>
                            <div className="checkbox"> 
                                <a href=" ">Show More</a>
                            </div>
                    
                        </div>
            
                    </div>
            </div>
        </aside>
        
        <main className="aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--9 aem-GridColumn--phone--12">
        <ProductContainer filter={filteredProducts.length === 0 ? filter : filteredProducts} loading={loading} />
        </main>
       
       
    </section>
   
    </>)

}
export default ProductListing;