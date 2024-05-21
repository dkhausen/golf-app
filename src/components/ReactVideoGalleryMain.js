import React, { useEffect, useState, useMemo } from 'react';
import { Fade } from 'react-awesome-reveal';

// Video player
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import './react-video-gallery.css'

import img1 from '../videos/img1.jpg'
import video1 from '../videos/video1.mp4'
import img2 from '../videos/img2.jpg'
import video2 from '../videos/video2.mp4'

const ReactVideoGalleryMain = () => {
    // Initialize the data array using useMemo
    const data = useMemo(() => [
        {
            id: 1,
            poster: img1,
            videoUri: video1,
            description: 'tasdfasdfasdfasfdasdfasdfasdfasdfasdfasdfasfdasdfasdfasdfasest',
            date: '10/2023'
        },
        {
            id: 2,
            poster: img2,
            videoUri: video1,
            description: 'test',
            date: '11/2023'
        },
        {
            id: 3,
            poster: img2,
            videoUri: video1,
            description: 'test',
            date: '12/2023'
        },
        {
            id: 4,
            poster: img2,
            videoUri: video1,
            description: 'test',
            date: '01/2024 '
        },
    ], []);

    // Store references to video elements
    const [videoElements, setVideoElements] = useState([]);

    useEffect(() => {
        // Add video elements to the state once after the component mounts
        const newVideoElements = [];
        data.forEach((item, index) => {
            newVideoElements[index] = React.createRef();
        });
        setVideoElements(newVideoElements);
    }, [data, setVideoElements]); // Include data and setVideoElements as dependencies

    // Function to scroll to a specific item
    const scrollToItem = (index) => {
        const element = videoElements[index].current;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <Fade>
            <div className="timeline-button-container">
                {/* Render list of scroll buttons */}
                {data.map((item, index) => (
                    <div className="button-class">
                        <button 
                        className="timeline-button"
                        key={index} 
                        onClick={() => scrollToItem(index)}
                    >
                    </button>
                    {item.date}
                    </div>
                    
                ))}
            </div>
            
                <div className="gallery2">
                    {data.map((item, index) => (
                        <div 
                            className="video-container2" 
                            key={index}
                            ref={videoElements[index]}
                        >
                            <div className='header2'>test</div>
                            <div className="video-fade">
                                <div className='video-container'>
                                    <Video
                                        style={{ width: '100%' }}
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
                    ))}
                </div>
            
            </Fade>
        </>
    );
};

export default ReactVideoGalleryMain;
