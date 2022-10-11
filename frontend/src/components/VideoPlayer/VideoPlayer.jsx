import React from 'react';


const VideoPlayer = (props) => {

let jssrc = 'https://www.youtube.com/watch?v=jc8MENSC-l8'

    return ( 
        <div>
            <h3>WELCOME</h3>
            <iframe id='ytplayer' type='text/html' width='500' height='360'
            src={jssrc}
            frameborder='0'
            ></iframe>
        </div>
     );
}
 
export default VideoPlayer;