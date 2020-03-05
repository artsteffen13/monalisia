import React from 'react';
import NavItem from "./NavItem";
import Modal from "./Modal";

const Slider = (props) => {

    return (
        <>
            <Modal
            modal={props.slider}
            close={props.close}
            />
            <div onClick={props.close} className={props.slider ? 'slider open' : 'slider close'}>
                <ul>

                    <NavItem
                        clicked={props.clicked}
                    >Home</NavItem>
                    <NavItem
                        clicked={props.clicked}
                    >Menus</NavItem>
                    <NavItem
                        clicked={props.clicked}
                    >4 Course Dinner</NavItem>
                    <NavItem
                        clicked={props.clicked}
                    >Banquet & Holiday Menus</NavItem>
                    <NavItem
                        clicked={props.clicked}
                    >Contact</NavItem>
                </ul>
            </div>
        </>
    );
};

export default Slider;