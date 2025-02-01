import React, { useState,useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

const Settings = () => {
    const { user } = useContext(AuthContext);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update User settings
    };

    return (
        <div>
            <h2>Settings</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Phone Number:</label>
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div>
                    <label>Profile Picture:</label>
                    <input
                        type="file"
                        onChange={(e) => setProfilePicture(e.target.files[0])}
                    />
                </div>
                <button type="submit">Save</button>
            </form>
        </div>
    );
};

export default Settings;