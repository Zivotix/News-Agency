import React from 'react';
import './AnchorStanding.css';
import { Anchor } from '../../../assets';

const AnchorStandingPlace = () => {
    const anchorPlace = {
        gif: Anchor,
        location: 'News Delivery Place',
        description: 'Central Park is an urban park in New York City located between the Upper West and Upper East Sides of Manhattan.',
    };

    return (
        <div className="anchor-place-container">
            <div className="anchor-gif">
                <img src={anchorPlace.gif} alt="Anchor GIF" />
            </div>
            <div className="anchor-info">
                <h2>{anchorPlace.location}</h2>
                <p>{anchorPlace.description}</p>
            </div>
        </div>
    );
};

export default AnchorStandingPlace;
