import {IMG_CDN_URL} from  '../constants'

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating}) => {   
    //const {name,cuisines,cloudinaryImageId,avgRating} = restaurant.data;
    return(
        <div className="card">
            <img src={IMG_CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3 style={{width:"100%",overflow:"hidden" }}>{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
}

export default RestaurantCard;