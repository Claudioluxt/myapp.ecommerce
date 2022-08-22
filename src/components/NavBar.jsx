import React from "react";
import styled from "styled-components";
import CartWidget from "./CartWidget";
const NavBarReact = () => {

    return ( 
        <>
        <Navbar>
            <h2>
            Megumi <span> diseño - papeleria- impresión </span> 
            </h2>

            <div>
                <a href="/">Home</a>
                <a href="/">Shop</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Blog</a>
            </div>
            <div>
                <CartWidget/>
            </div>
           
        </Navbar>
        
        </>

     );
}
 
export default NavBarReact;



const Navbar = styled.div`


h2{
    color: white;
    font-size: bold;
    span{
        font-weight:lighter;
    }
}
    padding: .4rem;
    background-color: #160086;
    display:flex;
    align-items: center;
    justify-content: space-between;
a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;  
 }

 
`