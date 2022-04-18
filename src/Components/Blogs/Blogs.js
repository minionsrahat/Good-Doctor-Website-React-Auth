import React from 'react';

const Blogs = () => {
    return (
        <>
            <div class="container my-5">
                <div class="row my-5 gy-5">
                    <div class="col-10 mx-auto">
                        <h5>1. Difference between authorization and authentication</h5>
                        <p>
                            Authentication is the process of identifying users and verifying their claims to be who they say they are. A password is one of the most popular and obvious factors used to authenticate identity. If the user name matches the credential for the password, the identification is valid, and the system provides the user access.
                            Authorization occurs following successful authentication of a user's identity. It's about providing full or partial access to resources such as databases, funds, and other vital information necessary to complete the work.
                            For instance, a corporation may grant access to its workplace systems to all employees (that is authentication!). However, not everyone will be granted access to its password-protected data (that is permission!). Organizations may be protected by implementing authentication with the appropriate authorization procedures, while streamlined access enables their employees to be more productive.
                        </p>
                    </div>
                    <div class="col-10 mx-auto">
                        <h5>2. What other services does firebase provide other than authentication?</h5>
                        <p>
                            Firebase was developed originally by Firebase inc. and was later acquired by Google. It offers a variety of services that assist you in developing high-quality mobile and online applications that will help you build your business.
                            <br />
                            <strong>Cloud Messaging:</strong>
                            Firebase is an excellent solution for implementing notifications, regardless of platform, due to its speed, reliability, and scalability in handling your requests.
                            Additionally, you will not be charged anything for using this service, as it is completely free.
                            <br />
                            <strong>Realtime Database:</strong> Create serverless applications by storing and synchronizing JSON data in near-realtime, on or offline, with strong user-based security.
                            <br />
                            <strong>Remote Configuration:</strong> Configure feature flags during prototyping and development to control and optimize the user experience dynamically in production.
                            <br />
                            <strong>Cloud Functions:</strong>
                            Create and execute server-side application logic without the need to set up your own server.
                            <br />
                            <strong>Hosting:</strong> Easily deploy secure, fast-loading websites that are backed up by a worldwide CDN.
                            Cloud Storage Easily store and serve user-generated content as your application matures from prototype to production-ready state.
                        </p>
                    </div>
                    <div class="col-10 mx-auto">
                        <h5> 3. Why are you using firebase? What other options do you have to implement authentication?</h5>
                        <p>
                        Firebase Authentication enables you to authenticate users in your app using backend services, simple-to-use SDKs, and pre-built UI libraries. It works with passwords, phone numbers, and prominent federated identity providers such as Google, Facebook, and Twitter, among others.
                        </p>
                        <p>Different options to implement authentication</p>
                        <ul>
                            <li>
                                <strong>Password-based authentication</strong>
                            </li>
                            <li>
                                <strong>Multi-factor authentication</strong>
                            </li>
                            <li>
                                <strong>Certificate-based authentication</strong>
                            </li>
                            <li>
                                <strong>Biometric authentication</strong>
                            </li>
                            <li>
                                <strong>Token-based authentication</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Blogs;