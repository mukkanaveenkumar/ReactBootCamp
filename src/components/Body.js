import React from 'react';
import {restaurantList} from '../constants'
import RestaurantCard from './RestaurantCard';
import {useState} from 'react';

function filterData(searchText, restaurants)
{
    let filteredData = restaurants;
    if(searchText != '')
    {
        filteredData = restaurants.filter((restaurant) => restaurant.data.name.includes(searchText));
    }
    return filteredData;
}

const Body = () => {
    //const searchTxt = "Mehfil";
    //searchText is a local state variable
    const [searchText] = useState("Mehfil"); //To Create a state variable returns [variablename, function to update the variable]
    //creating React state variable and set the state variable
    const[searchInput, setSearchInput] = useState("Mehfil");
    //create a state variable for restaurant lists
    const [restaurants, setRestaurants] = useState(restaurantList);
    return (
    <React.Fragment>
        <div className="search-container">
            <input type="text" key="search" placeholder="search" 
            value={searchInput}
            onChange = {(e) => {setSearchInput(e.target.value);}}
            />
            <button className="search-btn"
            onClick={()=>{
                //filter Data
                const filteredData = filterData(searchInput,restaurantList);
                //update restaurants
                setRestaurants(filteredData);
            }}
            >Search</button>
        
        </div>
       <div className="restaurantList">
        {
        restaurants.map(function(restaurant,index){
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
        })
        }
        </div>
    </React.Fragment>
    );
}

export default Body;