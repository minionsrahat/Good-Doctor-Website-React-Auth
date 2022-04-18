import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button'

const Login = () => {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    // const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        hookerror,
    ] = useSignInWithEmailAndPassword(auth);

    const provider = new GoogleAuthProvider();

    // const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user])


    const handleUserMail = (e) => {
        setMail(e.target.value);
    }
    const handleUserPassword = (e) => {
        setPassword(e.target.value);
    }
    const handleFormsubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(mail, password)
    }

    const handleGoogleButton = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                console.log(result.user);
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log(error.message);

            });
    }

    return (
        <>
            <section className="section contact wf-section">
                <div className="container-default w-container">
                    <div
                        data-w-id="30ebb2db-5ea0-447c-109a-4ec2ae25da3f"
                        className="contact-title-wrapper">
                        <h1 data-w-id="Heading 14" className="title contact">
                            Log In
                        </h1>
                    </div>
                    <div className="card bg-neutral-200 contact">
                        <div className="row">
                            <div className="col-md-4 d-flex align-items-center">
                                <div className="split-content card-contact-left">
                                    <div className="card-contact-title-wrapper">
                                        <h2 className="title card-contact">
                                            Sign In With <br /> Socical Media
                                        </h2>

                                    </div>
                                    <div className="w-layout-grid card-contact-grid">
                                        <GoogleButton
                                            onClick={handleGoogleButton}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8 d-flex justify-content-center">
                                <div className="split-content card-contact-right">
                                    <div className="contact-form-block w-form">
                                        <form onSubmit={handleFormsubmit} id="signup-Form" action='/' className="contact-form-grid">

                                            <div className="input-wrapper">
                                                <label htmlFor="email">Email Address</label
                                                ><input
                                                    type="email"
                                                    onBlur={handleUserMail}
                                                    className="input w-input"
                                                    placeholder='example@gmail.com'
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
                                            <input
                                                type="submit"
                                                value="Log In"
                                                className="button-primary w-button"
                                            />
                                        </form>
                                        {hookerror ? <>
                                            <div
                                                className="error-message"
                                                tabindex="-1"
                                                role="region"
                                                aria-label="Contact Form failure"
                                            >
                                                <div>{hookerror && hookerror?.message}</div>
                                            </div>
                                        </> : ''}

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

export default Login;