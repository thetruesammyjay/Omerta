import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/live-chat">Live Chat</Link>
            <Link to="/chat-history">Chat History</Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/settings">Settings</Link>
        </nav>
    );
};

export default Navbar;