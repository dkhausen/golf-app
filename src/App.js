import React from 'react';
import ReactVideoGalleryIntro from './components/ReactVideoGalleryIntro';
import ReactVideoGalleryMain from './components/ReactVideoGalleryMain';

function App() {
  return (
    <>
    <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
}}>
    <h1>test</h1>
    <ReactVideoGalleryIntro/>
    <ReactVideoGalleryMain/>
    </div>
    </>
  );
}

export default App;
