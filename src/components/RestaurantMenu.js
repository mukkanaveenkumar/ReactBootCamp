import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from '../constants'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params;
    
    const [restaurant, setRestaurant] = useState(null);

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo()
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=17.4978716&lng=78.35619439999999&menuId="+ id);
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data);
    }

    console.log(params);

    return (!restaurant)? <Shimmer/> : (
        <div className="restaurantMenu">
            <div>
            <h1>Restaurant id:{id}</h1>
            <h2>Name : {restaurant.name}</h2>
            <img src={IMG_CDN_URL + restaurant.cloudinaryImageId}/>
            <h2>Area : {restaurant.area}</h2>
            <h2>Average Rating : {restaurant.avgRating}</h2>
            <h2>City : {restaurant.city}</h2>
            <h2>Cost : {restaurant.costForTwoMsg}</h2>
            </div>
            <div>
                {console.log(Object.values(restaurant?.menu?.items))}
                <h1>Menu</h1>
                <ul>
                {Object.values(restaurant?.menu?.items).map((item)=>(
                    <li key={item.id}>{"Name:"+item.name +" Price:"+ item.price}</li>
                ))}
                </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;