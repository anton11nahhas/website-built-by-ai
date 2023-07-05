import React, {useContext, useState} from 'react';
import {Link, Outlet} from "react-router-dom";
import {UserContext} from "../App";

/**
 * this is the navigation bar that handles navigation between the register and the summary pages.
 * @returns {JSX.Element} returns the html for the navigation bar
 * @constructor
 */
const NavBar = ()=>{
    return(
        <>
            <nav className="navbar fixed-top navbar-expand-lg bg-secondary">
                <div className="container-fluid">
                    <div className="row w-100">
                        <div className="col text-start border-end">
                            <Link className="nav-link text-center" to="/">REGISTER</Link>
                        </div>
                        <div className="col text-end">
                            <Link className="nav-link text-center" to="/Summary">SUMMARY</Link>
                        </div>
                    </div>
                </div>
            </nav>



        <Outlet />
    </>
    );
}
export default NavBar;

