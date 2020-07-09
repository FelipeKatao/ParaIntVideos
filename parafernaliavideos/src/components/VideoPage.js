import React, { useState } from 'react'
import MiniThumbs from "./MiniThumbs.js"
import '../css/Player.css'

function VideoPage(){

    return(
        <>
        <div className="VideosCon">
            <h1>Resultados</h1>
            <MiniThumbs titulo="Titulo do Video" Descricao="Descrição do video se encontra aqui" uploadDate="04/05/2020"></MiniThumbs>
            <MiniThumbs titulo="Musica legal" Descricao="Descrição do video se encontra aqui" uploadDate="04/05/2020"></MiniThumbs>
            <MiniThumbs titulo="Documentario completo" Descricao="Descrição do video se encontra aqui" uploadDate="04/05/2020"></MiniThumbs>
        </div>
        <div className="VideoPlayer">
            Videos
        </div>
        </>
    )
}

export default VideoPage