import React, { useState, useRef, useEffect } from 'react';
import { Send, ThumbsUp, ThumbsDown, Check } from 'lucide-react';
import ScrollTimeline from './ScrollTimeline';
import './ChatInterface.css';

const MESSAGES = [
    {
        id: 'msg-1',
        sender: 'user',
        text: 'What is DeFi and how does it work?',
        time: '03:45 PM',
        hasOr: true
    },
    {
        id: 'msg-2',
        sender: 'ai',
        text: 'DeFi stands for Decentralized Finance. It uses blockchain technology to provide financial services without traditional intermediaries like banks. Through smart contracts on platforms like Solana, you can lend, borrow, trade, and earn interest on your crypto assets autonomously.',
        time: '03:45 PM',
    },
    {
        id: 'msg-3',
        sender: 'user',
        text: 'How is my 18% APY calculated?',
        time: '03:47 PM',
        hasOr: true
    },
    {
        id: 'msg-4',
        sender: 'ai',
        text: 'Your 18% APY is calculated based on the lending protocols we utilize. The rate is determined by supply and demand in the lending pools. With your current balance of $11,000, you earn approximately $1,980 per year, or about $165 per month.',
        time: '03:48 PM',
    },
    {
        id: 'msg-5',
        sender: 'user',
        text: 'Can I withdraw my funds at any time?',
        time: '03:50 PM',
        hasOr: true
    },
    {
        id: 'msg-6',
        sender: 'ai',
        text: 'Yes! Your funds are available for withdrawal at any time. There are no lock-up periods. The blockchain ensures your funds remain secure and accessible 24/7. Withdrawals typically process within minutes.',
        time: '03:50 PM',
    },
    {
        id: 'msg-7',
        sender: 'user',
        text: 'What are the risks involved?',
        time: '03:52 PM',
        hasOr: true
    },
    {
        id: 'msg-8',
        sender: 'ai',
        text: 'DeFi carries several risks: smart contract vulnerabilities, market volatility, and platform-specific risks. However, RebelFi mitigates these through rigorous security audits, insurance protocols, and diversification across multiple lending platforms. We recommend only investing what you can afford to risk.',
        time: '03:53 PM',
    },
    {
        id: 'msg-9',
        sender: 'user',
        text: 'How do I deposit more funds?',
        time: '03:55 PM',
        hasOr: true
    },
    {
        id: 'msg-10',
        sender: 'ai',
        text: 'To deposit, click the yellow "Deposit" button in the left panel. You can transfer USDC from your wallet or convert from other cryptocurrencies. Minimum deposit is $100, and there are no deposit fees.',
        time: '03:55 PM',
    },
    {
        id: 'msg-11',
        sender: 'user',
        text: 'I want to make a transfer',
        time: '04:03 PM',
        hasOr: true
    },
    {
        id: 'msg-12',
        sender: 'ai',
        text: 'To transfer to friends funds drop the email address of the recipient and amount.\n\n**Note: The fund can only be accessed if the user has an account with us**',
        time: '04:04 PM',
    },
    {
        id: 'msg-13',
        sender: 'user',
        text: 'Send $50 to animedle123@gmail.com',
        time: '04:05 PM',
        hasOr: true
    },
    {
        id: 'msg-14',
        sender: 'ai',
        text: 'Here is a breakdown of the transaction you want to perform. Kindly confirm!\n\nAddress: **animedle123@gmail.com**\nAmount to send: **50$**\n\nDo you want to continue with the transaction?',
        time: '04:06 PM',
        action: 'Yes, continue transaction'
    },
    {
        id: 'msg-15',
        sender: 'user',
        text: 'What happens if the lending protocol fails?',
        time: '04:08 PM',
        hasOr: true
    },
    {
        id: 'msg-16',
        sender: 'ai',
        text: 'RebelFi uses multiple lending protocols and maintains an insurance fund to protect users. In the unlikely event of a protocol failure, our risk management system automatically redistributes funds to secure alternatives. Additionally, we carry third-party insurance coverage.',
        time: '04:09 PM',
    },
    {
        id: 'msg-17',
        sender: 'user',
        text: 'Can I see my transaction history?',
        time: '04:10 PM',
        hasOr: true
    },
    {
        id: 'msg-18',
        sender: 'ai',
        text: 'Yes! Your recent transactions are displayed in the left sidebar. For a complete history, you can visit your dashboard or download a CSV report. All transactions are also verifiable on the Solana blockchain.',
        time: '04:11 PM',
    },
    {
        id: 'msg-19',
        sender: 'user',
        text: 'How does RebelFi make money?',
        time: '04:12 PM',
        hasOr: true
    },
    {
        id: 'msg-20',
        sender: 'ai',
        text: 'RebelFi earns a small percentage (typically 0.5-1%) from the yields generated through our lending strategies. This allows us to offer competitive rates while maintaining our platform and security infrastructure. There are no hidden fees.',
        time: '04:13 PM',
    },
];

const MessageBubble = ({ message }) => {
    const isUser = message.sender === 'user';

    const renderContent = (text) => {
        return text.split('\n').map((line, i) => (
            <div key={i} style={{ minHeight: line ? 'auto' : '10px' }}>
                {line.split('**').map((part, j) =>
                    j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                )}
            </div>
        ));
    };

    return (
        <div id={message.id} className={`message-row ${message.sender}`}>
            {!isUser && <div className="ai-avatar">AI</div>}

            <div className="message-bubble">
                <div className="message-content">
                    {renderContent(message.text)}
                </div>

                {message.action && (
                    <button className="action-card-btn">
                        {message.action}
                    </button>
                )}

                <div className="message-meta">
                    <span>{message.time}</span>
                    <Check size={14} />
                    {!isUser && (
                        <div className="meta-actions">
                            <button className="meta-action-btn"><ThumbsUp size={14} /></button>
                            <button className="meta-action-btn"><ThumbsDown size={14} /></button>
                        </div>
                    )}
                </div>
            </div>

            {isUser && message.hasOr && (
                <div className="or-divider">OR</div>
            )}
        </div>
    );
};

const ChatInterface = () => {
    const [inputValue, setInputValue] = useState('');
    const messagesAreaRef = useRef(null);

    const userMessages = MESSAGES.filter(msg => msg.sender === 'user');

    return (
        <div className="chat-interface">
            <div className="messages-area" ref={messagesAreaRef}>
                {MESSAGES.map(msg => (
                    <MessageBubble key={msg.id} message={msg} />
                ))}
            </div>

            <ScrollTimeline
                messages={userMessages}
                messagesAreaRef={messagesAreaRef}
            />

            <div className="input-area-wrapper">
                <div className="input-container">
                    <input
                        type="text"
                        className="chat-input"
                        placeholder="Deposit to save in USDC, learn DeFi. Start here"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="send-btn">
                        <Send size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
