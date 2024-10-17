import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './About.css';

function About() {
    const [isTeamVisible, setIsTeamVisible] = useState(false);

    const toggleTeamSection = () => {
        setIsTeamVisible(!isTeamVisible);
    };

    const showContactAlert = () => {
        Swal.fire({
            title: "Thanks for contacting us!",
            text: "Find us on Instagram: Vanhellie_Candies_AMS",
            icon: "info",
            showClass: {
                popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                `
            },
            hideClass: {
                popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                `
            }
        });
    };

    return (
        <div>

            <div className="about-section">
                <h1>About us</h1>
                <p>Welcome to our candy shop, a delightful space in the heart of Amsterdam, created by a passionate group of friends and entrepreneurs!</p>
                <p>Check who we are below</p>
            </div>
            
            <button className="our-team-button" onClick={toggleTeamSection}>
                Our Team
            </button>


            {isTeamVisible && (
                <div className="row">
                    <div className="column">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2023/12/22/01/37/woman-8463055_1280.jpg" alt="Emma" className='pic' />
                            <div className="container">
                                <h2>Emma Crage</h2>
                                <p className="title">Chef</p>
                                <p>Emma loves creating treats that bring joy to everyone...</p>
                                <p>emma@example.com</p>
                                <p>
                                    <button className="button" onClick={showContactAlert}>Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2023/09/26/17/32/woman-8277925_1280.jpg" alt="Bella" className='pic' />
                            <div className="container">
                                <h2>Bella Ross</h2>
                                <p className="title">Marketing</p>
                                <p>Bella is our marketing and public relations specialist...</p>
                                <p>bella@example.com</p>
                                <p>
                                    <button className="button" onClick={showContactAlert}>Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <img src="https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg" alt="Robert" className='pic'/>
                            <div className="container">
                                <h2>Robert Swan</h2>
                                <p className="title">Expert</p>
                                <p>Robert is the young entrepreneur and operations expert...</p>
                                <p>robert@example.com</p>
                                <p>
                                    <button className="button" onClick={showContactAlert}>Contact</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default About;
