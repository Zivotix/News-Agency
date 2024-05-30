import React from 'react';
import './AnchorList.css';
import { Avatar1, Avatar2, Avatar3 } from '../../../assets';

const AnchorList = () => {
    // Mock data for anchors
    const anchors = [
        { 
            id: 1, 
            name: 'Anchor 1', 
            image: Avatar1,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        { 
            id: 2, 
            name: 'Anchor 2', 
            image: Avatar3,
            description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuer.',
        },
        { 
            id: 3, 
            name: 'Anchor 3', 
            image: Avatar2,
            description: 'Nulla tincidunt, nunc eu cursus eleifend, dolor quam tincidunt nisi',
        },
      
    ];

    return (
        <div>
            <ul className="anchor-list">
                {anchors.map(anchor => (
                    <li key={anchor.id} className="anchor-item">
                        <img src={anchor.image} alt={anchor.name} />
                       <div className='anchor-desc'>
                       <h3>{anchor.name}</h3>
                        <p>{anchor.description}</p>
                       </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AnchorList;
