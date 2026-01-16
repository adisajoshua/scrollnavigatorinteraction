/**
 * Sidebar Component
 * 
 * Purpose: Main navigation and user information panel.
 * Features: User profile, wallet balance, action buttons (Deposit/Withdraw), transaction history.
 * 
 * @author Antigravity
 * @created 2026-01-16
 */

import React from 'react';
import { Info, Plus, Wallet, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import './Sidebar.css';

const TRANSACTION_DATA = [
    {
        id: 'tx-1',
        type: 'deposit',
        title: 'Solana (SOL) Stake Yield',
        sub: 'RebelFi Pool • 12 min ago',
        amount: '11,000.00',
        positive: true
    },
    {
        id: 'tx-2',
        type: 'withdraw',
        title: 'Transfer to External Wallet',
        sub: '0xZbC2...DeF45 • 5 min ago',
        amount: '2,000.00',
        positive: false
    },
    {
        id: 'tx-3',
        type: 'transfer',
        title: 'Sent to Amon Medle',
        sub: 'animedle123@gmail.com • 2 min ago',
        amount: '50.00',
        positive: false
    }
];

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="logo-container">
                <div className="logo-icon">R</div>
                <h1 className="logo-text">RebelFi</h1>
            </div>

            <div className="interest-badge">
                <Info size={18} />
                <span>Interest rate at <span className="interest-highlight">18% APY</span></span>
            </div>

            <section className="user-profile">
                <div className="user-header">
                    <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="avatar"
                        alt="Adisa Joshua's Profile"
                    />
                    <div className="user-meta">
                        <h2 className="user-name">Adisa Joshua</h2>
                        <div className="user-email">adisajoshua@uxdesign.com</div>
                    </div>
                </div>

                <div className="balance-container">
                    <div className="balance-label">
                        Wallet balance <Info size={12} />
                    </div>
                    <div className="balance-amount">$11,000.00</div>
                    <div className="earning-forecast">
                        Earning $1,980/yr at <span className="apy-highlight">18% APY</span>
                    </div>
                </div>
            </section>

            <div className="nav-actions">
                <button className="btn btn-primary btn-deposit" aria-label="Deposit funds">
                    Deposit <Plus size={16} />
                </button>
                <button className="btn btn-secondary btn-withdraw" aria-label="Withdraw funds">
                    Withdraw <Wallet size={16} />
                </button>
            </div>

            <section className="transactions-history">
                <h3 className="section-title">Recent Transactions</h3>
                <div className="transactions-list">
                    {TRANSACTION_DATA.map((tx) => (
                        <div key={tx.id} className="transaction-item">
                            <div className={`tx-icon tx-icon--${tx.type}`}>
                                {tx.positive ? <ArrowDownLeft size={16} /> : <ArrowUpRight size={16} />}
                            </div>
                            <div className="tx-info">
                                <div className="tx-title">{tx.title}</div>
                                <div className="tx-sub">{tx.sub}</div>
                            </div>
                            <div className={`tx-amount ${tx.positive ? 'tx-amount--positive' : 'tx-amount--negative'}`}>
                                {tx.positive ? '+' : '-'}${tx.amount}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </aside>
    );
};

export default Sidebar;
