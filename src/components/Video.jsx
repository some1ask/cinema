import React from 'react'
import YouTube from 'react-youtube'

const Video = ({data}) => {
    const opts = {
        height: '460',
        width: '820',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }
    return (
        <div className='flex'>
            <YouTube
                videoId={data.key}              
                id={data.key}
                opts={opts}
                iframeClassName={''}
            />
        </div>
    )
}
export default Video;
