import React from 'react';
import { Info, Plus, Wallet, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logo">
                <span className="logo-icon">R</span>
            </div>

            <div className="interest-badge">
                <Info size={18} />
                Interest rate at <span className="interest-highlight">18% APY</span>
            </div>

            <div className="user-card">
                <div className="user-header">
                    <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        className="avatar"
                        alt="User"
                    />
                    <div className="user-info">
                        <h3>Man Sarr</h3>
                        <div className="user-email">manmanman@gmail.com</div>
                    </div>
                </div>

                <div className="balance-label">
                    Wallet balance <Info size={12} style={{ marginLeft: 4 }} />
                </div>
                <div className="balance-amount">$11,000.00</div>
                <div className="earning-info">
                    Earning $1,980/yr at <span style={{ color: '#c9d800', fontWeight: 'bold' }}>18% APY</span>
                </div>
            </div>

            <div className="action-buttons">
                <button className="btn btn-deposit">
                    Deposit <Plus size={16} />
                </button>
                <button className="btn btn-withdraw">
                    Withdraw <Wallet size={16} />
                </button>
            </div>

            <div className="transactions-section">
                <h3 className="section-title">Transactions</h3>

                <div className="transaction-item">
                    <div className="tx-icon tx-deposit">
                        <ArrowDownLeft size={16} />
                    </div>
                    <div className="tx-details">
                        <div className="tx-title">from 0xAbC123Def...</div>
                        <div className="tx-sub">Deposit • 12 min ago</div>
                    </div>
                    <div className="tx-amount amount-positive">+$11,000.00</div>
                </div>

                <div className="transaction-item">
                    <div className="tx-icon tx-withdraw">
                        <ArrowUpRight size={16} />
                    </div>
                    <div className="tx-details">
                        <div className="tx-title">to 0xZbC232DeF45...</div>
                        <div className="tx-sub">Withdrawal • 5 min ago</div>
                    </div>
                    <div className="tx-amount amount-negative">- $2,000.00</div>
                </div>

                <div className="transaction-item">
                    <div className="tx-icon tx-withdraw">
                        <ArrowUpRight size={16} />
                    </div>
                    <div className="tx-details">
                        <div className="tx-title">to animedle123@gm...</div>
                        <div className="tx-sub">Transfer • 2 min ago</div>
                    </div>
                    <div className="tx-amount amount-negative">- $50.00</div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
