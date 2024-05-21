import React, { useRef } from 'react';
import { useState, createRef } from 'react';
import { Fade } from "react-awesome-reveal";

//video player
import {DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import './react-video-gallery.css'

import img1 from '../videos/img1.jpg'
import video1 from '../videos/video1.mp4'
import img2 from '../videos/img2.jpg'
import video2 from '../videos/video2.mp4'

const ReactVideoGalleryMain = () => {
    const [model, setModel] = useState(false);
    let data = [
        {
            id: 1,
            poster: img1,
            videoUri: video1,
            description: 'tasdfasdfasdfasfdasdfasdfasdfasdfasdfasdfasfdasdfasdfasdfasest'
        },
        {
            id: 2,
            poster: img2,
            videoUri: video1,
            description: 'test'
        },
    ]

   


    return (
        <>
        <div>
            
            <div className="gallery">
                {data.map((item,index)=>{
                    return(
                    <Fade>
                            <div className="video-container" key={index}>
                                <div className='header2'>test</div>
                                    <div className="video-fade">
                                        <div className='video-containerMain'>
                                            <Video
                                                style={{width: '100%'}}
                                                controls={['Play', 'Seek', 'Volume']}
                                                poster={item.poster}
                                                playsInLine
                                                >
                                                    <source src={item.videoUri} type="video/mp4" />
                                            </Video>
                                        </div>
                                        <div className='video-containerMain'>
                                            <Video
                                                style={{width: '100%'}}
                                                controls={['Play', 'Seek', 'Volume']}
                                                poster={item.poster}
                                                playsInLine
                                                >
                                                    <source src={item.videoUri} type="video/mp4" />
                                            </Video>
                                        
                
                                        </div>
                                    
                                </div>
                                <div className='description2'><p>{item.description}</p></div>
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