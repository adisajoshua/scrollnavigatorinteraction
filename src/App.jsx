/**
 * App Main Component
 * 
 * Purpose: Entry point for the Smart Navigator interaction.
 * Features: Flex layout, Sidebar and ChatInterface integration.
 * 
 * @author Antigravity
 * @created 2026-01-16
 */

import React from 'react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import './index.css';
import './App.css';

function App() {
  return (
    <main className="app-container">
      <Sidebar />
      <ChatInterface />
    </main>
  );
}

export default App;
