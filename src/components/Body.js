import {restaurantList} from '../constants'
import RestaurantCard from './RestaurantCard';

const Body = () => {
    return (
       <div className="restaurantList">
        {
        restaurantList.map(function(restaurant,index){
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
        })
        }
        </div>
    );
}

export default Body;