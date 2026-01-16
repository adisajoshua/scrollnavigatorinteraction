import React, { useState, useEffect } from 'react';
import './ScrollTimeline.css';

const ScrollTimeline = ({ messages, messagesAreaRef }) => {
    const [activeId, setActiveId] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (!messagesAreaRef.current) return;

            const scrollArea = messagesAreaRef.current;
            const clientHeight = scrollArea.clientHeight;

            // Find which message is currently in view
            messages.forEach((msg) => {
                const element = document.getElementById(msg.id);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const containerRect = scrollArea.getBoundingClientRect();

                    // Check if message is in the visible viewport
                    if (
                        rect.top >= containerRect.top &&
                        rect.top <= containerRect.top + clientHeight / 2
                    ) {
                        setActiveId(msg.id);
                    }
                }
            });
        };

        const scrollArea = messagesAreaRef.current;
        if (scrollArea) {
            scrollArea.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
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

    const truncateText = (text, maxLength = 35) => {
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
    };

    return (
        <div
            className={`scroll-timeline ${isHovered ? 'expanded' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {!isHovered ? (
                // Compact line markers view
                <div className="timeline-compact">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`timeline-line ${activeId === msg.id ? 'active' : ''}`}
                        />
                    ))}
                </div>
            ) : (
                // Expanded panel view
                <div className="timeline-expanded">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`timeline-item ${activeId === msg.id ? 'active' : ''}`}
                            onClick={() => scrollToMessage(msg.id)}
                        >
                            <div className="item-text">{truncateText(msg.text)}</div>
                            <div className="item-marker" />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ScrollTimeline;
