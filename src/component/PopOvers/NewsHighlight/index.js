import React from 'react';
import './NewsHighlights.css';

const NewsHighlights = ({highlightName}) => {
    const highlights = [
        {
            id: 1,
            title: 'Highlight 1',
            image: 'https://via.placeholder.com/300x200',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ];

    return (
        <div className="news-highlights-container">
            <div className="highlights-grid">
                {highlights.map(highlight => (
                    <div key={highlight.id} className="highlight-card">
                        <img src={highlight.image} alt={highlight.title} className="highlight-image" />
                        <div className="highlight-info">
                            <h3>{highlightName}</h3>
                            <p>{highlight.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewsHighlights;
