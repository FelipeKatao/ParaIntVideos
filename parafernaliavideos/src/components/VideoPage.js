import React, { useState,useEffect } from 'react'
import MiniThumbs from "./MiniThumbs.js"
import teste from '../js/ApiYoutube.js'
import '../css/Player.css'

function VideoPage(){
    const [videos,setVideo] = useState([
        {id:1 , titulo:"Titulo do Video",descri:"Descrição do video se encontra aqui",update:"04/05/2020",link:""},
        {id:2 , titulo:"Musica legal",descri:"Descrição do video se encontra aqui",update:"04/05/2020",link:""},
        {id:3 , titulo:"Documentario completo",descri:"Descrição do video se encontra aqui",update:"04/05/2020",link:""}]
        )
    useEffect(() =>{
        console.log("funciona?")
        teste.testeGlobal=true
    },[])
    function HandleVideos(){
        setVideo([...videos,{id:Math.random(),titulo:"new video",descri:"novo video no canal",update:"29/06/2020"}])
    }

    return(
        <>
        <div className="VideosCon" id="displayData">
            <h1>Resultados</h1>
            {
                videos.map(repo => 
                    <MiniThumbs key={repo.id} titulo={repo.titulo} Descricao={repo.descri} uploadDate={repo.update}></MiniThumbs>
                    )
            }
        </div>
        <div className="VideoPlayer">
        <iframe width="660vh" height="440" src="https://www.youtube.com/embed/JRaS-U8bOS8">
        </iframe>
        </div>
        </>
    )
}

export default VideoPage