import { createSlice } from '@reduxjs/toolkit'

export const handleCartSlice = createSlice({
  name: 'cart',
  initialState: {
    items:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")):[],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    value:1,
  
  },
  reducers: {

    addProdToCart(state, action){

        const existingIndex = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
  
        if (existingIndex >= 0) {
           // If item already there
          // alert("alredy exist in cart");
          state.cartItems[existingIndex] = {
            ...state.items[existingIndex],
            cartQuantity: state.items[existingIndex].cartQuantity + 1,
          };
        
        } else {
          const product= action.payload;
          let tempProductItem = { ...product, cartQuantity: 1 };
          state.items.push(tempProductItem);
          // const addedItemInCart= tempProductItem.title?.split(' ').slice(0,3).join(' ');
          // alert(`${addedItemInCart} has been successfully added to your cart`);
        
        }
       
      

          localStorage.setItem("cartItems", JSON.stringify(state.items));
          },

    removeItemFromCart(state, action) {
    
          const removeItemId = action.payload;
          state.items = state.items.filter(item => {
                      return item.id !== removeItemId;
                  })   
         state.cartTotalAmount -= state.items.price;
          localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    increaseQuantity(state,action) {
            const itemIndex = state.items.findIndex(
              (item) => item.id === action.payload.id
            );
           state.items[itemIndex].cartQuantity += 1;
           state.cartTotalAmount += state.items[itemIndex].price;

           localStorage.setItem("cartItems", JSON.stringify(state.items));

          },
          
    decreaseQuantity(state,action){
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.items[itemIndex].cartQuantity > 1) {
        state.items[itemIndex].cartQuantity -= 1;
      }
      
      
      state.cartTotalAmount -= state.items[itemIndex].price;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    
      },   

    getTotals(state, action) {
        let { total, quantity } = state.items.reduce(
          (cartTotal, cartItem) => {
            const { price, cartQuantity } = cartItem;
            const itemTotal = price * cartQuantity;
  
            cartTotal.total += itemTotal;
            cartTotal.quantity += cartQuantity;
  
            return cartTotal;
          },
          {
            total: 0,
            quantity: 0,
          }
        );
        total = parseFloat(total.toFixed(2));
        state.cartTotalQuantity = quantity;
        state.cartTotalAmount = total;
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      },
    

  
      },
        
          
})
 



export const cartActions = handleCartSlice.actions;
export default handleCartSlice;