import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Signup = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [cpass, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();



    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        hookerror] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/');
    }

    const handleUserMail = (e) => {
        setMail(e.target.value);
    }
    const handleUserPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleUserConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleFormsubmit = (e) => {
        e.preventDefault();
        console.log(mail,password);
        if (password === cpass) {
            createUserWithEmailAndPassword(mail, password)
        }
    }

    return (
        <>
            <section className="section contact wf-section">
                <div className="container-default w-container">
                    <div
                        data-w-id="30ebb2db-5ea0-447c-109a-4ec2ae25da3f"
                        className="contact-title-wrapper"
                    >
                        <div className="subtitle">Contact Me</div>
                        <h1 data-w-id="Heading 14" className="title contact">
                            Get in touch today
                        </h1>
                    </div>
                    <div className="card bg-neutral-200 contact">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="split-content card-contact-left">
                                    <div className="card-contact-title-wrapper">
                                        <h2 className="title card-contact">
                                            Have questions? <br />We are ready to assist you
                                        </h2>
                                        <p className="paragraph card-contact">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis id
                                            sodales enim, venenatislo.
                                        </p>
                                    </div>
                                    <div className="w-layout-grid card-contact-grid">
                                        <a
                                            href="tel:(487)120-7980"
                                            className="card-contact-link w-inline-block"
                                        ><img
                                                src="https://assets.website-files.com/601819adb4e3273e5e9cb4e0/601b0a4bc00c7e5cce79deed_icon-1-contact-link-doctor-template.svg"
                                                alt="Phone Icon - Doctor Webflow Template"
                                                className="image card-contact-link-icon"
                                            />
                                            <div>(487) 120 - 7980</div></a
                                        ><a
                                            href="mailto:contact@doctors.com"
                                            className="card-contact-link w-inline-block"
                                        ><img
                                                src="https://assets.website-files.com/601819adb4e3273e5e9cb4e0/601b0a4bf781bcf2d0c5da9f_icon-2-contact-link-doctor-template.svg"
                                                alt="Email Icon - Doctor Webflow Template"
                                                className="image card-contact-link-icon"
                                            />
                                            <div>contact@doctors.com</div></a
                                        >
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="split-content card-contact-right">
                                    <div className="contact-form-block w-form">
                                        <form onSubmit={handleFormsubmit} id="signup-Form" action='/'  className="contact-form-grid">
                                            <div className="input-wrapper">
                                                <label htmlFor="name">Your Name</label
                                                ><input
                                                    type="text"
                                                    className="input w-input"
                                                    required
                                                />
                                            </div>
                                            <div className="input-wrapper">
                                                <label htmlFor="email">Email Address</label
                                                ><input
                                                    type="email"
                                                    onBlur={handleUserMail}
                                                    className="input w-input"
                                                    required
                                                />
                                            </div>
                                            <div className="input-wrapper">
                                                <label htmlFor="Phone">Password</label
                                                ><input
                                                    type="password"
                                                    onBlur={handleUserPassword}
                                                    className="input w-input" 
                                                    id="password"
                                                    required
                                                />
                                            </div>
                                            <div className="input-wrapper">
                                                <label htmlFor="Phone">Confirm Password</label
                                                >
                                                <input
                                                    type="password"
                                                    onBlur={handleUserConfirmPassword}
                                                    className="input w-input" 
                                                    id="cpassword"
                                                    required
                                                />
                                            </div>

                                            <input
                                                type="submit"
                                                value="Sign Up"
                                                className="button-primary w-button"
                                            />
                                        </form>
                                        <div
                                            className="success-message w-form-done"
                                            tabIndex="-1"
                                            role="region"
                                            aria-label="Contact Form success"
                                        >
                                            <div>
                                                Your message has been submitted. <br />I will get back to you
                                                within 24-48 hours.
                                            </div>
                                        </div>
                                        <div
                                            className="error-message w-form-fail"
                                            tabindex="-1"
                                            role="region"
                                            aria-label="Contact Form failure"
                                        >
                                            <div>Oops! Something went wrong.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="bg contact">
                    <img
                        src="https://assets.website-files.com/601819adb4e3273e5e9cb4e0/601b3342e9f0b22f6da50dc5_bg-1-contact-doctor-template.svg"
                        data-w-id="34bfbb52-2db7-c14a-e38f-74ea10aabb62"

                        alt=""
                        className="image bg-service-1"
                    /><img
                        src="https://assets.website-files.com/601819adb4e3273e5e9cb4e0/601b334289e482e6f2aaf40f_bg-2-contact-doctor-template.svg"
                        data-w-id="ccd53273-79fb-5443-644a-66d6386750de"

                        alt=""
                        className="image bg-service-2"
                    />
                </div>
            </section>
        </>
    );
};

export default Signup;