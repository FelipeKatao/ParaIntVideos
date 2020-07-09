import React from 'react'
import '../css/Components.css'
import { Link } from 'react-router-dom'

function MainPage(){
    return(
        <div className="card bg-dark text-white">
            <img src="..." className="card-img"></img>
            <div className="card-img-overlay">
                <h5 className="card-title">Pesquise por qualquer video</h5>
                <p className="card text">Faça uma pesquisa por algum assunto no qual você se interrese</p>
                <p classsname="card-text">Atualizado em 4 minutos atrás</p>
            </div> 
        </div>
    );

}
export default MainPage
