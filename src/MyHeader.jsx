import React from 'react';

const MyHeader = () => {
    return (
        <>
            <div className='rubik-bubbles-regular'
                style={{
                    width: '200px',
                    height: '100%',
                    textAlign: 'center',
                    fontSize: '30px',
                    padding: 0,
                    boxShadow: '0 0 5px 2px #ccc',
                    borderRadius: '20px'
                }}
            >
                <span className="red">J</span>
                <span className="yellow">U</span>
                <span className="blue">S</span>
                <span className="purple">T</span> <br />
                <span>Shopping</span>
            </div>

            <div
                style={{
                    width: 'calc(100% - 200px)',
                    height: '100%',
                    padding: '25px'
                }}
            >
                <ul
                    style={{
                        listStyleType: 'none',
                        display: 'flex',
                        flexDirection: 'row',
                        margin: '0 0 0 325px'
                    }}
                >
                    <li className="topMenu"
                    >탑
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
            </div>
        </>
    );
};

export default MyHeader;