// ChildComponent.js
import React from 'react';

function ChildComponent({ data }) {
    return (
        <div>
            <h1>Data Received in Child Component</h1>
            <ul>
                {data.map((user, index) => (
                    <li key={index}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ChildComponent;
