import './layout.css';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <div className="header">
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/logout" className="link">
          Logout
        </Link>
      </div>
      <div className="body">
        <Outlet />
      </div>

      <div className="footer"></div>
    </>
  );
};

export default Layout;
