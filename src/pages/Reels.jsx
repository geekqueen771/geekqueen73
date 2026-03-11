import React from 'react';
import './Reels.css';

const Reels = () => {
    return (
        <div className="reels-container">
            <h1>Reels Feed</h1>
            <div className="post">
                <p>User's post content here...</p>
                <button>Like</button>
                <button>Follow</button>
                <button>Comment</button>
                <button>Save</button>
            </div>
        </div>
    );
};

export default Reels;
