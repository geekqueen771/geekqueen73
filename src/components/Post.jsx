import React from 'react';

const Post = ({ post, onLike, onComment, onSave, onShare }) => {
    return (
        <div className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="post-actions">
                <button onClick={onLike}>Like</button>
                <button onClick={onComment}>Comment</button>
                <button onClick={onSave}>Save</button>
                <button onClick={onShare}>Share</button>
            </div>
        </div>
    );
};

export default Post;