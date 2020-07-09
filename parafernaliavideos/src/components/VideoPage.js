import React, { useState } from 'react'
import MiniThumbs from "./MiniThumbs.js"
import '../css/Player.css'

function VideoPage(){

    return(
        <>
        <div className="VideosCon">
            <h1>Resultados</h1>
            <MiniThumbs></MiniThumbs>
        </div>
        <div className="VideoPlayer">
            Videos
        </div>
        </>
    )
}

export default VideoPage