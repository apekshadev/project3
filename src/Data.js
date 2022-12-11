import signIn from "./Images/user.svg";
import cart from "./Images/shopping-bag.svg";
import search from "./Images/search.svg";
import color1 from "./Images/Swatch 01.png";
import color2 from "./Images/Swatch 02.png";
import color3 from "./Images/Swatch 03.png";
import color4 from "./Images/Swatch 04.png";
import womenImg from "./Images/prod1.PNG";
import menImg from "./Images/prod2.PNG";
import jwelleryImg from "./Images/prod3.PNG";
import electronicsImg from "./Images/prod4.PNG";
export const navMainMenu=[{
    id:"NMM0", list:"Home", link:"/", 
},{
    id:"NMM1", list:"Women", link:"/category/women's%20clothing",
},
{
    id:"NMM2", list:"Men", link:"/category/men's%20clothing",
},
{
    id:"NMM3", list:"Electronic", link:"/category/electronics",
},
{
    id:"NMM4", list:"Jewellery", link:"/category/jewelery",
},
]
export const category=[{
    id:"Women",
    img:womenImg,
    name:"Shop Women",
    description:"Lorem ipsum dolor sit amet",
    link:"/category/women's clothing",
},{
    id:"men",
    img:menImg,
    name:"Shop Men",
    description:"Lorem ipsum dolor sit amet",
    link:"/category/men's clothing",
},{
    id:"jwellery",
    img:jwelleryImg,
    name:"Jwellery",
    description:"Lorem ipsum dolor sit amet",
    link:"/category/jewelery",
},{
    id:"electronics",
    img:electronicsImg,
    name:"Electronics",
    description:"Lorem ipsum dolor sit amet",
    link:"/category/electronics",
}]   
export const filterCategories=[
    {
        id:"chk1-label",
        name:"jewelery",
        label:"Jewelery",
    },
    {
        id:"chk2-label",
        name:"electronics",
        label:"Electronics",
    },
    {
        id:"chk3-label",
        name:"men's clothing",
        label:"Men's Clothing",
    },
    {
        id:"chk4-label",
        name:"women's clothing",
        label:"Women's Clothing",
    },
]
export const leftMenu=[
    {
        id:"Nlm1", icon:search, alt:"search", label:"Search", link:" "
    },
    {
        id:"Nlm2", icon:signIn, alt:"signin", label:"Sign in", link:"/login"
    },
    {
        id:"Nlm3", icon:cart, alt:"cart", label:" ", link:"/cart"
    },
]
export const footerList=[
    {
        id:"SBH1",
        SubmenuHead:"About",
    },
    {
        id:"SBH2",
        SubmenuHead:"About Us",
    },
    {
        id:"SBH3",
        SubmenuHead:"Help",
    },
]
    
export const productColor=[
    {
        id:"color1",
        color:color1,
        bgColor:"#172BC4"
    },
    {
        id:"color2",
        color:color2,
        bgColor:"#EB22FA"
    },
    {
        id:"color3",
        color:color3,
        bgColor:"#172026"
    },
    {
        id:"color4",
        color:color4,
        bgColor:"#767B7F"
    }
    
]
export const productSize=[
    {
        id:"xs",
        size:"XS"
    },
    {
        id:"s",
        size:"S"
    },
    {
        id:"m",
        size:"M"
    },
    {
        id:"l",
        size:"L"
    },
    {
        id:"xl",
        size:"XL"
    }
    
]
export const filterColor=[
    {
        id:"fc1",
        className:"color_box",
        color:"#172026"
    },
    {
        id:"fc2",
        color:"#FFFFFF",
        className:"color_box",
        border: "2px solid #DFE1E2",
    },
    {
        id:"fc3",
        className:"color_box",
        color:"#2D9D78"
    },
    {
        id:"fc4",
        className:"color_box",
        color:"#FDBA5E",
        border: "2px solid #FFFF",
    },    {
        id:"fc5",
        color:"blue",
        className:"color_box",
        border: "2px solid #FFFFF",
    },
    {
        id:"fc6",
        className:"color_box",
        color:"#E34850",
     
    },
    {
        id:"fc7",
        className:"color_box",
        color:"#6408D3"
    },
    {
        id:"fc8",
        className:"color_box",
        color:"#F9009A"
    },{
        id:"fc9",
        className:"color_box",
        color:"#EB7327"
    },
    {
        id:"fc10",
        className:"color_box linear",
        color:"transparent linear-gradient(180deg, #AF52FF 0%, #7950E8 16%, #4F5ADA 29%, #57CB76 43%, #EBC250 56%, #FF8810 69%, #E32F0F 83%, #BF1919 100%) 0% 0% no-repeat padding-box"
    }
    
  
    
] 
export const accordionData=[
    {
        id:"ac1",
        leftHead:"Estimate your Shipping",
        rightHead:"Shipping to 91001"
    },
    {
        id:"ac2",
        leftHead:"Enter a Coupon Code",
        rightHead:"20% discount applied"
    },
    {
        id:"ac3",
        leftHead:"Apply Gift Card",
        rightHead:" "
    },
    
    
]
export const mobileFilterSize=[
        {size:"X-Small"},
        {size:"Small"},
        {size:"Medium"},
        {size:"Large"},
        {size:"X-Large"},
]
export const mobileFilterStyle=[
        {style:"Outdoor"},
        {style:"Casual"},
        {style:"Athleisure"},
        {style:"Running"},
        {style:"Active"},
]
export const mobileFilterBrand=[
        {brand:"Calvin Klein"},
        {brand:"Dolce Gabbana"},
        {brand:"Miu Miu"},
        {brand:"Prada"},
        {brand:"Rag & Bone"},
        {brand:"Gucci"},
        {brand:"Chanel"},
        {brand:"Salvatore Ferragamo"},
        {brand:"Marni"},
        {brand:"Dior"},
]