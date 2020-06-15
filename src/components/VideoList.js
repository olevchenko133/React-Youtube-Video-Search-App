import React from 'react'
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(videos => {

        return <VideoItem video={videos} onVideoSelect={onVideoSelect} key={videos.id.videoId} />
    })

    return (
        <div className="ui relaxed divided list">

            {renderedList}

        </div>
    )

}


export default VideoList
