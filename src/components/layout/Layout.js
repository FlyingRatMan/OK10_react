import {NavLink, Outlet} from "react-router-dom";

import "./layout.css";

const Layout = () => {
    return (
        <div>
            <div className="header">
                <NavLink to="/users">Users</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </div>
            <div className="main-outlet">
                <Outlet/>
            </div>
        </div>
    );
};

export default Layout;