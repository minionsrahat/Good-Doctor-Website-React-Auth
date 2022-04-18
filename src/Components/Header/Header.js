import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'
const Header = () => {
    const navigate = useNavigate();
    const goSingupPage = () => {
        navigate('/signup')
    }
    const goLoginPage = () => {
        navigate('/login')
    }
    const logout = () => {
        signOut(auth);
    }
    const [user, loading, error] = useAuthState(auth)


    if(loading){
        return 'Loading'
    }

    return (
        <div className="header w-nav"
            data-collapse="medium"
            data-animation="over-right"
            data-duration="400"
            data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
            data-easing="ease"
            data-easing2="ease"
            role="banner">

            <div className="container-default w-container">
                <div className="header-contact-wrapper">
                    <a href="tel:(284)587-7800" className="header-contact-link"
                    >01878517664</a
                    ><a href="/" className="header-contact-link last">contact@doctor.com</a>
                </div>
                <div className="divider header-divider"></div>
                <div className="header-wrapper">
                    <div className="split-content header-right">
                        <a
                            href="/"
                            className="brand w-nav-brand w--current"
                            aria-label="home">
                            <img
                                alt=''
                                src="https://assets.website-files.com/601819adb4e3273e5e9cb4e0/601839a525b0824fdb1566b0_logo-doctor-template.svg"
                                className="header-logo"
                            />
                        </a>
                        <nav role="navigation" className="nav-menu w-nav-menu">
                            <ul className="header-navigation">
                                <li className="nav-item-wrapper">
                                    <NavLink to="/" className="nav-link ">Home</NavLink>
                                </li>

                                <li className="nav-item-wrapper">
                                    <NavLink to="/about" className="nav-link ">About</NavLink>
                                </li>
                                <li className="nav-item-wrapper">
                                    <NavLink to="/services" className="nav-link ">Services</NavLink>
                                </li>
                                <li className="nav-item-wrapper">
                                    <NavLink to="/contact-us" className="nav-link ">Contact Us</NavLink>
                                </li>
                                <li className="nav-item-wrapper header-button-mobile">


                                    {
                                        user ? <>
                                            <button onClick={logout} className="button-primary bg-secondary-1 header-button-mobile w-button mb-1">Sign Out</button>
                                        </> : <>
                                            <button onClick={goSingupPage} className="button-primary bg-secondary-1 header-button-mobile w-button mb-1">Sign Up</button>
                                            <button onClick={goLoginPage} className="button-primary bg-secondary-1 header-button-mobile w-button ">Log In</button>
                                        </>
                                    }
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="split-content header-left">

                        {
                            user ? <>
                                <button onClick={logout} className="button-primary bg-secondary-1 header-button w-button mb-1">Sign Out</button>
                            </> : <>
                                <button onClick={goSingupPage} className="button-primary bg-secondary-1 header-button w-button me-1">Sign Up</button>
                                <button onClick={goLoginPage} className="button-primary bg-secondary-1 header-button w-button ">Log In</button>
                            </>
                        }

                        <div
                            className="menu-button w-nav-button"
                            aria-label="menu"
                            role="button"
                            tabIndex="0"
                            aria-controls="w-nav-overlay-0"
                            aria-haspopup="menu"
                            aria-expanded="false"
                        >
                            <div className="menu-button-icon-wrapper">
                                <div className="menu-button-icon">
                                    <div className="menu-line-top"></div>
                                    <div className="menu-line-middle"></div>
                                    <div className="menu-line-bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
        </div>
    );
};

export default Header;