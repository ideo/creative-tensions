import React from 'react'

const EmbeddedVideo = (props) => {
    return (
                <div className="embedded-video">
                    <iframe width="560" height="315" src={props.src} width="1280" height="720" frameBorder="0"
                        allowFullScreen scrolling="no" />
                </div>
    )
}

export default EmbeddedVideo
