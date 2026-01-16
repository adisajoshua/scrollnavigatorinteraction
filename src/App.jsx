/**
 * App Main Component
 * 
 * Purpose: Entry point for the Smart Navigator interaction.
 * Features: Flex layout, Sidebar and ChatInterface integration.
 * 
 * @author Antigravity
 * @created 2026-01-16
 */

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './components/Sidebar';
import ChatInterface from './components/ChatInterface';
import './index.css';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <main className="app-container">
      {/* Mobile Top Header */}
      <header className="mobile-header">
        <button
          className="hamburger-btn"
          onClick={toggleSidebar}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="mobile-logo">RebelFi</div>
      </header>

      {/* Backdrop for mobile drawer */}
      {isSidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <ChatInterface />
    </main>
  );
}

export default App;
