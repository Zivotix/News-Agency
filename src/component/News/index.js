import React from 'react';
import './News.css'; 
import NowShowing from '../PopOvers/NowShowing';
import BreakingNews from '../PopOvers/BreakingNews';
import { News1 } from '../../assets';
import { isMobile } from 'react-device-detect';

const News = () => {
    const newsData = [
        {
            title: 'Breaking News: Market Hits Record Highs',
            description: 'The stock market reached new record highs today as investors celebrated...',
            image: News1,
        },
        {
            title: 'Local News: New Park Opens Downtown',
            description: 'A new park has opened in the downtown area, offering green space and recreational...',
            image: News1,
        },
        {
            title: 'Sports Update: Championship Game Tonight',
            description: 'The championship game is scheduled for tonight, with the top teams competing...',
            image: News1,
        },
        // Add more news items as needed
    ];

    return (
        <div className="news-container">
            <div className="about-page-header">
                <h1 style={{ color: '#fff'}}>Latest News</h1>
                <p>We are dedicated to providing accurate and timely news coverage to our audience.</p>
            </div>
           <div className='news-box'>
           <div style={{ width: isMobile ? '100%' : '40%'}}>
           <NowShowing />
           <BreakingNews />
           </div>
            <div className="news-list">
                {newsData.map((news, index) => (
                    <div key={index} className="news-item">
                        <img src={news.image} alt={news.title} className="news-image" />
                        <div className="news-content">
                            <h2 className="news-title">{news.title}</h2>
                            <p className="news-description">{news.description}</p>
                        </div>
                    </div>
                ))}
            </div>
           </div>
        </div>
    );
};

export default News;
