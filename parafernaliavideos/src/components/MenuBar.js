import React from 'react'
import {Link} from 'react-router-dom'
import teste from '../js/ApiYoutube.js'

function MenuBar(){
    return(
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="#">Parafernalha Video</a>
           <form className="form-inline">
               <input id="input_search" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
              
           </form>
           <button onClick={teste} id="1" className="btn btn-outline-success my-2 my-sm-0">Search</button>
       </nav>
    );
}

export default MenuBar