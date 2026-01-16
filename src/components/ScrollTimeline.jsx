/**
 * ScrollTimeline Component
 * 
 * Purpose: Provides a visual landmark system for navigating long chat histories.
 * Features: Interactive line markers, expanded panel on hover, smooth scrolling to message IDs.
 * 
 * Why: Helps users maintain context in deep conversations without manual searching.
 * 
 * @author Antigravity
 * @created 2026-01-16
 */

import React, { useState, useEffect } from 'react';
import './ScrollTimeline.css';

const ScrollTimeline = ({ messages, messagesAreaRef }) => {
    const [activeId, setActiveId] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    /**
     * Why: Using IntersectionObserver would be cleaner for performance,
     * but Scroll handler gives precise control over exactly when the marker highlights.
     */
    useEffect(() => {
        const handleScroll = () => {
            if (!messagesAreaRef.current) return;

            const scrollArea = messagesAreaRef.current;
            const containerRect = scrollArea.getBoundingClientRect();

            // Find which message is currently in the active "viewport area" (top 15% of container)
            messages.forEach((msg) => {
                const element = document.getElementById(msg.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the element's top is roughly near the top of the container
                    if (rect.top >= containerRect.top - 20 && rect.top <= containerRect.top + 100) {
                        setActiveId(msg.id);
                    }
                }
            });
        };

        const scrollArea = messagesAreaRef.current;
        if (scrollArea) {
            scrollArea.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll();
        }

        return () => {
            if (scrollArea) {
                scrollArea.removeEventListener('scroll', handleScroll);
            }
        };
    }, [messages, messagesAreaRef]);

    const scrollToMessage = (messageId) => {
        const element = document.getElementById(messageId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(messageId);
        }
    };

    const truncateText = (text, maxLength = 32) => {
        return text.length > maxLength ? text.substring(0, maxLength).trim() + '...' : text;
    };

    return (
        <nav
            className={`scroll-timeline ${isHovered ? 'scroll-timeline--expanded' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Conversation timeline"
        >
            <div className="scroll-timeline__inner">
                {messages.map((msg) => (
                    <button
                        key={msg.id}
                        className={`timeline-marker ${activeId === msg.id ? 'timeline-marker--active' : ''}`}
                        onClick={() => scrollToMessage(msg.id)}
                        aria-label={`Jump to: ${msg.text.substring(0, 20)}`}
                    >
                        {isHovered && (
                            <span className="timeline-marker__text">
                                {truncateText(msg.text)}
                            </span>
                        )}
                        <span className="timeline-marker__indicator" />
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default ScrollTimeline;
