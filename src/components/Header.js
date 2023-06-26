import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from '../utils/constants'

const Header = () => {



    //let btnName = "Login";
    const [btnName, setBtnName] = useState("Login");


    //if no dependency array useEffect is call on every component render.
    /*  useEffect(() => {
            console.log(`useEffect called`);
        }); 
    */

    //if empty dependency array useEffect is call only on initially component render and only once.
    /*  useEffect(() => {
         console.log(`useEffect called`);
     }, []); 
    */

    //if there is in dependency array useEffect called every time.

    /*  useEffect(() => {
         console.log(`useEffect called`);
     }, [btnName]); */
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li ><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact"> Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        //btnName = 'Logout'
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                        console.log(`btnName`, btnName);
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;