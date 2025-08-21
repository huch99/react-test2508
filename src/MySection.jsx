import React, { useState } from 'react';

const MySection = () => {
    const [isOnInfo, setIsOnInfo] = useState(true);
    return (
        <div style={{ width: 400, background: '#fff', borderRadius: 16, boxShadow: '0 2px 8px #eee', padding: 24 }}>
            <div style={{ display: 'flex', marginBottom: 16 }}>
                <div
                    style={{ flex: 1, cursor: 'pointer', background: isOnInfo ? '#eee' : '#fff', textAlign: 'center', padding: 8, borderRadius: 8 }}
                    onClick={() => setIsOnInfo(true)}
                >공지사항</div>
                <div
                    style={{ flex: 1, cursor: 'pointer', background: !isOnInfo ? '#eee' : '#fff', textAlign: 'center', padding: 8, borderRadius: 8 }}
                    onClick={() => setIsOnInfo(false)}
                >갤러리</div>
            </div>
            {isOnInfo ? (
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>공지사항 - 1</li>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>공지사항 - 2</li>
                    <li style={{ padding: '8px 0', borderBottom: '1px solid #eee' }}>공지사항 - 3</li>
                </ul>
            ) : (
                <div style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>갤러리 준비중...</div>
            )}
        </div>
    );
};

export default MySection;