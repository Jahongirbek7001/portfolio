import React from "react";

const Info = () => {
    return (
        <>
            <div className="about_info grid">
                <div className="about_box">
                    <img width="40" height="40" src="https://img.icons8.com/external-gradak-royyan-wijaya/24/external-awards-gradak-sports-gradak-royyan-wijaya-2.png" alt="external-awards-gradak-sports-gradak-royyan-wijaya-2" className="about_icon" />
                    <h3 className="about_title">Experience</h3>
                    <span className="about_subtitle">1 years working</span>
                </div>

                <div className="about_box">
                    <img width="40" height="40" src="https://img.icons8.com/ios/50/briefcase.png" alt="briefcase" className="about_icon" />
                    <h3 className="about_title">Completed</h3>
                    <span className="about_subtitle">1 + Projects</span>
                </div>

                <div className="about_box">
                    <img width="40" height="40" src="https://img.icons8.com/metro/26/technical-support.png" alt="technical-support" className="about_icon" />
                    <h3 className="about_title">Support</h3>
                    <span className="about_subtitle">Online 24/7</span>
                </div>
            </div>
        </>
    )
}
export default Info;