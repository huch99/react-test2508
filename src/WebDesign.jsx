import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import MySection from './MySection';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

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


    return (
        <Container>
            <Header>
                <MyHeader />
            </Header>

            <ImageSlide>
                <ImageSlider />
            </ImageSlide>

            <Section>
                <MySection />
            </Section>

            <Footer>
                <MyFooter />
            </Footer>
        </Container>
    );
};

export default WebDesign;