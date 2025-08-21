import React from 'react';
import './App.css';
import MyHeader from './MyHeader';
import ImageSlider from './ImageSlider';
import MySection from './MySection';
import MyFooter from './MyFooter';

function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ width: '100%', boxShadow: '0 2px 8px #eee', zIndex: 10 }}>
        <MyHeader />
      </header>
      <main style={{ flex: 1, width: '100%', background: '#fafbfc', padding: '40px 0' }}>
        <ImageSlider />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <MySection />
        </div>
      </main>
      <footer style={{ width: '100%', background: '#f5f5f5', borderTop: '1px solid #eee', padding: '20px 0' }}>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
