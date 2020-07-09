import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import VideoPage from '../components/VideoPage.js'

var testeGlobal="false"
function Api_get(SearchVideo){
    let api
    fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&q='+SearchVideo+'&type=video&videoCaption=closedCaption&key=AIzaSyCUz9yK2MHijtZam4oJ5H3Q2s5V9ehirng')
    .then((resp) => resp.json())
    .then(function(data){
        console.log(data)
        for (let index = 0; index < data["items"].length; index++) {
            console.log(data["items"][index]["snippet"]["title"])
            console.log(data["items"][index]["snippet"]["description"])
            console.log(data["items"][index]["snippet"]["publishTime"])
            console.log(data["items"][index]["id"]["videoId"])
            console.log(data["items"][index]["snippet"]["thumbnails"]["default"]["url"])
        }
    })
    return api
}

function teste(e){
  // Api_get(document.getElementById("input_search").value)
  //testeGlobal=true
  console.log(console.log(document.getElementById("1").id))
  document.getElementById("1").id="0"
}


export default teste