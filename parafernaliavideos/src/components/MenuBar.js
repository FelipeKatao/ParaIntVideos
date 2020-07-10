import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import teste from '../js/ApiYoutube.js'
import VideoPage from './VideoPage.js'

function MenuBar(){
   const[path,setpath]=useState()
    function define(){
        setpath(document.getElementById("input_search").value)
    }
    return(
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="#">Parafernalha Video</a>
           <form className="form-inline">
               <input onChangeCapture={define} id="input_search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              
           </form>
           <button className="btn btn-outline-success my-2 my-sm-0"><Link to={`/videoPage/${path}`}>Search</Link></button>
       </nav>
    );
}

export default MenuBar