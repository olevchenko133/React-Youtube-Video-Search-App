import React from 'react'

const VideoDetail = ({ video }) => {

    return (
        <div>



            {!video ? <p></p> :
                <div>
                    <div className="ui embed">
                        <iframe title="video player" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowfullscreen />
                    </div>
                    <h3> {video.snippet.title}</h3>
                    <p>{video.snippet.description}</p>
                </div>
            }
        </div>
    )

}

export default VideoDetail
