import '../Styles/Navbar.css';
import { Outlet, Link } from 'react-router-dom';
import {useState,useEffect } from 'react';
import classNames from 'classnames';

function Navbar() {
    // Scroll Prameters
    const [scroll, setScroll] = useState(false);
        useEffect(() => {
            window.addEventListener("scroll", () => {
                setScroll(window.scrollY > 50);
            });
        }, []);

    let onOff = '';
    if(scroll){
        onOff = 'navScrollOn';
    }else {
        onOff = 'navScrollOff';
    }

    let navClass = classNames('nav-box', onOff);

    return (
        <>
            <div class={navClass}>
                <nav class='nav-content'>
                    <div class='nav-container'>
                    <p>Dylan Reyes</p>
                    <ul class='nav-ul'>
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/blogs">About</Link>
                        </li>
                        <li>
                        <Link to="/contact">Projects</Link>
                        </li>
                        <li>
                        <Link to='/'>Contact</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        </>
    )
};

export default Navbar;
