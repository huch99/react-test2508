import React from 'react';

const MyHeader = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', height: 80, background: '#fff', borderRadius: 16, margin: '20px auto', maxWidth: 1200, boxShadow: '0 2px 8px #eee' }}>
            <div className='rubik-bubbles-regular' style={{ width: 200, textAlign: 'center', fontSize: 30 }}>
                <span className="red">J</span>
                <span className="yellow">U</span>
                <span className="blue">S</span>
                <span className="purple">T</span> <br />
                <span>Shopping</span>
            </div>
            <nav style={{ flex: 1, paddingLeft: 40 }}>
                <ul style={{ listStyle: 'none', display: 'flex', gap: 40, margin: 0, padding: 0, height: 80, alignItems: 'center' }}>
                    <li className="topMenu">탑
                        <ul>
                            <li className="subMenu">블라우스</li>
                            <li className="subMenu">티</li>
                            <li className="subMenu">셔츠</li>
                            <li className="subMenu">니트</li>
                        </ul>
                    </li>
                    <li className="topMenu">아우터
                        <ul>
                            <li className="subMenu">자켓</li>
                            <li className="subMenu">코트</li>
                            <li className="subMenu">가디건</li>
                            <li className="subMenu">머플러</li>
                        </ul>
                    </li>
                    <li className="topMenu">팬츠
                        <ul>
                            <li className="subMenu">청바지</li>
                            <li className="subMenu">짧은바지</li>
                            <li className="subMenu">긴바지</li>
                            <li className="subMenu">레깅스</li>
                        </ul>
                    </li>
                    <li className="topMenu">악세서리
                        <ul>
                            <li className="subMenu">귀고리</li>
                            <li className="subMenu">목걸이</li>
                            <li className="subMenu">반지</li>
                            <li className="subMenu">팔찌</li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default MyHeader;