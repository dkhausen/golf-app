import React from 'react';
import ReactVideoGalleryIntro from './components/ReactVideoGalleryIntro';
import ReactVideoGalleryMain from './components/ReactVideoGalleryMain';
import { Fade } from 'react-awesome-reveal';


function App() {
  return (
    <>
    <div className="app-background-style">
  
    <Fade>
    <div className='intro-style'>
    <div className='header4'>Before and After</div>
    <ReactVideoGalleryIntro/>
    </div>
    </Fade>
      <Fade>
      <div className='main-style'>
          <div className='header3'>The Process</div>
          <ReactVideoGalleryMain/>
      </div>
      </Fade>
    </div>
    </>
  );
}

export default App;
