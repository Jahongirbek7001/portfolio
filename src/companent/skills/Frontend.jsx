import React from "react";

const Frontend = () => {
    return (
        <>
            <div className="skills_content">
                <h3 className="skills_title">Frontend developer</h3>

                <div className="skills_box">
                    <div className="skills_group">
                        {/* HTML */}
                        <div className="skills_data">
                            <img width="40" height="30" className="bx-badge-check" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" />

                            <div>
                                <h3 className="skills_name">HTML</h3>
                                <span className="skills_level">Intermediate</span>
                            </div>
                        </div>
                        {/* Css */}
                        <div className="skills_data">
                            <img width="40" height="30" className="bx-badge-check" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" />

                            <div>
                                <h3 className="skills_name">CSS</h3>
                                <span className="skills_level">Intermediate</span>
                            </div>
                        </div>
                        {/* JavaScript */}
                        <div className="skills_data">
                            <img width="40" height="30" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" />

                            <div>
                                <h3 className="skills_name">JavaScript</h3>
                                <span className="skills_level">Intermediate</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills_group">
                        {/* TailwindCss */}
                        <div className="skills_data">
                            <img width="40" height="30" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" className="bx-badge-check" />

                            <div>
                                <h3 className="skills_name">TailwindCss</h3>
                                <span className="skills_level">Intermediate</span>
                            </div>
                        </div>
                        {/* Laravel */}
                        <div className="skills_data">
                            <img width="40" height="30" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" className="bx-badge-check" />
                            <div>
                                <h3 className="skills_name">Laravel</h3>
                                <span className="skills_level">Basic</span>
                            </div>
                        </div>
                        {/* VueJs */}
                        <div className="skills_data">
                            <img width="40" height="30" className="bx-badge-check" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" />
                            <div>
                                <h3 className="skills_name">VueJs</h3>
                                <span className="skills_level">Basic</span>
                            </div>
                        </div>
                    </div>

                    <div className="skills_group">
                        {/* Bootstrap */}
                        <div className="skills_data">
                            <img width="40" height="30" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" className="bx-badge-check" />

                            <div>
                                <h3 className="skills_name">Bootstrap</h3>
                                <span className="skills_level">Intermediate</span>
                            </div>
                        </div>
                        {/* Git */}
                        <div className="skills_data">
                            <img width="40" height="30" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" className="bx-badge-check" />
                            <div>
                                <h3 className="skills_name">Git</h3>
                                <span className="skills_level">Basic</span>
                            </div>
                        </div>
                        {/* React */}
                        <div className="skills_data">
                            <img width="40" height="30" className="bx-badge-check" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" />
                            <div>
                                <h3 className="skills_name">React</h3>
                                <span className="skills_level">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Frontend;