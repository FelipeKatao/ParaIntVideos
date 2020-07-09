import React, { useState } from 'react'
import MiniThumbs from "./MiniThumbs.js"
import '../css/Player.css'

function VideoPage(){

    return(
        <>
        <div className="VideosCon">
            <h1>Resultados</h1>
            <MiniThumbs linkImg="" titulo="Titulo do Video" Descricao="Descrição do video se encontra aqui" uploadDate="04/05/2020" linkVideo=""></MiniThumbs>
            <MiniThumbs linkImg="" titulo="Musica legal" Descricao="Descrição do video se encontra aqui" uploadDate="04/05/2020" linkVideo=""></MiniThumbs>
            <MiniThumbs linkImg="" titulo="Documentario completo" Descricao="Descrição do video se encontra aqui" uploadDate="04/05/2020" linkVideo=""></MiniThumbs>
        </div>
        <div className="VideoPlayer">
            
        </div>
        </>
    )
}

export default VideoPage