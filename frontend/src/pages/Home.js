import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <div>
            <h1>Welcome to Omerta</h1>
            <p>Your live chat and customer service tool.</p>
            <nav>
                <Link to="/live-chat">Live Chat</Link> |{' '}
                <Link to="/chat-history">Chat History</Link> |{' '}
                <Link to="/analytics">Analytics</Link> |{' '}
                <Link to="/settings">Settings</Link>
            </nav>
        </div>
    );
};

export default Home;