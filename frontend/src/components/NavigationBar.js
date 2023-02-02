import React from "react";

const NavigationBar = () => {
 
    return (
        // <nav className='navigation-bar'>
        //     <h1>
        //         <a href='/'>My e-shop</a>
        //     </h1>
        // </nav>
       

        // new
        <header className='navigation-bar'>

            <h1>
                <a href='/'>My e-shop</a>
            </h1>
            <div className="cart">
                <i className="fa fa-shopping-cart"></i>
                
            </div>
        </header>


    )
}
export default NavigationBar;