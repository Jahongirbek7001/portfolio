import React, { useState } from 'react';
import "../qualification/Qualification.css"

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }
    return (
        <>
            <section className="qualification section" id='qualification'>
                <h2 className="section_title center">Qualification</h2>
                <span className="section_subtitle">My personal journey</span>

                <div className="qualification_container container">
                    <div className="qualification_tabs">
                        <div className={toggleState === 1 ? "qualification_button qualification_active button-flex" : "qualification_button button-flex"} onClick={()=>toggleTab(1)}>
                            <img width="30" height="30" src="https://img.icons8.com/ios/50/education.png" alt="education" className='qualification_icon'  />
                            Education
                        </div>

                        <div className={toggleState === 2 ? "qualification_button qualification_active button-flex" : "qualification_button button-flex"} onClick={()=>toggleTab(2)}>
                            <img width="30" height="30" src="https://img.icons8.com/ios/50/briefcase.png" alt="briefcase" className='qualification_icon'  />
                            Experience
                        </div>
                    </div>

                    <div className="qualification_sections">

                        {/* content-1 */}
                        <div className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">TUIT AL</h3>
                                    <span className="qualification_subtitle">Academic lyceum - Tashkent</span>
                                    <div className="qualification_calender">
                                        <img width="15" height="15" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1" />
                                        2019 - 2021
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <div className="qualification_line"></div>
                                </div>
                            </div>

                            <div className="qualification_data">
                                <div></div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <span className="qualification_line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification_title">Frontend (ReactJs)</h3>
                                    <span className="qualification_subtitle">ItUnity Academy - Tashkent</span>
                                    <div className="qualification_calender">
                                        <img width="15" height="15" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1" />
                                        2022
                                    </div>
                                </div>
                            </div>

                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">TSTU</h3>
                                    <span className="qualification_subtitle">University - Tashkent</span>
                                    <div className="qualification_calender">
                                        <img width="15" height="15" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1" />
                                        2021 - Present
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <div className="qualification_line"></div>
                                </div>
                            </div>

                        </div>

                        {/* content-2 */}
                        <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
                            <div className="qualification_data">
                                <div>
                                    <h3 className="qualification_title">Designer</h3>
                                    <span className="qualification_subtitle">Vinetki.uz - Tashkent</span>
                                    <div className="qualification_calender">
                                        <img width="30" height="30" src="https://img.icons8.com/ios/50/calendar--v1.png" alt="calendar--v1" />
                                        2023 - 2024
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification_rounder"></span>
                                    <div className="qualification_line"></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Qualification;