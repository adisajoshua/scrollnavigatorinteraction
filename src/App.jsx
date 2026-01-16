import React from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import './index.css';

function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw' }}>
      <Sidebar />
      <ChatInterface />
    </div>
  );
}

export default App;
