import React from 'react';

const MyFooter = () => {
    return (
        <>
            <div className='rubik-bubbles-regular'
                style={{
                    width: '200px',
                    height: '100%',
                    fontSize: '30px',
                }}
            >
                <span>JUST</span> <br />
                <span>Shopping</span>
            </div>
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
        </>
    );
};

export default MyFooter;