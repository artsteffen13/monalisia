import React from 'react';
import './menus.css';
import food4 from '../images/food4.jpeg';
import food5 from '../images/food5.jpeg';
import food6 from '../images/food6.jpeg';
import food7 from '../images/food7.jpeg';
import food8 from '../images/food8.jpeg';
import lunchMenu from '../images/lunchmenu.pdf';
import dinnerMenu from '../images/dinnermenu.pdf';

const Menus = () => {
    return (
        <div id="Menus" className="menus">
            <h1>Menus</h1>
            <hr/>
            <h2>For weekend dining we recommend a reservation</h2>
            <div className="container">
                <a target="_blank" rel="noopener noreferrer" href={lunchMenu}>
                    <p className="lunch">For our Lunch Menu, click here</p>
                </a>

                <a target="_blank" rel="noopener noreferrer" href={dinnerMenu}>
                    <p className="dinner">For our Dinner Menu, click here</p>
                </a>
            </div>
            <div className="food-images">
                <img alt="food1" src={food4}/>
                <img alt="food2" src={food5}/>
                <img alt="food3" src={food6}/>
                <img alt="food4" src={food7}/>
                <img alt="food5" src={food8}/>
            </div>
        </div>
    );
};

export default Menus;