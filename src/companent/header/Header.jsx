import React, { useState } from "react";
import "./header.css";
import "../../App.css";

const Header = () => {
    // Toggle Menu
    const [Toggle, showMenu] = useState(false);
    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">Jahongir</a>
                <div className={Toggle ? "nav_menu showMenu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link active_link">
                                <img width="20" height="20" className="nav_icon" src="https://img.icons8.com/ios/50/000000/home--v1.png" alt="home--v1" /> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" className="nav_link">
                                <img width="20" height="20" className="nav_icon" src="https://img.icons8.com/pastel-glyph/64/user-male-circle.png" alt="user-male-circle" /> About
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#skills" className="nav_link">
                                <img width="20" height="20" className="nav_icon" src="https://img.icons8.com/ios/50/analyzing-skill.png" alt="analyzing-skill" /> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#qualification" className="nav_link">
                                <img width="20" height="20" className="nav_icon" src="https://img.icons8.com/material-outlined/24/shopping-bag--v1.png" alt="shopping-bag--v1" /> Qualification
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#project" className="nav_link">
                                <img width="20" height="20" className="nav_icon" src="https://img.icons8.com/ios/50/contact-card.png" alt="contact-card" /> Project
                            </a>
                        </li>
                    </ul>
                    <img width="20" height="20" className="nav_icon nav_close" src="https://img.icons8.com/ios/50/delete-sign--v1.png" alt="delete-sign--v1" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav_toggle" onClick={() => showMenu(!Toggle)}>
                    <img width="20" height="20" className="" src="https://img.icons8.com/fluency-systems-regular/48/apps--v1.png" alt="apps--v1" />
                </div>
            </nav>
        </header>
    )
}

export default Header;