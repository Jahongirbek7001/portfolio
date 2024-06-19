import React from "react";

const Backend = () => {
    return (
        <>
            <div className="skills_content">
                <h3 className="skills_title">Backend developer</h3>

                <div className="skills_box">
                    <div className="skills_group">
                        {/* PHP */}
                        <div className="skills_data">
                            <img width="40" height="30" className="bx-badge-check" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" />
                            <div>
                                <h3 className="skills_name">PHP</h3>
                                <span className="skills_level">Basic</span>
                            </div>
                        </div>
                        {/* NodeJs */}
                        <div className="skills_data">
                            <img width="40" height="30" className="bx-badge-check" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" />
                            <div>
                                <h3 className="skills_name">NodeJs</h3>
                                <span className="skills_level">Basic</span>
                            </div>
                        </div>
                        {/* MySQL */}
                        <div className="skills_data">
                            <img width="40" height="30" className="bx-badge-check" src="https://img.icons8.com/ios/50/guarantee--v1.png" alt="guarantee--v1" />
                            <div>
                                <h3 className="skills_name">MySQL</h3>
                                <span className="skills_level">Intermediate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Backend;