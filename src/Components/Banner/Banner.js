import React from 'react';

const Banner = () => {
    return (
        <div>
            <section class="section home-hero wf-section">
                <div class="container-default w-container">
                    <div class="home-hero-wrapper">
                        <div
                            data-w-id="29cd3f96-03a6-481d-9037-14cbd2879b0e"
                            class="split-content home-hero-left">
                            <div class="subtitle">Dr. Matthew Anderson</div>
                            <h1 class="title home-hero">A dedicated doctor you can trust</h1>
                            <p class="paragraph home-hero">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Elementum eget vel, nunc nulla feugiat. Metus ut ultricies
                                faucibus.
                            </p>
                            <a href="/plans" class="button-primary bg-secondary-1 w-button"
                            >Book an Appointment</a
                            >
                        </div>
                        <div class="split-content home-hero-right">
                            <div
                                data-w-id="e20d7af4-1d3a-1f2b-a0af-9800897e28f4"
                                class="image-wrapper home-hero"
                            >
                                <img
                                    src="https://assets.website-files.com/601819adb4e3273e5e9cb4e0/601862fd6baef26ae8f5fa5f_image-home-hero-doctor-template.jpg"
                                    sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, (max-width: 991px) 595px, (max-width: 1919px) 47vw, 656.59375px"
                                    alt="Doctor John Carter - Doctor Webflow Template"
                                    class="image home-hero"
                                />
                                <div
                                    class="image-solid-cover"
                                ></div>
                            </div>
                            <img
                                src="https://assets.website-files.com/601819adb4e3273e5e9cb4e0/6018589e3ed02ef5bdb1fbe4_bg-home-hero-doctor-template.svg"
                                data-w-id="f5323537-1a51-9965-7156-513075d69756"
                                alt=""
                                class="bg home-hero-right"
                            />
                        </div>
                    </div>
                </div>
                <div class="bg home-hero"></div>
            </section>
        </div>
    );
};

export default Banner;