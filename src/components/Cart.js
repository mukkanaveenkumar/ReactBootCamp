import { useDispatch, useSelector } from "react-redux";
import { clearItems } from "../utils/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {

const cartItems = useSelector(store => store.cart.items);
//console.log(cartItems);

const dispatch = useDispatch();

const handleClearCart = () => {
    dispatch(clearItems());
}

return(
    <>
    <h1> Your cart has {cartItems.length} item(s)</h1>
    <button style={{height:"30px",width:"100px",background:"red",color:"white"}}
    onClick={
        () => handleClearCart()
    }    
    >Clear Cart</button>
    <div className="restaurantList">
        
        {
           /* cartItems.map(function(item,index){
                return(
                    <CartItem key={item.id} {...item}/>
                );
            })   */

            cartItems.map((item)=>{ return <CartItem key={item.id} {...item}/>})
        }
     </div>
     </>
);

};

export default Cart;