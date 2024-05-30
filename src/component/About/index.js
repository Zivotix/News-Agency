import React from 'react';
import './AboutPage.css'; // Import the CSS file
import { MissionImg, Team, Values } from '../../assets';


const AboutPage = () => {
    return (
        <div className="about-page-container">
            <div className="about-page-header">
                <h1>About Us</h1>
                <p>We are dedicated to providing accurate and timely news coverage to our audience.</p>
            </div>
            <div className="about-page-content">
                <div className="about-page-section">
                    <img src={MissionImg} alt="Mission" className="section-image" />
                    <div className="section-text">
                        <h2>Our Mission</h2>
                        <p>Our mission is to deliver reliable and unbiased news that empowers our audience to make informed decisions.</p>
                    </div>
                </div>
                <div className="about-page-section">
                    <img src={Team} alt="Team" className="section-image" />
                    <div className="section-text">
                        <h2>Our Team</h2>
                        <p>We have a team of experienced journalists, reporters, and editors who are passionate about delivering quality news content.</p>
                    </div>
                </div>
                <div className="about-page-section">
                    <img src={Values} alt="Values" className="section-image" />
                    <div className="section-text">
                        <h2>Our Values</h2>
                        <p>We value integrity, accuracy, and transparency in our reporting. We strive to uphold the highest standards of journalism.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
