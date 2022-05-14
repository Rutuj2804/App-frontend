import React from 'react'

const Message = ({ message, mood }) => {
    return (
        <div className='message' style={mood ? { color: "green" }: { color: "red" }}>
            <p>{message}</p>
        </div>
    )
}

export default Message