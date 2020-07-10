import React, { useState,useEffect } from 'react'
import MiniThumbs from "./MiniThumbs.js"
import '../css/Player.css'

function VideoPage(props){
    const [ tituloClip, setTitulo ] =useState(props.titulo)
    const [ Descricao, setDes ] = useState(props.Descricao)
    const [ uploadDate, setDate] = useState(props.uploadDate)
    const [ VidUrl,setUrl] = useState()
    const [ search, setSearch ] =useState(window.location.href.replace("http://localhost:3000/videoPage/",""))
    const [videos,setVideo] = useState([])
        useEffect( async()=>{ 
            setSearch(window.location.href)
            console.log(search)
            const response = await fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+search+'&type=video&videoCaption=closedCaption&key=AIzaSyCUz9yK2MHijtZam4oJ5H3Q2s5V9ehirng')
            const data = await response.json()
            for (let index = 0; index < data["items"].length; index++) { 
                setDes(data["items"][index]["snippet"]["description"])
                setDate(data["items"][index]["snippet"]["publishTime"])
                setTitulo(data["items"][index]["snippet"]["title"])
                setUrl(data["items"][index]["snippet"]["thumbnails"]["default"]["url"])
                HandleVideos()
            }
            console.log(videos)
        },[])
        useEffect(() =>{
            setSearch(window.location.href.replace("http://localhost:3000/videoPage/",""))
            fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+search+'&type=video&videoCaption=closedCaption&key=AIzaSyCUz9yK2MHijtZam4oJ5H3Q2s5V9ehirng')
            .then((resp) => resp.json())
            .then(function(data){
                console.log(data)
                for (let index = 0; index < data["items"].length; index++) {
                    setDes(data["items"][index]["snippet"]["description"])
                    setDate(data["items"][index]["snippet"]["publishTime"])
                    setTitulo(data["items"][index]["snippet"]["title"])
                    setUrl(data["items"][index]["snippet"]["thumbnails"]["default"]["url"])
                    HandleVideos()
                }
            })
           
        },[window.location.href])
    function HandleVideos(){
        setVideo([...videos,{id:Math.random(),titulo:tituloClip,descri:Descricao,update:uploadDate,imgLink:VidUrl}])
    }

    return(
        <>
        <div className="VideosCon" id="displayData">
            <h1>Resultados</h1>
            { 
                videos.map(repo => 
                <MiniThumbs key={repo.id} titulo={repo.titulo} Descricao={repo.descri} uploadDate={repo.update} thumb={repo.imgLink}></MiniThumbs>
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