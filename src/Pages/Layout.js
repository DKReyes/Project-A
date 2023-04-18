import { Outlet, Link } from "react-router-dom";
import '../Styles/Navbar.css';

const Layout = () => {
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

      <Outlet />
    </>
  )
};

export default Layout;
