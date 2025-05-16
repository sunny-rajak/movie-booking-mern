import React from "react";
import "../Css/footer.css";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaYoutube,
    FaPinterest,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-top">
                <div className="footer-box">
                    <i className="icon">🎧</i>
                    <p>24/7 CUSTOMER CARE</p>
                </div>
                <div className="footer-box">
                    <i className="icon">🎫</i>
                    <p>RESEND BOOKING CONFIRMATION</p>
                </div>
                <div className="footer-box">
                    <i className="icon">📧</i>
                    <p>SUBSCRIBE TO THE NEWSLETTER</p>
                </div>
            </div>

            <div className="footer-main">
                <div className="footer-section">
                    <h4>MOVIES NOW SHOWING IN BHOPAL</h4>
                    <p>
                        Raid 2 | Thunderbolts* | Kesari Chapter 2 | The Bhoothni
                        | Final Destination Bloodlines | HIT: The Third Case |
                        Phule | Shinchan | Sinners
                    </p>
                </div>

                <div className="footer-section">
                    <h4>UPCOMING MOVIES IN BHOPAL</h4>
                    <p>
                        IPL T20 2025 (RCB VS SRH) | GT VS LSG | MI VS DC |
                        Rhythm | Banjara | Pune Highway | Lovely | Jora Kaiya
                        Thattunga
                    </p>
                </div>

                <div className="footer-section">
                    <h4>MOVIES BY GENRE</h4>
                    <p>
                        Thriller | Drama | Horror | Adventure | Comedy | Action
                        | Anime | Classic | Mystery | Political
                    </p>
                </div>

                <div className="footer-section">
                    <h4>MOVIES BY LANGUAGE</h4>
                    <p>
                        Hindi | English | Telugu | Tamil | Malayalam | Sindhi |
                        Konkani | Portuguese | Khasi | Nepali | English 7D
                    </p>
                </div>

                <div className="footer-section">
                    <h4>SPORTS EVENTS IN BHOPAL</h4>
                    <p>
                        Running | Chess | Cycling | Walking | Cricket | MMA |
                        Horse Race | Shooting | Wrestling | Judo
                    </p>
                </div>

                <div className="footer-section">
                    <h4>EVENTS IN TOP CITIES</h4>
                    <p>
                        Mumbai | Delhi-NCR | Chennai | Bengaluru | Hyderabad |
                        Pune | Ahmedabad | Kolkata | Kochi
                    </p>
                </div>

                <div className="footer-section">
                    <h4>ACTIVITIES IN TOP CITIES</h4>
                    <p>
                        Activities in Mumbai | Delhi-NCR | Chennai | Bengaluru |
                        Hyderabad | Pune | Ahmedabad | Kolkata | Kochi
                    </p>
                </div>
                <div className="footer-section">
                    <h4>MOVIES NOW SHOWING</h4>
                    <p>
                        Raid 2 | HIT: The Third Case | Jai Mata Ji | Tourist
                        Family | Thunderbolts | #Single | Kesari Chapter 2 | The
                        Final Reckoning | The Bhootnii
                    </p>
                </div>
                <div className="footer-section">
                    <h4>COUNTRIES</h4>
                    <p>Indonesia | Singapore | UAE | Sri Lanka | West Indies</p>
                </div>
                <div className="footer-section">
                    <h4>HELP</h4>
                    <p>
                        About Us | Contact Us | FAQs | Press | Sitemap | Terms |
                        Privacy Policy
                    </p>
                </div>
                <div className="footer-section">
                    <h4>BOOKMYSHOW EXCLUSIVES</h4>
                    <p>
                        Lollapalooza India | BookAChange | Gift Cards | Offers |
                        Stream | Trailers
                    </p>
                </div>
            </div>

            <div className="footer-logo-social">
                <img
                    src="https://in.bmscdn.com/webin/common/icons/logo.svg"
                    alt="BookMyShow Logo"
                    className="footer-logo"
                />
                <div className="social-icons">
                    <FaFacebook />
                    <FaTwitter />
                    <FaInstagram />
                    <FaYoutube />
                    <FaPinterest />
                </div>
            </div>

            <div className="footer-copy">
                <p>
                    © 2025 Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
                    Usage of the content and images on this website is intended
                    to promote the works and no endorsement of the artist shall
                    be implied. Unauthorized use is prohibited and punishable by
                    law.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
