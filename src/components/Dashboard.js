// Dashboard.js
import React, { useState } from 'react';
import ChatRoom from './ChatRoom';

const Dashboard = ({ user, onLogout }) => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleJoinRoom = (room) => {
    // Set the selected room
    setSelectedRoom(room);
  };

  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <button onClick={onLogout}>Logout</button>
      <div>
        <h3>Available Rooms</h3>
        <button onClick={() => handleJoinRoom('devops')}>DevOps</button>
        <button onClick={() => handleJoinRoom('cloud computing')}>Cloud Computing</button>
        {/* Add more room buttons */}
      </div>
      {selectedRoom && <ChatRoom user={user} selectedRoom={selectedRoom} />}
    </div>
  );
};

export default Dashboard;
