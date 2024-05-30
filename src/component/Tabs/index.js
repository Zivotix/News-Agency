import React, { useState } from 'react';
import './TabsComponent.css';
import Viewer from '../Viewer/Viewer';
import AboutPage from '../About';
import News from '../News';

const TabsComponent = () => {
    const [activeTab, setActiveTab] = useState('Home');

    const renderContent = () => {
        switch (activeTab) {
            case 'Home':
                return <Viewer />;
            case 'About':
                return <AboutPage />;
            case 'News':
                return <News />
            default:
                return null;
        }
    };

    return (
        <div className="tabs-container">
            <div className="tab-content">
                {renderContent()}
            </div>
            <div className="tabs">
                <button 
                    className={`tab-button ${activeTab === 'Home' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('Home')}
                >
                    Home
                </button>
                <button 
                    className={`tab-button ${activeTab === 'About' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('About')}
                >
                    About
                </button>
                <button 
                    className={`tab-button ${activeTab === 'News' ? 'active' : ''}`} 
                    onClick={() => setActiveTab('News')}
                >
                    News
                </button>
            </div>
        </div>
    );
};

export default TabsComponent;
