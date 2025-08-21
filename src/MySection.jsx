import React, { useState } from 'react';

const sectionStyle = {
    width: 400,
    background: '#fff',
    borderRadius: 16,
    boxShadow: '0 2px 8px #eee',
    padding: 24,
    margin: '0 10px',
    boxSizing: 'border-box'
};

const noticeList = [
    { title: '공지사항 - 1', content: '공지사항 1의 상세 내용입니다.' },
    { title: '공지사항 - 2', content: '공지사항 2의 상세 내용입니다.' },
    { title: '공지사항 - 3', content: '공지사항 3의 상세 내용입니다.' },
];

const MySection = () => {
    const [isOnInfo, setIsOnInfo] = useState(true);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleNoticeClick = (content) => {
        setModalContent(content);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setModalContent('');
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', boxSizing: 'border-box', width: '1200px', height: '200px', padding: 0 }}>
            {/* 왼쪽: 공지사항/갤러리 */}
            <div style={sectionStyle}>
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
                        {noticeList.map((notice, idx) => (
                            <li
                                key={idx}
                                style={{ padding: '8px 0', borderBottom: '1px solid #eee', cursor: 'pointer' }}
                                onClick={() => handleNoticeClick(notice.content)}
                            >{notice.title}</li>
                        ))}
                    </ul>
                ) : (
                    <div style={{ textAlign: 'center', color: '#888', padding: '40px 0' }}>갤러리 준비중...</div>
                )}
            </div>
            {/* 중간: 베너 */}
            <div style={sectionStyle}>
                <div style={{ textAlign: 'center', fontWeight: 600, fontSize: 20, marginBottom: 12 }}>베너</div>
                <div style={{ width: '100%', height: 120, background: '#f0f0f0', borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa', fontSize: 18 }}>
                    배너 이미지/광고 영역
                </div>
            </div>
            {/* 오른쪽: 바로가기 */}
            <div style={sectionStyle}>
                <div style={{ textAlign: 'center', fontWeight: 600, fontSize: 20, marginBottom: 12 }}>바로가기</div>
                <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 120 }}>
                    <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>메뉴1</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>메뉴2</a>
                    <a href="#" style={{ textDecoration: 'none', color: '#333', fontWeight: 500 }}>메뉴3</a>
                </div>
            </div>

            {/* 공지사항 모달 */}
            {modalOpen && (
                <div style={{
                    position: 'fixed', left: 0, top: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.3)', zIndex: 1000,
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <div style={{ background: '#fff', borderRadius: 16, padding: 32, minWidth: 320, minHeight: 120, boxShadow: '0 2px 16px #aaa', position: 'relative' }}>
                        <button onClick={closeModal} style={{ position: 'absolute', top: 12, right: 16, fontSize: 20, background: 'none', border: 'none', cursor: 'pointer' }}>×</button>
                        <div style={{ fontSize: 18, color: '#222', whiteSpace: 'pre-line' }}>{modalContent}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MySection;