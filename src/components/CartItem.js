import { IMG_CDN_URL } from "../constants";

const CartItem = ({name,price,category,cloudinaryImageId,description}) => {
return(
    <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId}/>
        <h2>{name}</h2>
        <h3>Price: {price/100}</h3>
        <h4>Category: {category}</h4>
        <h4>Description:{description}</h4>
    </div>
);
}

export default CartItem;