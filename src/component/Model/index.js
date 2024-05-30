import React from 'react';
import './Model.css';

const Model = ({ hotspotName, content, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{hotspotName}</h2>
                {content}
            </div>
        </div>
    );
};

export default Model;
