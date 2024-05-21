import React, { useEffect, useState, useMemo } from 'react';
import { Fade } from 'react-awesome-reveal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'; // Import scroll-to-top icon

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import './react-video-gallery.css'

import dtl1222 from '../videos/12:22DTL.mp4'
import FOl1222 from '../videos/12:22FO.mp4'
import dtl0524 from '../videos/05:24DTL.mov'
import FOl0524 from '../videos/05:24FO.MOV'
import dtl0424 from '../videos/04:24DTL.mov'
import FOl0424 from '../videos/04:24FO.mov'
import dtl0324 from '../videos/03:24DTL.MOV'
import FOl0324 from '../videos/03:24FO.MOV'
import dtl0224 from '../videos/02:24DTL.mov'
import FOl0224 from '../videos/02:24FO.mov'
import dtl0124 from '../videos/01:24DTL.MOV'
import FOl0124 from '../videos/01:24FO.MOV'

const ReactVideoGalleryMain = () => {
    const data = useMemo(() => [
        {
            id: 1,
            downTheLinePoster: '',
            faceOnPoster: '',
            downTheLine: dtl0524,
            faceOn: FOl0524,
            description: 'test',
            date: '05/2024',
            type: 'Iron'
        },
        {
            id: 2,
            downTheLinePoster: '',
            faceOnPoster: '',
            downTheLine: dtl0424,
            faceOn: FOl0424,
            description: 'test',
            date: '04/2024',
            type: 'Iron'
        },
        {
            id: 3,
            downTheLinePoster: '',
            faceOnPoster: '',
            downTheLine: dtl0324,
            faceOn: FOl0324,
            description: 'test',
            date: '03/2024',
            type: 'Iron'
        },
        {
            id: 4,
            downTheLinePoster: '',
            faceOnPoster: '',
            downTheLine: dtl0224,
            faceOn: FOl0224,
            description: 'test',
            date: '02/2024',
            type: 'Iron'
        },
        {
            id: 5,
            downTheLinePoster: '',
            faceOnPoster: '',
            downTheLine: dtl0124,
            faceOn: FOl0124,
            description: 'test',
            date: '01/2024',
            type: 'Iron'
        },
        
    ], []);

    const [videoElements, setVideoElements] = useState([]);

    useEffect(() => {
        const newVideoElements = [];
        data.forEach((item, index) => {
            newVideoElements[index] = React.createRef();
        });
        setVideoElements(newVideoElements);
    }, [data, setVideoElements]);

    const scrollToItem = (index) => {
        const element = videoElements[index].current;
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <div className='timeline-flex'>
                Select a swing based on date
                <div className="timeline-button-container">
                    {data.map((item, index) => (
                        <div className="button-class" key={index} onClick={() => scrollToItem(index)}>
                            <CalendarMonthIcon className="timeline-button" />
                            <div className='date-style'>{item.date}</div>
                            <div className='type-style'>{item.type}</div>
                        </div>
                    ))}
                </div>
            </div>
            <Fade>
                <div className="gallery2">
                    {data.map((item, index) => (
                        <div className="video-container2" key={index} ref={videoElements[index]}>
                            <div className='header2'>{item.date}</div>
                            <div className="video-fade">
                                <div className='video-container'>
                                    <Video
                                        style={{ width: '100%' }}
                                        controls={['Play', 'Seek', 'Volume']}
                                        playsInLine
                                    >
                                        <source src={item.downTheLine} type="video/mp4" />
                                    </Video>
                                </div>
                                <div className='video-container'>
                                    <Video
                                        style={{ width: '100%' }}
                                        controls={['Play', 'Seek', 'Volume']}
                                        poster={item.faceOnPoster}
                                        playsInLine
                                    >
                                        <source src={item.faceOn} type="video/mp4" />
                                    </Video>
                                </div>
                            </div>
                            <div className='description2'><p>{item.description}</p></div>
                            <div className="scroll-to-top" onClick={scrollToTop}>
                <KeyboardArrowUpIcon />
                Scroll to top
            </div>
                        </div>
                    ))}
                </div>
            </Fade>
            {/* Scroll to top button */}
        </>
    );
};

export default ReactVideoGalleryMain;
