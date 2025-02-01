import React, { useState, useEffect} from 'react';
import { getMessages } from '../services/chatService';

const ChatHistory = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const data = await getMessages();
            setMessages(data);
        };
        fetchMessages();
    }, []);

    return (
        <div>
            <h2>Chat History</h2>
            <u1>
                {messages.map((msg) => (
                    <li key={messages.id}>
                        <strong>{msg.user.username}:</strong> {msg.content} <em>({msg.timestamp})</em>
                    </li>
                ))}
            </u1>
        </div>
    );
};

export default ChatHistory;