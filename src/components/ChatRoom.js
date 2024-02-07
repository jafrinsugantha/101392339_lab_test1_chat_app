// ChatRoom.js
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const ChatRoom = ({ user, selectedRoom }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const socket = io('your_backend_socket_server_url'); // Replace with your actual server URL

  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Listen for user typing
    socket.on('typing', ({ isTyping, username }) => {
      setIsTyping(isTyping);
    });

    return () => {
      // Cleanup socket connections on component unmount
      socket.disconnect();
    };
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      // Emit the message to the server
      socket.emit('message', { room: selectedRoom, message: newMessage, username: user.username });

      // Clear the input field
      setNewMessage('');
    }
  };

  const handleTyping = (isTyping) => {
    // Emit user typing event to the server
    socket.emit('typing', { room: selectedRoom, isTyping, username: user.username });
  };

  return (
    <div>
      <h2>{selectedRoom}</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.username}:</strong> {message.message}
          </div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
          onFocus={() => handleTyping(true)}
          onBlur={() => handleTyping(false)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      {isTyping && <div>{user.username} is typing...</div>}
    </div>
  );
};

export default ChatRoom;
