import React, { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Sidebar from './components/Sidebar/Sidebar';
import Pusher from 'pusher-js';
import axios from 'axios'


function App() {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    axios.get('/messages/sync')
      .then(res => {
        setMessages(res.data)
      })
  }, []);


  useEffect(() => {
    const pusher = new Pusher('ce3591f68f47897c3f0c', {
      cluster: 'us2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessages) => {
      setMessages({ ...messages, newMessages })
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages]);

  console.log(messages)

  return (
    <div className="app">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>

    </div>
  );
}

export default App;
