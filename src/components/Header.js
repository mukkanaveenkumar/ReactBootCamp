export const Title = () => (
    <a href="/">
    <img 
     alt="logo"
     className="headerlogo"
     src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp"
     />
     </a>
);


const Header = () => {
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

export default Header;