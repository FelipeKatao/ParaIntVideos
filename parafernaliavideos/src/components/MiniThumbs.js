import React from "react"
import '../css/Player.css'

function MiniThumbs(){
    return(
        <>
        <div className="card mb-2 miniPlayer">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://i.ytimg.com/vi/0tcDXJfAFVw/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAt8ga__wclzadNe5hZaPPFJ9xq5g" className="card-img"></img>
                </div>
                <div className="col-md-8 content-style">
                    <div className="card-body"></div>
                    <h5 className="card-body">Titulo do video</h5>
                    <p className="card-text">Descrição do video se encontra aqui</p>
                    <p className="card-text"><small className="text-muted">Upload in 08/08/2019</small></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default MiniThumbs