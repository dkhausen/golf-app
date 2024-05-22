import React, { useEffect, useState, useMemo, createRef } from 'react';
import { Fade } from 'react-awesome-reveal';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';

import './react-video-gallery.css';

import dtl0524 from '../videos/05:24DTL.mov';
import FOl0524 from '../videos/05:24FO.mov';
import poster0524 from '../videos/05:24Poster.png';
import posterFO0524 from '../videos/05:24PosterFO.png';
import poster0424 from '../videos/04:24Poster.png';
import posterFO0424 from '../videos/04:24PosterFO.png';
import poster0324 from '../videos/03:24Poster.png';
import posterFO0324 from '../videos/03:24PosterFO.png';
import poster0224 from '../videos/02:24Poster.png';
import posterFO0224 from '../videos/02:24PosterFO.png';
import poster0124 from '../videos/01:24Poster.png';
import posterFO0124 from '../videos/01:24PosterFO.png';
import poster1223 from '../videos/12:23Poster.png';
import posterFO1223 from '../videos/12:23PosterFO.png';
import dtl0424 from '../videos/04:24DTL.mov';
import FOl0424 from '../videos/04:24FO.mov';
import dtl0324 from '../videos/03:24DTL.mov';
import FOl0324 from '../videos/03:24FO.mov';
import dtl0224 from '../videos/02:24DTL.mov';
import FOl0224 from '../videos/02:24FO.mov';
import dtl0124 from '../videos/01:24DTL.mov';
import FOl0124 from '../videos/01:24FO.mov';
import dtl1223 from '../videos/12:23DTL.mov';
import FOl1223 from '../videos/12:23FO.mov';
import feedback0424 from '../videos/04:24Feedback.mov';
import feedbackPoster0424 from '../videos/04:24FeedbackPoster.png';

const ReactVideoGalleryMain = () => {
    const galleryRef = createRef(null);
    const data = useMemo(() => [
        {
            id: 1,
            downTheLinePoster: poster0524,
            faceOnPoster: posterFO0524,
            downTheLine: dtl0524,
            faceOn: FOl0524,
            description: 'The latest iron swing after a few years of bi-weekly swing reviews, lessons, and video content.',
            description2: 'The student should continue to initiate the downswing sooner, turning into the club as its still making its way up. There is still a bit of pull-down from the right arm, leading to a bit of a chicken wing at impact.',
            date: '05/2024',
            type: 'Iron'
        },
        {
            id: 2,
            downTheLinePoster: poster0424,
            faceOnPoster: posterFO0424,
            downTheLine: dtl0424,
            faceOn: FOl0424,
            description: 'An iron swing from April 2024. The body movement looks good, however, there is a lack of release in the swing.',
            description2: 'The student has created good structure in the swing utilizing Foundation 1 and Foundation 2 to keep the arms and wrists locked up while turning through the shot. He can start to release some of the tension in his arms and wrists, and sling the club through the ball.',
            date: '04/2024',
            type: 'Iron'
        },
        {
            id: 3,
            downTheLinePoster: feedbackPoster0424,
            faceOnPoster: '',
            downTheLine: feedback0424,
            faceOn: '',
            description: 'A swing review from Milo.',
            description2: '-',
            date: '04/2024',
            type: 'Review'
        },
        {
            id: 4,
            downTheLinePoster: poster0324,
            faceOnPoster: posterFO0324,
            downTheLine: dtl0324,
            faceOn: FOl0324,
            description: '',
            description2: '-',
            date: '03/2024',
            type: 'Iron'
        },
        {
            id: 5,
            downTheLinePoster: poster0224,
            faceOnPoster: posterFO0224,
            downTheLine: dtl0224,
            faceOn: FOl0224,
            description: 'A swing where the student is trying to release the club outwards across the line as he has struggled with maintaining too much structure through the strike.',
            description2: 'The student is powering the swing with his arms too much, causing a bit of a tilt and slide motion and leading to inconsistencies in the strike and lack of distance.',
            date: '02/2024',
            type: 'Iron'
        },
        {
            id: 6,
            downTheLinePoster: poster0124,
            faceOnPoster: posterFO0124,
            downTheLine: dtl0124,
            faceOn: FOl0124,
            description: 'The latest iron swing after a few years of bi-weekly swing reviews, lessons, and video content.',
            description2: '',
            date: '01/2024',
            type: 'Iron'
        },
        {
            id: 7,
            downTheLinePoster: poster1223,
            faceOnPoster: posterFO1223,
            downTheLine: dtl1223,
            faceOn: FOl1223,
            description: 'The latest iron swing after a few years of bi-weekly swing reviews, lessons, and video content.',
            description2: '',
            date: '12/2023',
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

    const handleScroll = (direction) => {
        const container = document.querySelector('.timeline-buttons');
        const scrollAmount = container.clientWidth;

        if (direction === 'left') {
            const newScroll = Math.max(0, container.scrollLeft - scrollAmount);
            container.scrollTo({ left: newScroll, behavior: 'smooth' });
        } else {
            const newScroll = Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + scrollAmount);
            container.scrollTo({ left: newScroll, behavior: 'smooth' });
        }
    };

    const scrollToItem = (index) => {
        const element = videoElements[index].current;
        if (element) {
            const offset = 85; // Adjust the offset as needed
            window.scrollTo({
                top: element.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    };

    const scrollToTop = () => {
        if (galleryRef.current) {
            galleryRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    
    


    return (
        <>
            <div classname='gallery-class' ref={galleryRef}>
            
                <div className='header2'>Clip Selector</div>
                <div className='timeline-buttons-arrows'>
                    <ArrowBackIosIcon className="scroll-arrow" onClick={() => handleScroll('left')} style={{ color: 'white' }} />
                    <div className = "timeline-buttons">
                        {data.map((item, index) => (
                        <div
                            className={`button-class ${item.type === 'Review' ? 'review-button' : ''}`}
                            key={index}
                            onClick={() => scrollToItem(index)}
                        >
                            <CalendarMonthIcon className={` ${item.type === 'Review' ? 'review-icon' : ''}`} />
                            <div className={`date-style ${item.type === 'Review' ? 'review-date' : ''}`}>{item.date}</div>
                            <div className={`type-style ${item.type === 'Review' ? 'review-type' : ''}`}>{item.type}</div>
                        </div>
                    ))}
                    </div>
                    <ArrowForwardIosIcon className="scroll-arrow" onClick={() => handleScroll('right')} style={{ color: 'white' }} />
                </div>
           
                <div className="gallery2">
                    {data.map((item, index) => (
                        <div className="content-card" key={index} ref={videoElements[index]}>
                            <div className='header'>{item.date}</div>
                            <div className='header'>{item.type}</div>
                            <div className="multi-video-container">
                                <div className='video-container'>
                                    <Video
                                        style={{ width: '100%' }}
                                        controls={['Play', 'Seek', 'Volume']}
                                        poster={item.downTheLinePoster}
                                        playsInLine
                                    >
                                        <source src={item.downTheLine} type="video/mp4" />
                                    </Video>
                                </div>
                                    {item.faceOn && (
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
                                )}
                            </div>
                            <div className='description2'>
                                <div>{item.description}</div>
                                <div className='line-items-header'>Feedback from coaches:</div>
                                <div className='line-items'>{item.description2}</div>
                            </div>
                            <div className="scroll-to-top" onClick={scrollToTop}>
                                <KeyboardArrowUpIcon />
                                Scroll to top
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
};

export default ReactVideoGalleryMain;
