import React from 'react';

export default (channels) => {
    console.log('inside-->', channels)
    return (
        <ul>
            {channels.map(el => <li>{el.name}</li>)}
        </ul>
    );
};
