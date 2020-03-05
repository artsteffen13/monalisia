import React from 'react';
import Home from "./Home/Home";
import Navigation from "./Navigation/Navigation";
import Menus from "./Menus/Menus";
import FourCourseDinner from "./FourCourseDinner/FourCourseDinner";
import Banquet from "./Banquet/Banquet";
import Contact from "./Contact/Contact";

function App() {
    return (
        <div>
            <header>
                <nav style={{position: 'relative'}}>
                    <Navigation/>
                </nav>
            </header>
            <Home/>
            <Menus/>
            <FourCourseDinner/>
            <Banquet/>
            <Contact/>
        </div>
    );
}

export default App;
