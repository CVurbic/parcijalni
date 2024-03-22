import React from 'react'
import "../styles/inputForm.css"
import { useState } from 'react'

function InputForm({ handleUser }) {
    const [user, setUser] = useState("")
    function handleChange(event) {
        const newUser = event.target.value
        if (newUser.length > 3)   setUser(newUser)
        }

    return (
        <div className='inputForm'>
            <label>
                GitHub username:
                <input
                    type="text"
                    placeholder='e.g. facebook'
                    onChange={handleChange} />
            </label>
       {/*      <button onClick={() => handleUser(user)}>GO!</button>
       */}  </div>
    )
}

export default InputForm