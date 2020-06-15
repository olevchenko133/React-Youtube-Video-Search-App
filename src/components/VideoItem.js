import React from 'react';
import "./VideoItem.css"

const VideoItem = ({ video, onVideoSelect }) => {

    return (
        <div className="item video-item" onClick={() => onVideoSelect(video)}>

            {/* <iframe width="100%" height="400px" key={video.id.videoId} src={`https://www.youtube.com/embed/${video.id.videoId}`} allowfullscreen /> */}
            {/* <h1>Item</h1> */}

            <img className="ui image" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <h4 className="header">{video.snippet.title}</h4>
            </div>

        </div>
    )

}

export default VideoItem
