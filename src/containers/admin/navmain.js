import React, { useState } from 'react';
// import axios from 'axios';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import animateScrollTo from 'animated-scroll-to';

const EasingFunctions = {
    linear: (t) => { return t },
    easeInQuad: (t) => { return t * t },
    easeOutQuad: (t) => { return t * (2 - t) },
    easeInOutQuad: (t) => { return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t },
    easeInCubic: (t) => { return t * t * t },
    easeOutCubic: (t) => { return (--t) * t * t + 1 },
    easeInOutCubic: (t) => { return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 },
    easeInQuart: (t) => { return t * t * t * t },
    easeOutQuart: (t) => { return 1 - (--t) * t * t * t },
    easeInOutQuart: (t) => { return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t },
    easeInQuint: (t) => { return t * t * t * t * t },
    easeOutQuint: (t) => { return 1 + (--t) * t * t * t * t },
    easeInOutQuint: (t) => { return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t }
}
const options = {
    easing: EasingFunctions.easeInOutCubic,
    speed: 1000,
    cancelOnUserAction: false
}
const NavMain = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    return (
        <React.Fragment>
            <Navbar light expand="md" className="py-1 bs-1 navSticky" id="navMain">
                <NavbarBrand href="/">
                    <img className="d-inline-block" height="30" alt="Logo" src="./logo192.png" />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto align-items-center" navbar>
                        <NavItem>
                            <NavLink href="#" onClick={() => animateScrollTo(document.querySelector(".bg1"), options)}>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => animateScrollTo(document.querySelector(".bg2"), options)}>What we do</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => animateScrollTo(document.querySelector(".bg3"), options)}>Portofolio</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#" onClick={() => animateScrollTo(document.querySelector(".bg4"), options)}>Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                {/* <NavbarToggler /> */}
            </Navbar>
        </React.Fragment>
    );
}

export default NavMain;