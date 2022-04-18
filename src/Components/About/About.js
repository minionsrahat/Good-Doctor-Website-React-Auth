import React from 'react';
import rahat from './rahat-removebg-preview.png'

const About = () => {
    return (
        <div>
            <section className="section home-about wf-section">
                <div className="container-default w-container">
                    <div className="home-about-wrapper">
                        <div className="split-content home-about-left">
                            <div
                                data-w-id="fcb857fa-7b58-465c-ba65-828e45dd6079"
                                className="image-wrapper home-about"
                            >
                                <img
                                    src={rahat}

                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 586px, (max-width: 1919px) 46vw, 643.1953125px"
                                    alt=""
                                    className="image home-about"
                                />
                                <div
                                    className="image-solid-cover"
                                ></div>
                            </div>
                            <div
                                data-w-id="402242cb-c068-7456-dc01-765bb7f6d14d"

                                className="bg home-about-left-1"
                            ></div>
                            <img
                                src="https://assets.website-files.com/601819adb4e3273e5e9cb4e0/6018580411f88625ef85f26d_bg-home-about-doctor-template.svg"
                                loading="lazy"

                                data-w-id="8ddaede2-da3c-1a46-9dfc-7d3fe29a897f"
                                alt=""
                                className="bg home-about-left-2"
                            />
                        </div>
                        <div
                            data-w-id="429cb5ce-ae52-8ef9-9c69-2d49e6a4ca10"

                            className="split-content home-about-right"
                        >
                            <div className="subtitle">About Me</div>
                            <h2>A dedicated developer with the core mission to help</h2>
                            <p className="paragraph home-about">
                                Strong experience in software development and has excellent interpersonal and analytical skills
                                looking to secure a position as a Software engineer in a fast-paced organization where I can use
                                my skills to the company's advantage while having the scope to develop my own skills. I wish to
                                work with a diverse team that works towards contributing to the company’s vision and goals.
                            </p>
                            <div className="_2-buttons home-about">
                                <button className="button-primary home-about w-button">Hire Me</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;