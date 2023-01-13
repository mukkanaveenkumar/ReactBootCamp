// import React Libraries

import React from 'react'
import ReactDOM from 'react-dom/client'

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

const Title = () => (
    <a href="/">
    <img 
     alt="logo"
     className="headerlogo"
     src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
     />
     </a>
);


const HeaderComponent = () => {
    return (
    <div className="header">
        <Title/>
        <div className="nav-items">      
            <ul>
                <li key="aboutus">
                    About Us
                </li>
                <li key="contactus">
                    Contact Us
                </li>
                <li key="cart">
                    Cart
                </li>
            </ul>
        </div>
    </div>
    );
}

const buttaBiryani = {
    image: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/5501d88e0f5cd91351531518b3ce0bc6",
    name:"Butta Biryani",
    cusines:["Indian","Biryani"],
    rating:"4.2"
}

const restaurantList = [
    {
        "type": "restaurant",
"data": {
"type": "F",
"id": "16164",
"name": "Lucky Multicuisine Restaurant",
"uuid": "8aa8fdd1-c537-4f78-991d-f40029aa30d9",
"city": "3",
"area": "Kalapuram Basti",
"totalRatingsString": "5000+ ratings",
"cloudinaryImageId": "bv7eioaorni0demvwih4",
"cuisines": [
"Indian",
"Chinese",
"Tandoor"
],
"tags": [],
"costForTwo": 30000,
"costForTwoString": "₹300 FOR TWO",
"deliveryTime": 28,
"minDeliveryTime": 28,
"maxDeliveryTime": 28,
"slaString": "28 MINS",
"lastMileTravel": 2.0999999046325684,
"slugs": {
"restaurant": "lucky-multicuisine-restaurant-bollaram-road-miyapur",
"city": "hyderabad"
},
"cityState": "3",
"address": "2-69 Bollaram Road , Miyapur , Hyderabad",
"locality": "Bollaram Road",
"parentId": 18963,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"aggregatedDiscountInfo": {
"header": "50% off",
"shortDescriptionList": [
{
"meta": "50% off | Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"aggregatedDiscountInfoV2": {
"header": "50% OFF",
"shortDescriptionList": [
{
"meta": "Use WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"descriptionList": [
{
"meta": "50% off up to ₹100 | Use code WELCOME50",
"discountType": "Percentage",
"operationType": "RESTAURANT"
}
],
"subHeader": "",
"headerType": 0,
"superFreedel": ""
},
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [],
"totalFees": 0,
"message": "",
"title": "",
"amount": "",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=5653541~p=1~eid=00000185-a9af-ad48-2fa3-c27600190158",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "2 kms",
"hasSurge": false,
"sla": {
"restaurantId": "16164",
"deliveryTime": 28,
"minDeliveryTime": 28,
"maxDeliveryTime": 28,
"lastMileTravel": 2.0999999046325684,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "3.5",
"totalRatings": 5000,
"new": false
},
"subtype": "basic"
    },
   
    {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "56096",
        "name": "Mehfil",
        "uuid": "b0d8a5ff-d870-40ce-878d-6cac0a9eee09",
        "city": "3",
        "area": "Kukatpally",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "wfaytngr2fhmdyngai1g",
        "cuisines": [
        "Biryani",
        "Chinese",
        "Indian",
        "Kebabs",
        "Tandoor",
        "Desserts"
        ],
        "tags": [],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 4.400000095367432,
        "slugs": {
        "restaurant": "mehfil-restaurant-kukatpally-kukatpally",
        "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Beside More Mega Store, Nizampet Cross Roads,Kukatpally, Hyderabad",
        "locality": "Nizampet X Road",
        "parentId": 637,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "4.4 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "56096",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 4.400000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 10000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "623059",
        "name": "Varalakshmi Tiffins",
        "uuid": "bf8f3760-640f-48c2-a658-30bd0fc98ab9",
        "city": "3",
        "area": "Nizampet & Pragathi Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "8523266de1213e8ea57e5df4eedf747e",
        "cuisines": [
        "South Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "slaString": "26 MINS",
        "lastMileTravel": 4.800000190734863,
        "slugs": {
        "restaurant": "varalakshmi-tiffins-nizampet-&-pragathi-nagar-nizampet-&-pragathi-nagar",
        "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Aditya Nagar, Kukatpally, Hyderabad, Telangana 500090",
        "locality": "Aditya Nagar",
        "parentId": 6482,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "4.8 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "623059",
        "deliveryTime": 26,
        "minDeliveryTime": 26,
        "maxDeliveryTime": 26,
        "lastMileTravel": 4.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "39782",
        "name": "Idly Dosa for You",
        "uuid": "94bdc8da-7f66-467c-a3cf-2dc3f49959c4",
        "city": "3",
        "area": "Sri Durga Colony",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "erqg3ujdbpd6lr7fjoe9",
        "cuisines": [
        "South Indian"
        ],
        "tags": [],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 2,
        "slugs": {
        "restaurant": "idly-dosa-for-you-miyapur-miyapur",
        "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Shop no-7,AKM dharmarao signatures,Deepthi Sree Nagar Rd, Sri Durga Colony, Miyapur, Hyderabad, Telangana 500050",
        "locality": "Miyapur X roads",
        "parentId": 6458,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5696892~p=4~eid=00000185-a9af-ad48-2fa3-c27700190420",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "39782",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 2,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.8",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "42085",
        "name": "Sri Sai Darshini",
        "uuid": "d31c5b72-655a-4b69-aa9c-b71eb327e509",
        "city": "3",
        "area": "Jeedimetla",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "zxgz1rokxxn85iqdsyj1",
        "cuisines": [
        "South Indian",
        "Chinese"
        ],
        "tags": [],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 45,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 50,
        "slaString": "40-50 MINS",
        "lastMileTravel": 10.800000190734863,
        "slugs": {
        "restaurant": "sri-sai-darshini-tiffins-meals-jeedimetla-jeedimetla-chintal",
        "city": "hyderabad"
        },
        "cityState": "3",
        "address": "YASHODAYA TOWERS, GAJULARAMARAM X ROADS , SHAPUR NAGAR, JEEDIMETLA, HYDERABAD",
        "locality": "Medak - Hyderabd Road",
        "parentId": 19884,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "10.8 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "42085",
        "deliveryTime": 45,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 50,
        "lastMileTravel": 10.800000190734863,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "46881",
        "name": "Pista House Restaurant & Bakery\t",
        "uuid": "83bca723-53b9-4e1a-ad05-b98e626d83a1",
        "city": "3",
        "area": "Kukatpally",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "e3r7hfdwz8cwgqi6jfgc",
        "cuisines": [
        "Biryani",
        "North Indian",
        "Chinese",
        "Kebabs",
        "Mughlai",
        "Tandoor",
        "Desserts"
        ],
        "tags": [],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 3.9000000953674316,
        "slugs": {
        "restaurant": "pista-house-restaurant-nizampeth-nizampet-pragathi-nagar",
        "city": "hyderabad"
        },
        "cityState": "3",
        "address": "G 101, Fortune Signature,Opposite More Mega Store, Beside JNTU Metro Station, Kukatpally",
        "locality": "Opposite More Mega Store",
        "parentId": 319765,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "40% off",
        "shortDescriptionList": [
        {
        "meta": "40% off | Use GUILTFREEJAN",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "40% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use GUILTFREEJAN",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "40% off up to ₹100 | Use code GUILTFREEJAN",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5671039~p=7~eid=00000185-a9af-ad48-2fa3-c2780019073a",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "3.9 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "46881",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "lastMileTravel": 3.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "41001",
        "name": "Sri Raghavendra Pure Veg",
        "uuid": "7392e43a-1e58-463a-8ae2-84a78196f6bd",
        "city": "3",
        "area": "Kukatpally",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "xdmyhxsxt3bpy5g8q3c4",
        "cuisines": [
        "South Indian",
        "Andhra"
        ],
        "tags": [],
        "costForTwo": 15000,
        "costForTwoString": "₹150 FOR TWO",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "slaString": "29 MINS",
        "lastMileTravel": 5.5,
        "slugs": {
        "restaurant": "sri-raghavendra-pure-veg-kukatpally-nizampet-pragathi-nagar",
        "city": "hyderabad"
        },
        "cityState": "3",
        "address": "M.C.K 15-31-111-1-71/324, Ramya Centre, Ramya Ground, K.P.H.B Colony, Kukatpally, Hyderabad - 500072",
        "locality": "K P H B Phase 3",
        "parentId": 194264,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "5.5 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "41001",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 5.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 5000,
        "new": false
        },
        "subtype": "basic"
        },
        
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "557301",
        "name": "Biryani By Kilo",
        "uuid": "e98c8fb1-1fc2-4e53-8909-11295e3950d9",
        "city": "3",
        "area": "Miyapur",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "pj6asnvgkrhwmsvrbf08",
        "cuisines": [
        "Biryani",
        "Hyderabadi",
        "North Indian",
        "Kebabs",
        "Mughlai",
        "Desserts"
        ],
        "tags": [],
        "costForTwo": 70000,
        "costForTwoString": "₹700 FOR TWO",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "slaString": "37 MINS",
        "lastMileTravel": 2.4000000953674316,
        "slugs": {
        "restaurant": "biryani-by-kilo-miyapur-miyapur",
        "city": "hyderabad"
        },
        "cityState": "3",
        "address": "Plot No. 5-6, Deepthi Sreenagar, Miyapur, Hyderabad, Chandanagar circle No 21, Hyderabad, Telangana-500049",
        "locality": "Miyapur",
        "parentId": 130,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code TRYNEW",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "ribbon": [
        {
        "type": "PROMOTED"
        }
        ],
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=5610071~p=10~eid=00000185-a9af-ad48-2fa3-c27900190a0f",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "2.4 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "557301",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 2.4000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "3.7",
        "totalRatings": 500,
        "new": false
        },
        "subtype": "basic"
        },
        {
        "type": "restaurant",
        "data": {
        "type": "F",
        "id": "373558",
        "name": "Chaitanya Food Court - Tiffins",
        "uuid": "fcc5ed83-8bcc-408a-b3af-de529a66a378",
        "city": "3",
        "area": "Kukatpally",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "ms3yshlgd3bmjnioaijf",
        "cuisines": [
        "South Indian"
        ],
        "tags": [],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "slaString": "28 MINS",
        "lastMileTravel": 4.900000095367432,
        "slugs": {
        "restaurant": "chaitanya-tiffins-kukatpally-kukatpally",
        "city": "hyderabad"
        },
        "cityState": "3",
        "address": "MIG-25/1, 25/3, 25/4, 25/5 and 26/3, Phase 3, KPHB Colony, Kukatpally, Hyderabad     500072",
        "locality": "Kphb Colony",
        "parentId": 57320,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "aggregatedDiscountInfo": {
        "header": "50% off",
        "shortDescriptionList": [
        {
        "meta": "50% off | Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
        "header": "50% OFF",
        "shortDescriptionList": [
        {
        "meta": "Use WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "descriptionList": [
        {
        "meta": "50% off up to ₹100 | Use code WELCOME50",
        "discountType": "Percentage",
        "operationType": "RESTAURANT"
        }
        ],
        "subHeader": "",
        "headerType": 0,
        "superFreedel": ""
        },
        "chain": [],
        "feeDetails": {
        "fees": [],
        "totalFees": 0,
        "message": "",
        "title": "",
        "amount": "",
        "icon": ""
        },
        "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
        },
        "lastMileTravelString": "4.9 kms",
        "hasSurge": false,
        "sla": {
        "restaurantId": "373558",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 4.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "IT_IS_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
        },
        "subtype": "basic"
        }
];

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

const RestaurantCard = ({name,cuisines,cloudinaryImageId,avgRating}) => {   
    //const {name,cuisines,cloudinaryImageId,avgRating} = restaurant.data;
    return(
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
            cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3 style={{width:"100%",overflow:"hidden" }}>{cuisines.join(",")}</h3>
            <h4>{avgRating} stars</h4>
        </div>
    );
}

//props - Properties
//<RestaurantCard restaurant={restaurantList[0]}/> This is to pass restaurant as props object
//<RestaurantCard name={restaurantList[0].data.name}/> This is to pass name as props object
//<RestaurantCard {...restaurantList[0].data}/> Spread operator this is to pass all properties of the data
const Body = () => {
    return (
       /*  <div className="restaurantList">
            <RestaurantCard {...restaurantList[0].data}/>
            <RestaurantCard {...restaurantList[1].data}/>
            <RestaurantCard {...restaurantList[2].data}/>
            <RestaurantCard {...restaurantList[3].data}/>
            <RestaurantCard {...restaurantList[4].data}/>
            <RestaurantCard {...restaurantList[5].data}/>
            <RestaurantCard {...restaurantList[6].data}/>
            <RestaurantCard {...restaurantList[7].data}/>
            <RestaurantCard {...restaurantList[8].data}/>         
        </div> */
        <div className="restaurantList">
        {
        restaurantList.map(function(restaurant,index){
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>
        })
        }
        </div>
    );
}

const Footer = () => {
    return <h4>Footer</h4>
}

//Body
const AppLayout = () => {
    return (
        <React.Fragment>            
        <HeaderComponent/>
        <Body/>
        <Footer/>
        </React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(AppLayout());