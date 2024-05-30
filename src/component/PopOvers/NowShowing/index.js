import React from 'react';
import './NowShowing.css'; 
import { BreakingNews } from '../../../assets';

const NowShowing = () => {
    const currentNews = {
        title: 'Breaking News: Major Event Happening Now',
        image: BreakingNews,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce placerat urna sed ante ultricies, in malesuada dolor laoreet. Aliquam fermentum faucibus orci ac varius.',
        time: 'Live at 10:00 AM'
    };

    return (
        <div className="now-showing-container">
            <div className="current-news-card">
                <img src={currentNews.image} alt={currentNews.title} className="current-news-image" />
                <div className="current-news-info">
                    <h3>{currentNews.title}</h3>
                    <p>{currentNews.description}</p>
                    <span className="current-news-time">{currentNews.time}</span>
                </div>
            </div>
        </div>
    );
};

export default NowShowing;
