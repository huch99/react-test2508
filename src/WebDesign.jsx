import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import tsirts from './assets/tsirts.jpg';
import bluejeans from './assets/bluejeans.jpg';
import gadigun from './assets/gadigun.jpg';

const Container = styled.div`
    width: 1200px;
    height: auto;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`;

const Header = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin: 5px auto;
    border: 1px solid #000;
`;

const ImageSlide = styled.div`
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    margin: 5px auto;
`;

const Section = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    margin: 5px auto;
`;

const Footer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: row;
    border: 1px solid #000;
    box-sizing: border-box;
    margin: 5px auto;
`;

const WebDesign = () => {
    const [isOnInfo, setIsOnInfo] = useState(true);
    const [isOnGal, setIsOnGal] = useState(false);

    const ImageSlider = () => {
        // const images = [
        //     '/tsirts.jpg',
        //     '/bluejeans.jpg',
        //     '/gadigun.jpg'
        // ]

        const images = [
            tsirts, bluejeans, gadigun
        ]

        const [imgList, setImgList] = useState([...images]);
        const slideRef = useRef(null);
        const transitionRef = useRef(null);

        const slideNext = () => {
            if (slideRef.current) {
                slideRef.current.style.transition = 'transform 1s ease-in-out';
                slideRef.current.style.transform = `translateX(-400px)`; // 한 칸 오른쪽
            }
        };

        const handleTransitionEnd = () => {
            // 슬라이드 끝나면 배열 재배열
            setImgList(prev => {
                const newList = [...prev];
                newList.push(newList.shift()); // 맨 앞 이미지를 맨 뒤로
                return newList;
            });
            // 위치 원상복구
            if (slideRef.current) {
                slideRef.current.style.transition = 'none';
                slideRef.current.style.transform = 'translateX(0)';
            }
        };

        useEffect(() => {
            // 일정 시간마다 슬라이드
            const interval = setInterval(() => {
                slideNext();
            }, 3000);

            // transitionend 이벤트 등록
            const node = slideRef.current;
            if (node) {
                node.addEventListener('transitionend', handleTransitionEnd);
            }

            return () => {
                clearInterval(interval);
                if (node) {
                    node.removeEventListener('transitionend', handleTransitionEnd);
                }
            };
        }, []);

        return (
            <div
                style={{
                    width: '1200px',
                    height: '300px',
                    overflow: 'hidden',
                    margin: '0 auto',
                }}
            >
                <div
                    ref={slideRef}
                    style={{
                        display: 'flex',
                        width: '1200px', // 3개 x 400px
                    }}
                >
                    {imgList.map((src, idx) => (
                        <div
                            key={idx}
                            style={{
                                width: '400px',
                                height: '300px',
                                flexShrink: 0,
                                position: 'relative'
                            }}

                            className='hoverBox'
                        >
                            <img
                                src={src}
                                style={{
                                    width: '400px',
                                    height: '300px',
                                    objectFit: 'cover',
                                }}
                                alt={`slide-${idx}`}
                            />

                            <div className='imgBox'>
                                바로가기
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    };


    return (
        <Container>
            <Header>
                <div
                    style={{
                        width: '200px',
                        height: '100%',
                        textAlign: 'center',
                        borderRight: '1px solid #000'
                    }}
                >LOGO</div>

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
            </Header>

            <ImageSlide>
                <ImageSlider></ImageSlider>
            </ImageSlide>

            <Section>
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
                                backgroundColor: isOnInfo ? 'grey' : 'white'
                            }}
                            onClick={() => {
                                setIsOnInfo(true);
                                setIsOnGal(false);
                            }}
                        >공지사항</div>
                        <div
                            style={{
                                width: '50%',
                                cursor: 'pointer',
                                backgroundColor: isOnGal ? 'grey' : 'white'
                            }}
                            onClick={() => {
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
                            backgroundColor: isOnInfo ? 'grey' : 'white'
                        }}
                    >공지사항 내용</div>
                    <div
                        style={{
                            width: '100%',
                            height: 'calc(100% - 30px)',
                            display: isOnGal ? 'block' : 'none',
                            backgroundColor: isOnGal ? 'grey' : 'white'
                        }}
                    >갤러리 내용</div>
                </div>
                <div className="sectionBox">베너</div>
                <div className="sectionBox">바로가기</div>
            </Section>

            <Footer>
                <div
                    style={{
                        width: '200px',
                        height: '100%',
                        borderRight: '1px solid #000'
                    }}
                >LOGO</div>
                <div
                    style={{
                        width: '800px',
                        height: '100%',
                        borderRight: '1px solid #000'
                    }}
                >카피라이트</div>
                <div
                    style={{
                        width: '200px',
                        height: '100%'
                    }}
                >SNS</div>
            </Footer>
        </Container>
    );
};

export default WebDesign;