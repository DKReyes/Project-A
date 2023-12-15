import '../Styles/Navbar.css';
import { Outlet, Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <div class='nav-box'>
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
