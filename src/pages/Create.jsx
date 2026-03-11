// Create.jsx
import React, { useState } from 'react';

function Create() {
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Code to handle posting content goes here
        console.log('Content submitted:', content);
    };

    return (
        <form onSubmit={handleSubmit}>  
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Create your content here..."
                rows="10"
                cols="30"
            />
            <button type="submit">Post Content</button>
        </form>
    );
}

export default Create;