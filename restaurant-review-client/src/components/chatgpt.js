import React, { useState } from 'react';

function ChatGPTComponents() {
    const [message, setMessage] = useState('');
    const [response, setReponse] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({ message }),
        })
        .then((res) => res.json())
        .then((data) => setReponse(JSON.stringify(data.message)));

    };

    return (
        <div className='GPTAPIresponse'>
            <form onSubmit={handleSubmit}>
                <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}>
                </textarea>
                <button type='submit'>Submit</button>
            </form>
            <div>{response}</div>
        </div>
    );
}

export default ChatGPTComponents