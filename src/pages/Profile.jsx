import React from 'react';

const Profile = () => {
    const user = { // Sample user data
        avatar: 'https://via.placeholder.com/150',
        name: 'User Name',
        settings: ['Privacy', 'Notifications', 'Account'],
        savedPosts: ['Post 1', 'Post 2', 'Post 3'],
    };

    return (
        <div className="profile">
            <img src={user.avatar} alt="User Avatar" />
            <h1>{user.name}</h1>
            <h2>Settings</h2>
            <ul>
                {user.settings.map(setting => <li key={setting}>{setting}</li>)}
            </ul>
            <h2>Saved Posts</h2>
            <ul>
                {user.savedPosts.map(post => <li key={post}>{post}</li>)}
            </ul>
        </div>
    );
};

export default Profile;