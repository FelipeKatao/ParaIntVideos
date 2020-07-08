import React from 'react'
import {Link} from 'react-router-dom'

function MenuBar(){
    return(
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
           <a className="navbar-brand" href="#">Parafernalha Video</a>
           <form className="form-inline">
               <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
               <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to='/videoPage'>Search</Link></button>
           </form>
       </nav>
    );
}

export default MenuBar