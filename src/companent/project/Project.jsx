import React from 'react';
import "../project/Project.css"

const Project = () => {

    return (
        <>
            <section className="project section" id='project'>
                <h2 className="section_title center">Project</h2>
                <span className="section_subtitle">My projects</span>
                <div className='project_container container'>
                    <ul>
                        <li>
                            <a href="https://sparkling-caramel-3329d6.netlify.app/">www.myvinetki.uz</a>
                            <p className='arrowRightIcon'>&#62;</p>
                        </li>
                        <li>
                            <a href="https://s3-alpha-sig.figma.com/img/3fdc/4c93/4adc2852b0757a04f517dec2c9d18a05?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bpjlQc4yLAc7msmX13vJMHaBn0IBv0LJKoeeVhguSLB0pU3auyVj5M3KVkCUM~9oMFpCICti7iLaukV3hlI-oY~4MpWuA56Xuob~sFfK7TVPCeEfnzokb6kC3kjXMVBiLsmQgOebY1txb2uEhgO-5AmxfWJNY4kp0kqF42Z3Q8dji6KuBIECEX9G8xGnDgIEVkSOiGSuG0DzyQ9HdIX2VLcFgJji0NhRTJwt4LYvrBGG0pg3x27~TnULVjTe3PVgIvSSQpvGi-F8SAlQBAAxAuZHTGhJUFfjpVHxn3NKqUiJhdK3YDjtEuCn6--wvWUWkYC3o6f~YDpfgeOQKj79fw__">Unity test</a>
                            <p className='arrowRightIcon'>&#62;</p>
                        </li>
                        <li>
                            <a href="https://basic-calculator-typescript.netlify.app">Basic calculator</a>
                            <p className='arrowRightIcon'>&#62;</p>
                        </li>
                        <li>
                            <a href="https://essential-vocabulary-game.vercel.app/">Essential</a>
                            <p className='arrowRightIcon'>&#62;</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default Project;