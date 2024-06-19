import React from 'react';
import "../project/Project.css"
import LogoVinetka from '../../assets/logo.png';

const Project = () => {

    return (
        <>
            <section className="project section" id='project'>
                <h2 className="section_title center">Project</h2>
                <span className="section_subtitle">My projects</span>

                <div className="project_container container">
                    <div className="project_content">
                        <a href="https://sparkling-caramel-3329d6.netlify.app/" target="_blank">
                            <img src={LogoVinetka} alt="" className="about_img" />
                            <span className="section_subtitle">www.myvinetki.uz</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Project;