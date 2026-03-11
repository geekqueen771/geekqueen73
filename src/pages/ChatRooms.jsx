import React, { useState } from 'react';

const ChatRooms = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [chatRooms, setChatRooms] = useState([
        'General',
        'Tech Talk',
        'Random',
        'Music',
        'Gaming'
    ]);

    const filteredRooms = chatRooms.filter(room =>
        room.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div>
            <h1>Chat Rooms</h1>
            <input
                type="text"
                placeholder="Search for a chat room..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <ul>
                {filteredRooms.map((room, index) => (
                    <li key={index}>{room}</li>
                ))}
            </ul>
        </div>
    );
};

export default ChatRooms;