import React from 'react';

const MyFooter = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto', padding: '10px 0' }}>
            <div className='rubik-bubbles-regular' style={{ fontSize: 24 }}>
                JUST<br />Shopping
            </div>
            <div style={{ fontSize: 16, color: '#888' }}>© 2024 JUST Shopping. All rights reserved.</div>
            <div style={{ fontSize: 16 }}>
                <span style={{ marginRight: 10 }}>SNS</span>
                <span style={{ marginRight: 10 }}>Instagram</span>
                <span>Facebook</span>
            </div>
        </div>
    );
};

export default MyFooter;