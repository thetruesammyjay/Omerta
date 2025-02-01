import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import LiveChat from './pages/LiveChat';
import ChatHistory from './pages/ChatHistory';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import './styles/global.css';


const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element= {<Home />} />
                <Route path="/live-chat" element={<LiveChat />} />
                <Route path="/chat-history" element={<ChatHistory />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
};

export default App;