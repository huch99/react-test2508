import React, { useState } from 'react';

const MySection = () => {
    const [isOnInfo, setIsOnInfo] = useState(true);
    const [isOnGal, setIsOnGal] = useState(false);
    return (
        <>
            <div className="sectionBox">
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        width: '100%',
                        height: '30px',
                        boxSizing: 'border-box'
                    }}
                >
                    <div
                        style={{
                            width: '50%',
                            cursor: 'pointer',
                            backgroundColor: isOnInfo ? '#ddd' : 'white'
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOnInfo(true);
                            setIsOnGal(false);
                        }}
                    >공지사항</div>
                    <div
                        style={{
                            width: '50%',
                            cursor: 'pointer',
                            backgroundColor: isOnGal ? '#ddd' : 'white'
                        }}
                        onClick={(e) => {
                            e.preventDefault();
                            setIsOnInfo(false);
                            setIsOnGal(true);
                        }}
                    >갤러리</div>


                </div>
                <div
                    style={{
                        width: '100%',
                        height: 'calc(100% - 30px)',
                        display: isOnInfo ? 'block' : 'none',
                        backgroundColor: isOnInfo ? '#ddd' : 'white'
                    }}
                >
                    <ul
                        style={{
                            margin: 0,
                            listStyleType: 'none',
                            textAlign: 'left'
                        }}
                    >
                        <li className='infoList'
                            onClick={(e) => {
                                e.preventDefault();
                                const target = e.target.children[0];
                                target.style.display = 'block';
                            }}
                        >공지사항 - 1
                            <div
                                style={{
                                    display: 'none',
                                    width: '500px',
                                    height: '500px',
                                    backgroundColor: '#ddd',
                                    textAlign: 'center',
                                    position: 'absolute',
                                    top: 'calc(50% - 250px)',
                                    left: 'calc(50% - 250px)',
                                    border: '2px solid #000'
                                }}
                            >
                                <h3>공지사항 - 1</h3>
                                <p>공지사항 1 내용</p>
                                <button
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px'
                                    }}

                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.target.parentNode.style.display = 'none';
                                    }}
                                >X</button>
                            </div>
                        </li>
                        <li className='infoList'
                            onClick={(e) => {
                                e.preventDefault();
                                const target = e.target.children[0];
                                target.style.display = 'block';
                            }}
                        >공지사항 - 2
                            <div
                                style={{
                                    display: 'none',
                                    width: '500px',
                                    height: '500px',
                                    backgroundColor: '#ddd',
                                    textAlign: 'center',
                                    position: 'absolute',
                                    top: 'calc(50% - 250px)',
                                    left: 'calc(50% - 250px)',
                                    border: '2px solid #000'
                                }}
                            >
                                <h3>공지사항 - 2</h3>
                                <p>공지사항 2 내용</p>
                                <button
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px'
                                    }}

                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.target.parentNode.style.display = 'none';
                                    }}
                                >X</button>
                            </div>
                        </li>
                        <li className='infoList'
                            onClick={(e) => {
                                e.preventDefault();
                                const target = e.target.children[0];
                                target.style.display = 'block';
                            }}
                        >공지사항 - 3
                            <div
                                style={{
                                    display: 'none',
                                    width: '500px',
                                    height: '500px',
                                    backgroundColor: '#ddd',
                                    textAlign: 'center',
                                    position: 'absolute',
                                    top: 'calc(50% - 250px)',
                                    left: 'calc(50% - 250px)',
                                    border: '2px solid #000'
                                }}
                            >
                                <h3>공지사항 - 3</h3>
                                <p>공지사항 3 내용</p>
                                <button
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px'
                                    }}

                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.target.parentNode.style.display = 'none';
                                    }}
                                >X</button>
                            </div>
                        </li>
                        <li className='infoList'
                            onClick={(e) => {
                                e.preventDefault();
                                const target = e.target.children[0];
                                target.style.display = 'block';
                            }}
                        >공지사항 - 4
                            <div
                                style={{
                                    display: 'none',
                                    width: '500px',
                                    height: '500px',
                                    backgroundColor: '#ddd',
                                    textAlign: 'center',
                                    position: 'absolute',
                                    top: 'calc(50% - 250px)',
                                    left: 'calc(50% - 250px)',
                                    border: '2px solid #000'
                                }}
                            >
                                <h3>공지사항 - 4</h3>
                                <p>공지사항 4 내용</p>
                                <button
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px'
                                    }}

                                    onClick={(e) => {
                                        e.preventDefault();
                                        e.target.parentNode.style.display = 'none';
                                    }}
                                >X</button>
                            </div>
                        </li>
                    </ul>
                </div>
                <div
                    style={{
                        width: '100%',
                        height: 'calc(100% - 30px)',
                        display: isOnGal ? 'block' : 'none',
                        backgroundColor: isOnGal ? '#ddd' : 'white'
                    }}
                >갤러리 내용</div>
            </div>
            <div className="sectionBox">베너</div>
            <div className="sectionBox">바로가기</div>
        </>
    );
};

export default MySection;