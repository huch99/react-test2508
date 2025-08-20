    import tsirts from './assets/tsirts.jpg';
import bluejeans from './assets/bluejeans.jpg';
import gadigun from './assets/gadigun.jpg';
import { useEffect, useRef, useState } from 'react';
    
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

    export default ImageSlider;