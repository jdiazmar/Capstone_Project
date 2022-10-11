import React from 'react';


const VideoPlayer = (props) => {



    return ( 
        <div>
            <h3>WELCOME</h3>
            <iframe className='iframe' width='500' height='360' frameborder='0'
            src={`https://www.youtube.com/embed/watch?v=jc8MENSC-l8`}
            ></iframe>
        </div>
     );
}
 
export default VideoPlayer;