import {useState} from 'react';
import Logo from "../assets/img/Foodvilla.jpg"
import {Link} from "react-router-dom"
import useOnline from '../utils/useOnline';

export const Title = () => (
    <a href="/">
    <img 
     alt="logo"
     className="headerlogo"
     src={Logo}
     />
     </a>
);

const loggedInUser = () => {
    //API call to check authentication
    return false;
}


const Header = () => {
    //let title = "Food Villa";
   // const [title,setTitle] = useState("Food Villa");
   const [isLoggedInUser,setIsLoggedInUser] = useState(false);
   const isOnline = useOnline();
    return (
    <div className="header">
        <Title/>     
        <div className="nav-items">      
            <ul>
                <Link to="/" className="headerLink">
                    <li key="home">
                        Home
                    </li>
                </Link>
                <Link to="/about" className="headerLink">
                    <li key="aboutus">
                        About Us
                    </li>
                </Link>
                <Link to="/contact" className="headerLink">
                    <li key="contactus">
                        Contact Us
                    </li>
                </Link>
                <Link to="/instamart" className="headerLink">
                    <li key="instamart">
                        Instamart
                    </li>
                </Link>
                <li key="cart">
                    Cart
                </li>
            </ul>
        </div>
        <h1> {isOnline?  '📗'  : '🔴' }</h1>
        {
            //JS Expression & Statement
            //only expression are allowed in JSX we can't write statements
            //((a=10),console.log('JS Expression'))
            (isLoggedInUser?<button onClick={() => setIsLoggedInUser(false)}>Logout</button>:<button onClick={() => setIsLoggedInUser(true)}>Login</button>)
        }
        
        
    </div>
    );
}

export default Header;