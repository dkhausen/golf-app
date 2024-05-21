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
import FOl0524 from '../videos/05:24FO.MOV'

const ReactVideoGalleryMain = () => {
    const [model, setModel] = useState(false);
    let data = [
        {
            id: 1,
            poster: '',
            videoUri: dtl1222,
            videoUri2: FOl1222,
            header: '12/2022',
            description: 'test'
        },
        {
            id: 2,
            poster: '',
            videoUri: dtl0524,
            videoUri2: FOl0524,
            header: '05/2024',
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
                                <div className='header2'>{item.header}</div>
                                    <div className="video-fade">
                                        <div className='video-containerMain'>
                                            <Video
                                                style={{width: '100%'}}
                                                controls={['Play', 'Seek', 'Volume']}
                                                playsInLine
                                                >
                                                    <source src={item.videoUri} type="video/mp4" />
                                            </Video>
                                        </div>
                                        <div className='video-containerMain'>
                                            <Video
                                                style={{width: '100%'}}
                                                controls={['Play', 'Seek', 'Volume']}
                                                playsInLine
                                                >
                                                    <source src={item.videoUri2} type="video/mp4" />
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