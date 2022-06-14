import React from 'react'
import YouTube from 'react-youtube'

const Video = ({data}) => {

    return (
        <div className=''>
            {
                data ?  <YouTube
                videoId={data.key}              
                id={data.key}
                className={'relative pb-[56.25%] pt-[30px] h-0 overflow-hidden'}
                iframeClassName={'absolute top-0 left-0 w-full h-full'}
            />: <p>no video</p> 
            }
           
        </div>
    )
}
export default Video;
