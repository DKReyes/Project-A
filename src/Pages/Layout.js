import { Outlet, Link } from "react-router-dom";
import '../Styles/Navbar.css';

const Layout = () => {
  return (
    <>
      <nav class='nav'>
        <div class='nav-container'>
          <p>Dylan Reyes</p>
          <ul class='nav-ul'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
