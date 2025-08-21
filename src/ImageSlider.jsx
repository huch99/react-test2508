import tsirts from './assets/tsirts.jpg';
import bluejeans from './assets/bluejeans.jpg';
import gadigun from './assets/gadigun.jpg';
import { useEffect, useRef, useState } from 'react';

const IMAGE_WIDTH = 400;
const SLIDER_WIDTH = IMAGE_WIDTH * 3; // 3장 노출

// [1,2,3,1,2,3,1,2,3] 순서로 렌더링
const images = [tsirts, bluejeans, gadigun];
const loopList = [tsirts, bluejeans, gadigun, tsirts, bluejeans, gadigun, tsirts, bluejeans, gadigun];

const INIT_INDEX = 3; // 4번째(인덱스 3)가 맨 앞에 오도록
const LAST_INDEX = 6; // 마지막 3장(인덱스 6~8)

const ImageSlider = () => {
    const [current, setCurrent] = useState(INIT_INDEX);
    const [isSliding, setIsSliding] = useState(false);
    const slideRef = useRef(null);
    const timerRef = useRef(null);

    // 슬라이드 실행
    const slideNext = () => {
        if (isSliding) return;
        setIsSliding(true);
        setCurrent(prev => prev + 1);
    };

    // 트랜지션 종료 후, 무한 루프 효과를 위해 위치 리셋
    const handleTransitionEnd = () => {
        if (current === LAST_INDEX) {
            // 마지막 3장까지 도달하면 트랜지션 없이 처음 위치로 리셋
            if (slideRef.current) {
                slideRef.current.style.transition = 'none';
                slideRef.current.style.transform = `translateX(-${IMAGE_WIDTH * INIT_INDEX}px)`;
            }
            setCurrent(INIT_INDEX);
            setTimeout(() => setIsSliding(false), 20);
        } else {
            setIsSliding(false);
        }
    };

    // 자동 슬라이드 타이머
    useEffect(() => {
        if (isSliding) return;
        timerRef.current = setInterval(() => {
            slideNext();
        }, 3000);
        return () => clearInterval(timerRef.current);
    }, [isSliding]);

    // 트랜지션 및 위치 이동 관리
    useEffect(() => {
        if (slideRef.current) {
            if (isSliding) {
                slideRef.current.style.transition = 'transform 1s cubic-bezier(0.4,0,0.2,1)';
            } else {
                slideRef.current.style.transition = 'none';
            }
            slideRef.current.style.transform = `translateX(-${IMAGE_WIDTH * current}px)`;
        }
    }, [current, isSliding]);

    // transitionend 이벤트 등록
    useEffect(() => {
        const node = slideRef.current;
        if (!node) return;
        node.addEventListener('transitionend', handleTransitionEnd);
        return () => node.removeEventListener('transitionend', handleTransitionEnd);
    }, [current]);

    // 최초 렌더링 시 transform 위치 초기화
    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transition = 'none';
            slideRef.current.style.transform = `translateX(-${IMAGE_WIDTH * INIT_INDEX}px)`;
        }
    }, []);

    return (
        <div style={{ width: SLIDER_WIDTH, height: 300, overflow: 'hidden', margin: '0 auto', borderRadius: 16, boxShadow: '0 2px 8px #eee', background: '#fff', position: 'relative' }}>
            <div
                ref={slideRef}
                style={{ display: 'flex', width: IMAGE_WIDTH * loopList.length }}
            >
                {loopList.map((src, idx) => (
                    <div
                        key={idx}
                        style={{ width: IMAGE_WIDTH, height: 300, flexShrink: 0, position: 'relative' }}
                    >
                        <img
                            className="slider-img"
                            src={src}
                            style={{ width: IMAGE_WIDTH, height: 300, objectFit: 'cover', borderRadius: 16 }}
                            alt={`slide-${idx}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;