import React from 'react';
import './banquet.css';
import dinnerBanquet from "../images/dinnerbanquet.pdf";
import lunchBanquet from "../images/lunchbanquet.pdf";
import holidayMenu from "../images/holidaymenu.pdf";

const Banquet = () => {
    return (
        <div className="banquet" id="Banquet & Holiday Menus">
            <h1>Banquet & Holiday Menus</h1>
            <h2 style={{marginTop: '0'}}>Save Yourself Time and Hassle, we will Handle the Catering for You!</h2>
            <h3 style={{marginTop: '0'}}>Banquet / Party room available by reservation, call for info</h3>
            <hr/>
            <h2>Please select from below</h2>
            <div className="flex">
                <span style={{margin: '20px 100px 40px 100px'}}>
                <a target="_blank" rel="noopener noreferrer" href={lunchBanquet}>
                    <p className="buttons">
                            Lunch Banquet
                        </p>
                </a>
                </span>
                <span style={{margin: '20px 100px 40px 100px'}}>
                    <a target="_blank" rel="noopener noreferrer" href={dinnerBanquet}>
                <p className="buttons">
                        Dinner Banquet
                </p>
                        </a>
                </span>
                <span style={{margin: '20px 100px 40px 100px'}}>
                <a target="_blank" rel="noopener noreferrer" href={holidayMenu}>
                <p className="buttons">
                        Holiday Menu
                </p>
                </a>
            </span>
            </div>
        </div>
    )
        ;
};

export default Banquet;