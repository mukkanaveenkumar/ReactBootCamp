import React from 'react';
import {restaurantList} from '../constants'
import RestaurantCard from './RestaurantCard';
import {useState, useEffect} from 'react';
import Shimmer from './Shimmer';
import {Link} from 'react-router-dom';

function filterData(searchText, restaurants)
{
    let filteredData = restaurants;
    if(searchText != '')
    {
        filteredData = restaurants.filter((restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    return filteredData;
}

const Body = () => {
    //const searchTxt = "Mehfil";
    //searchText is a local state variable
    //const [searchText] = useState("Mehfil"); //To Create a state variable returns [variablename, function to update the variable]
    //creating React state variable and set the state variable
    const[searchInput, setSearchInput] = useState("Mehfil");
    //create a state variable for restaurant lists
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    //useEffect is the hook allows to specify the callback function.
    // Trigger for the callback function can be specified by us in a dependency array.
        // We can specify the state variable in the dependency array. useEffect is called everytime when state changes.
    // By default after every render useEffect is called.
    //if dependency Array is empty then it is called only once after render.
    //dependency array[searchInput] -> once after initial render + everytime after rerender if searchInput is changes
    useEffect(()=>{
        //console.log("from useEffect");
        //API calls need to be done from here
        getRestaurants();
    },[]);

    async function getRestaurants()
    {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4978716&lng=78.35619439999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    //conditional rendering
    //restaurants is empty then shimmer UI
    //restaurants is present then restaurant cards
    
    //Early Return
    if(!allRestaurants) return null;

    //if(filteredRestaurants?.length == 0)
    //return (<h1>No Restaurant match your filter</h1>)

    return (allRestaurants.length==0)? <Shimmer/> : (
    <React.Fragment>
        <div className="search-container">
            <input type="text" key="search" placeholder="search" 
            value={searchInput}
            onChange = {(e) => {setSearchInput(e.target.value);}}
            />
            <button className="search-btn"
            onClick={()=>{
                //filter Data
                const filteredData = filterData(searchInput,allRestaurants);
                //update restaurants
                setFilteredRestaurants(filteredData);
            }}
            >Search</button>
        
        </div>
       <div className="restaurantList">
        {     
        
        filteredRestaurants.map(function(restaurant,index){
            return (
            <Link to={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
            <RestaurantCard {...restaurant.data} />
            </Link>
            );
        }) 
        }
        </div>
    </React.Fragment>
    );
}

export default Body;