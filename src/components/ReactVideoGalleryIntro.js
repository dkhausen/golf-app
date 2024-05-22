import React, { useRef } from 'react';
import { useState, createRef } from 'react';
import { Fade } from "react-awesome-reveal";

//video player
import {DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import './react-video-gallery.css'


import dtl1222 from '../videos/12:22DTL.mp4'
import FOl1222 from '../videos/12:22FO.mp4'
import dtl0524 from '../videos/05:24DTL.mov'
import FOl0524 from '../videos/05:24FO.mov'
import poster1212 from '../videos/12:22Poster.png'
import posterFO1212 from '../videos/12:22PosterFO.png'
import poster0524 from '../videos/05:24Poster.png'
import posterFO0524 from '../videos/05:24PosterFO.png'

const ReactVideoGalleryMain = () => {
    const [model, setModel] = useState(false);
    let data = [
        {
            id: 1,
            downTheLinePoster: poster1212,
            faceOnPoster: posterFO1212,
            videoUri: dtl1222,
            videoUri2: FOl1222,
            header: '12/2022',
            description: 'The first swing posted to the Milo Lines Academy forum for online review and feedback.'
        },
        {
            id: 2,
            downTheLinePoster: poster0524,
            faceOnPoster: posterFO0524,
            videoUri: dtl0524,
            videoUri2: FOl0524,
            header: '05/2024',
            description: 'The latest iron swing after a few years of bi-weekly swing reviews, lessons, and video content.'
        },
    ]


    return (
        <>
        <div>
            
            <div className="gallery">
                {data.map((item,index)=>{
                    return(
                    <Fade>
                            <div className="content-card" key={index}>
                                <div className='header'>{item.header}</div>
                                    <div className="multi-video-container">
                                        <div className='video-container'>
                                            <Video
                                                style={{width: '100%'}}
                                                controls={['Play', 'Seek', 'Volume']}
                                                poster={item.downTheLinePoster}
                                                playsInLine
                                                >
                                                    <source src={item.videoUri} type="video/mp4" />
                                            </Video>
                                        </div>
                                        <div className='video-container'>
                                            <Video
                                                style={{width: '100%'}}
                                                controls={['Play', 'Seek', 'Volume']}
                                                poster={item.faceOnPoster}
                                                playsInLine
                                                >
                                                    <source src={item.videoUri2} type="video/mp4" />
                                            </Video>
                                        
                
                                        </div>
                                    
                                </div>
                                <div className='description2'>{item.description}</div>
                            </div>
                           
                            
                    </Fade>
                    )
                })}
            </div>
            </div>
        </>
    );
};

export default ReactVideoGalleryMain;