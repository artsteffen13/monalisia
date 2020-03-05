import React from 'react';
import './fourCourseDinner.css';

const FourCourseDinner = () => {
    return (
        <div
            id="4 Course Dinner"
            className="four-course"
        >
            <h1>4 Course Dinner</h1>
            <h3 style={{marginTop: '0'}}>Monday-Thursday, $21.95 per person, Tax & gratuity are not included</h3>
            <hr/>
            <div className="flex">
                <div className="courses">
                    <h2>First Course</h2>
                    <hr/>
                    <h4>( Choice of one )</h4>
                    <h3>Bruschetta</h3>
                    <h3>Mussels (White or Red)</h3>
                    <h3>Eggplant Rollantini</h3>
                </div>
                <div className="courses">
                    <h2>Second Course</h2>
                    <hr/>
                    <h3>House Salad</h3>
                </div>
                <div className="courses">
                    <h2>Third Course</h2>
                    <hr/>
                    <h4>( Choice of one )</h4>
                    <h3>Chicken Parmigiana</h3>
                    {/*<h4>Lightly beaded chicken marinara, pecorino, provolone, basil over pasta</h4>*/}
                    <h3>Chicken Francaise</h3>
                    {/*<h4>Egg battered sautéed chicken breast in a white wine sauce over pasta</h4>*/}
                    <h3>Chicken Piccata</h3>
                    {/*<h4>Fresh garlic, capers, lemon, chardonnay, sweet butter over pasta</h4>*/}
                    <h3>Veal Milanese</h3>
                    {/*<h4>Blistering cherry tomato, baby arugula, parmigiano reggianno, citrus virgin olive oil</h4>*/}
                    <h3>Tilapia Livornese</h3>
                    {/*<h4>Plum tomato, Italian olives, onions, capers, vigin olive oil</h4>*/}
                    <h3>Spaghetti Bolognese</h3>
                    {/*<h4>Ground sirloin, fresh herbs and tomato sauce</h4>*/}
                    <h3>Filet Mignon (6 oz)</h3>
                    {/*<h4>Served with mash potato in a demi glaze sauce</h4>*/}
                    <h3>Bacon Wrapped Blackened Shrimp</h3>
                    {/*<h4>Served with sautèed spinach in a sweet chili sauce</h4>*/}
                </div>
                <div className="courses">
                    <h2>Fourth Course</h2>
                    <hr/>
                    <h4>( Choice of one )</h4>
                    <h3>Homemade Cannoli</h3>
                    <h3>Cheese Cake</h3>
                    <h3>Spumoni</h3>

                </div>
            </div>
            <h3 style={{paddingBottom: '40px', textDecoration: 'underline darkred'}}>No substitutions, can not be combined with any other special offers</h3>
        </div>
    );
};

export default FourCourseDinner;