import React from "react";
import { IoTicket, IoMenu } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import "../Css/navbar.css";

const NavbarPage = () => {
    return (
        <div>
            <header>
                <div className="header-sec">
                    <div className="appLogo">
                        <span>Movie</span>
                        <IoTicket className="tkt-icon" />
                        <span>Booking</span>
                    </div>
                    <div className="nav-left-container">
                        <div className="nav-left">
                            <div className="search-bar">
                                <div className="search-icon-container">
                                    <IoIosSearch className="search-icon" />
                                </div>
                                <div className="input-container">
                                    <input
                                        type="text"
                                        placeholder="Search for movies"
                                        name="search"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="nav-right-container">
                        <div className="nav-right">
                            <div className="location">
                                <select>
                                    <option>Mumbai</option>
                                    <option>Bhopal</option>
                                    <option>Delhi-NCR</option>
                                    <option>Bengaluru</option>
                                    <option>Hyderabad</option>
                                    <option>Ahemdabad</option>
                                    <option>Chandigarh</option>
                                    <option>Pune</option>
                                    <option>Chennai</option>
                                    <option>Kolkata</option>
                                </select>
                            </div>
                            <div className="signin">Sign in</div>
                            <IoMenu className="menu-icon" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default NavbarPage;
