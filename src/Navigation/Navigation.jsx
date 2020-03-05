import React, {useEffect, useState} from 'react';
import NavItem from "./NavItem";
import logo from '../images/logo.png';
import RestaurantMenuIcon from '@material-ui/icons/RestaurantMenu';
import './navigation.css';
import Slider from "./Slider";

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [slider, setSlider] = useState(false);
    let scrollPos = 0;

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        //eslint-disable-next-line
    }, []);

    const handleScroll = () => {
        const currentPos = window.pageYOffset;
        const targetLocation = document.getElementById('Menus').offsetTop;
        if (scrollPos < currentPos && currentPos >= targetLocation) {
            setShowMenu(false);
            scrollPos = currentPos;
        } else {
            setShowMenu(true);
            scrollPos = currentPos;
        }
    };

    const clicked = (e) => {
        const targetLocation = e.target.innerText;
        const scrollTo = document.getElementById(targetLocation);
        scrollTo.scrollIntoView();
    };

    const openSlider = () => {
        if (slider === false) {
            setSlider(true);
        } else {
            setSlider(false);
        }
    };

    return (
        <div className={showMenu ? 'navigation nav-show' : 'navigation nav-hide'}>
            <Slider
                close={openSlider}
                slider={slider}
                clicked={clicked}
            />
            <img alt="logo" className="logo" src={logo}/>
            <h3 className="number">856-629-8000</h3>
            <span
                onClick={openSlider}
                className="icon"
            >
                <RestaurantMenuIcon
                    style={{fontSize: 70, float: 'right'}}
                />
                <p style={{
                    fontSize: '200%',
                    position: 'absolute',
                    top: '20px',
                    right: '10px',
                    textShadow: '-1px 1px 0 white, 1px 1px 0 white, 1px -1px 0 white, -1px -1px 0 white'
                }}>Menu</p>
            </span>
            <ul className="list">

                <NavItem
                    clicked={clicked}
                >Home</NavItem>
                <NavItem
                    clicked={clicked}
                >Menus</NavItem>
                <NavItem
                    clicked={clicked}
                >4 Course Dinner</NavItem>
                <NavItem
                    clicked={clicked}
                >Banquet & Holiday Menus</NavItem>
                <NavItem
                    clicked={clicked}
                >Contact</NavItem>
            </ul>
        </div>
    );
};

export default Navigation;