// import { useDispatch,useSelector } from "react-redux";
// import {cartActions} from "../../redux/handleCartSlice";

const Quantity=({decNum,incNum,num, handleChange})=>{
    // const count = useSelector((state) => state.handleCart.value);
    // const dispatch = useDispatch();
    // const increseCartQuntity = () => {
    //     dispatch(cartActions.incresQntity());
    //   }
    //   const decreseCartQuntity = () => {
    //     dispatch(cartActions.decrQntity());
    //   }
        return(<>
             <h4 className="filter_head">Quantity</h4>
                <div className="filter_container action">
                <button  
                    aria-label="Decrement value"
                    onClick={decNum}>-</button>
                    <input type="text"  value={num} onChange={handleChange}/>
               <button 
                     aria-label="Increment value"
                     onClick={incNum}>+</button>
                </div>
        </>)
    }
    export default Quantity;