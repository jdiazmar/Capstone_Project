import React from 'react';
import ReactPlayer from 'react-player/youtube';


const VideoPlayer = (props) => {



    return ( 
        <div>
            <h3>WELCOME!</h3>
            <ReactPlayer url='https://www.youtube.com/watch?v=jc8MENSC-l8' />
        </div>

    );
}
 
export default VideoPlayer;