import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";
class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let activeClassName = "nav-link active";
        let className = "nav-link";
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-sm">
                    <Link to="/" className='navbar-brand'><img src={require('../assets/img/shared/logo.svg').default} alt="logo" /></Link>
                    <hr />
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <img src={require('../assets/img/shared/icon-hamburger.svg').default} alt="navbar" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close">
                                <img src={require('../assets/img/shared/icon-close.svg').default} alt="close" />
                            </button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) =>
                                            isActive ? `${activeClassName} ms-0` : `${className} ms-0`
                                        }>
                                        <b>00</b>HOME
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/destination"
                                        className={({ isActive }) =>
                                            isActive ? activeClassName : className
                                        }>
                                        <b>01</b>DESTINATION
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/crew"
                                        className={({ isActive }) =>
                                            isActive ? activeClassName : className
                                        }>
                                        <b>02</b>CREW
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        to="/technology"
                                        className={({ isActive }) =>
                                            isActive ? `${activeClassName} me-0` : `${className} me-0`
                                        }>
                                        <b>03</b>TECHNOLOGY
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* <nav className="navbar navbar-expand-sm p-0">
                    <Link to="/" className='navbar-brand'><img src={require('../assets/img/shared/logo.svg').default} alt="logo" /></Link>
                    <hr />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <img src={require('../assets/img/shared/icon-hamburger.svg').default} alt="logo" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        isActive ? `${activeClassName} ms-0` : `${className} ms-0`
                                    }>
                                    <b>00</b>HOME
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/destination"
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : className
                                    }>
                                    <b>01</b>DESTINATION
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/crew"
                                    className={({ isActive }) =>
                                        isActive ? activeClassName : className
                                    }>
                                    <b>02</b>CREW
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/technology"
                                    className={({ isActive }) =>
                                        isActive ? `${activeClassName} me-0` : `${className} me-0`
                                    }>
                                    <b>03</b>TECHNOLOGY
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav> */}
                <Outlet />
            </div>
        );
    }
}

export default Navbar;