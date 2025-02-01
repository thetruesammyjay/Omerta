import React from 'react';

const Message = ({ message }) => {
    return (
        <div className="message">
            <strong>{message.username}:</strong> {message.message}
        </div>
    );
};

export default Message;