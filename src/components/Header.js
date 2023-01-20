import {useState} from 'react';

export const Title = () => (
    <a href="/">
    <img 
     alt="logo"
     className="headerlogo"
     src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
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
    console.log('render()');
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