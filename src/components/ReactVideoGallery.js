import React, { useRef } from 'react';
import { useState, createRef } from 'react';

//video player
import {DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import './react-video-gallery.css'

import img1 from '../videos/img1.jpg'
import video1 from '../videos/video1.mp4'
import img2 from '../videos/img2.jpg'
import video2 from '../videos/video2.mp4'

const ReactVideoGallery = () => {
    const [model, setModel] = useState(false);
    let data = [
        {
            id: 1,
            id2: 2,
            poster: img1,
            poster2: img2,
            videoUri: video1,
            videoUri2: video2,
            description: 'test'
        },
        {
            id: 3,
            id2: 4,
            poster: img1,
            poster2: img2,
            videoUri: video1,
            videoUri2: video2,
            description: 'test'
        }
    ]

    return (
        <>
            
            <div className="gallery">
                {data.map((item,index)=>{
                    let divRef = createRef(null);
                    const openModel = () => {
                        divRef.current.classList.add('model');
                        divRef.current.classList.remove('video');
                        setModel(true);
                    }
                    const closeModel = () => {
                        divRef.current.classList.remove('video');
                        divRef.current.classList.add('model');
                        setModel(false);
                    }
                    return(
                        <div className = 'it-container'>
                            <div className='header'>
                                <p>{item.description}</p>
                            </div>
                            <div className = 'videoflex'>
                                <div className='video' key={index}>
                                    <div className="video-container">
                                        <Video
                                            style={{width: '100%'}}
                                            autoplay={model}
                                            controls={['Play', 'Seek', 'Volume']}
                                            poster={item.poster}
                                            playsInLine
                                            >
                                                <source src={item.videoUri} type="video/mp4" />
                                        </Video>
                                    </div>
                                </div>
                                <div className='video' key={index}>
                                    <div className="video-container">
                                        <Video
                                            style={{width: '100%'}}
                                            autoplay={model}
                                            controls={['Play', 'Seek', 'Volume']}
                                            poster={item.poster2}
                                            >
                                                <source src={item.videoUri2} type="video/mp4" />
                                        </Video>
                                    </div>
                                </div>
                            </div>
                            <div className='description'>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    );
};

export default ReactVideoGallery;