import React from 'react';
import ReactPlayer from 'react-player/youtube';

const WeeklyVideo = (props) => {
    return ( 
        <div>
            <h2>Week 1 of: I Wonder</h2>
            <ReactPlayer url='https://www.youtube.com/watch?v=0UX-rKpltrg' />
        </div>
     );
}
 
export default WeeklyVideo;