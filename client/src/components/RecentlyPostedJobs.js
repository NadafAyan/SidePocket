import React from 'react';
import './RecentlyPostedJobs.css';
import image from '../assests/recently posted jobs 1.jpg';
import image1 from '../assests/recently posted jobs 2.jpg';
import image2 from '../assests/recently posted jobs 3.jpg';

const RecentlyPostedJob = () => {
    return (
        <div className="recently-posted-job">
            <h1>Recently Posted Jobs</h1>
            <div className="recently-posted-job-container">
                <div className="recently-posted-job-card" id='one'>
                    <img className="img" src={image} alt="Pet Care" />
                    <h3><b>Pet Care</b></h3>
                    <p>8kms away</p>
                    <p><b>Bid - ₹350</b></p>
                </div>
                <div className="secondRow">
                <div className="recently-posted-job-card" id='two'>
                    <img className="img" src={image1} alt="Plumbing" />
                    <h3><b>Plumbing</b></h3>
                    <p>3.5kms away</p>
                    <p><b>Bid - ₹420</b></p>
                </div>
                <div className="recently-posted-job-card" id='three'>
                    <img className="img" src={image2} alt="Graphics Designing" />
                    <h3><b>Graphics Designing</b></h3>
                    <p>36kms away</p>
                    <p><b>Bid - ₹1020</b></p>
                </div>
                </div>
            </div>
        </div>
    );
};

export default RecentlyPostedJob;

