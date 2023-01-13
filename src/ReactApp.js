// import React Libraries

import React from 'react'
import ReactDOM from 'react-dom/client'
//Default import
import Header from './components/Header'
import Body  from './components/Body'
import Footer from  './components/Footer'
import {IMG_CDN_URL} from  './constants'
//Named import
//import {Title,Header} from './components/Header' (Header.js/Header.jsx also works based on the extension of the file)
//Named and Default import
//import Header, {Title} from './components/Header'

// import * as obj from from './components/Header'

/**
 * HeaderComponent
 *  Logo
 *  Nav-Items
 *  Cart
 * BodyComponent
 *  Search Bar
 *  Restaurant List
 *  -Restaurant Card
 *      -Image
 *      -Name
 *      -Rating
 *      -Cusine
 * FooterComponent* 
 */



const buttaBiryani = {
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/5501d88e0f5cd91351531518b3ce0bc6",
    name:"Butta Biryani",
    cusines:["Indian","Biryani"],
    rating:"4.2"
}

//config Driven

const config = [
{
    type:"carousel",
    cards:[
        {
            offerName:"50% off"
        },
        {
            offerName:"No Delivery Charge"
        }
    ]
},
{
    type:"restaurantList",
    cards:[
        {
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/5501d88e0f5cd91351531518b3ce0bc6",
            name:"Butta Biryani",
            cusines:["Indian","Biryani"],
            rating:"4.2"
        },
        {
            image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/5501d88e0f5cd91351531518b3ce0bc6",
            name:"Butta Biryani",
            cusines:["Indian","Biryani"],
            rating:"4.2"
        }
    ]
},
];

/*const RestaurantCard = (props) => {
    console.log(props);
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
            props.restaurant.data.cloudinaryImageId}/>
            <h2>{props.restaurant.data?.name}</h2>
            <h3 style={{width:"100%",overflow:"hidden" }}>{props.restaurant.data.cuisines.join(",")}</h3>
            <h4>{props.restaurant.data.avgRating} stars</h4>
        </div>
    );
}*/

//object Destructuring
/*const RestaurantCard = ({restaurant}) => {   
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
            restaurant.data.cloudinaryImageId}/>
            <h2>{restaurant.data?.name}</h2>
            <h3 style={{width:"100%",overflow:"hidden" }}>{restaurant.data.cuisines.join(",")}</h3>
            <h4>{restaurant.data.avgRating} stars</h4>
        </div>
    );
}*/



//props - Properties
//<RestaurantCard restaurant={restaurantList[0]}/> This is to pass restaurant as props object
//<RestaurantCard name={restaurantList[0].data.name}/> This is to pass name as props object
//<RestaurantCard {...restaurantList[0].data}/> Spread operator this is to pass all properties of the data

//Body
const AppLayout = () => {
    return (
        <React.Fragment>            
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppLayout());