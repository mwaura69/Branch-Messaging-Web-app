import React, { useState, useEffect, useCallback } from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { useAuth } from '../routes/AuthContext';
import axios from 'axios';

const ChatsPage = () => {
  // const [messages, setMessages] = useState([]);
  const { userName, userId } = useAuth();
  const name = userName;
  const _id = userId;
  const apiKey = import.meta.env.VITE_PRIVATE_KEY;

  useEffect(() => {
    // Establish WebSocket connection
    const socket = new WebSocket(
      `wss://api.chatengine.io/person/?publicKey=${apiKey}&username=${name}&secret=${name}`
    );

    // WebSocket event handling
    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      // Handle incoming messages from the WebSocket
      const message = JSON.parse(event.data);
      const mail = message.data.last_message.text;

      // Update state with the new message
      // setMessages((prevMessages) => [...prevMessages, { text: mail, sender: message.sender.name }]);
    };

    socket.onclose = (event) => {
      console.log(`WebSocket connection closed: ${event.reason}`);
    };

    socket.onerror = (error) => {
      console.error('WebSocket encountered an error:', error);
    };

    // Cleanup WebSocket connection when the component unmounts
    return () => {
      socket.close();
    };
  }, [apiKey, name]);

  const receivedMessages = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:4001/inbox/messages/${_id}`);
      setMessages(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [_id]);

  // useEffect(() => {
  //   receivedMessages();
  // }, [receivedMessages]);

  return (
    <div style={{ height: '100vh', width: '150vh' }}>
      <PrettyChatWindow
        projectId="b23fb5a1-6099-4240-acc5-f3eb35eca42e"
        username={name} // Replace with the actual username
        secret={name} // Replace with the actual secret
        style={{ height: '100%', width: '100%' }}
        // onNewMessage={() => receivedMessages()} // Update messages on new message
        // messages={messages.map((message) => ({ text: message.mail, sender: message.user.username }))}
      />
    </div>
  );
};

export default ChatsPage;
