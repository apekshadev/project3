import { configureStore } from '@reduxjs/toolkit'
import handleCartSlice from "./handleCartSlice";

 const store = configureStore({
  reducer: {
    handleCart: handleCartSlice.reducer,
  
  }
 
})

export default store;