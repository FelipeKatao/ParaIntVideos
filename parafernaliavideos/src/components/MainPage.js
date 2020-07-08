import React from 'react'
import '../css/Components.css'
import { Link } from 'react-router-dom'

function MainPage(){
    return(
        <>
        <div className="banner">
            <div><h1>Faça uma pesquisa para iniciar</h1></div>
            <div class="container-square">
            <div className="AnimateSquare">B</div>
            <div className="AnimateSquare">B</div>
            <div className="AnimateSquare">B</div>
            <div className="AnimateSquare">B</div>
            </div>
        </div>
        </>
    );

}
export default MainPage