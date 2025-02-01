import React, { useEffect } from 'react';
import { socket } from '../services/socket';

const LiveChat = () => {
    const [messages, setMessages] =useState([]);
    const [input, setInput] = useState(' ');

    useEffect(() => {
        socket.on('chat_message', (data) => {
            setMessages((prevMessages) => [...prevMessages, data]);
        });

        return () => {
            socket.off('chat_message');
        };
    }, []);
    const sendMessage = () => {
        if (input.trim()) {
            socket.emit('send_message', { message: input });
            setInput('');
        }
    };
    
    return (
        <div>
            <h2>Live Chat</h2>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>{msg}</div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key == 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default LiveChat;