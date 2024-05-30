import React from 'react';
import './BreakingNews.css';
import { News1, BreakingNews as NewsDisplaying } from '../../../assets';

const BreakingNews = () => {
    // Mock data for breaking news
    const news = [
        {
            id: 1,
            title: 'Breaking News 1',
            image: NewsDisplaying,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            link: 'https://example.com/news1'
        },
        {
            id: 2,
            title: 'Breaking News 2',
            image: News1,
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
            link: 'https://example.com/news2'
        },
        // Add more news as needed
    ];

    return (
        <div className="breaking-news-container">
            <ul className="breaking-news-list">
                {news.map(item => (
                    <li key={item.id} className="breaking-news-item">
                        <img src={item.image} alt={item.title} className="news-image" />
                        <div className="news-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="news-link">Read More</a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BreakingNews;
