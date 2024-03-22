import React, { useState } from 'react';
import "../styles/inputForm.css";

function InputForm({ fetchUserData }) {
    const [user, setUser] = useState("");
    const [error, setError] = useState("");

    function handleChange(event) {
        const newUser = event.target.value;

        setUser(newUser);
        if (newUser.length < 3) {
            setError("Username must be at least 3 characters long!");
        } else {
            setError("");
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            if (user.length >= 3) {
                fetchUserData(user);
            } else {
                setError("Username must be at least 3 characters long!");
            }
        }
    }

    return (
        <div className='inputForm'>
            <label>
                GitHub username:
                <input
                    type="text"
                    placeholder='e.g. facebook'
                    value={user}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                />
            </label>
            <button onClick={() => fetchUserData(user)}>GO!</button>
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default InputForm;
