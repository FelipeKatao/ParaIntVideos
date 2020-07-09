import React,{useState} from "react"
import '../css/Player.css'

function MiniThumbs(props){
    const [ tituloClip, setTitulo ] =useState(props.titulo)
    const [ Descricao, setDes ] = useState(props.Descricao)
    const [ uploadDate, setDate] = useState(props.uploadDate)
    return(
        <>
        <div className="card mb-2 miniPlayer">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="https://i.ytimg.com/vi/0tcDXJfAFVw/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLAt8ga__wclzadNe5hZaPPFJ9xq5g" className="card-img"></img>
                </div>
                <div className="col-md-8 content-style">
                    <div className="card-body"></div>
                    <h5 className="card-body">{tituloClip}</h5>
                    <p className="card-text">{Descricao}</p>
                    <p className="card-text"><small className="text-muted">{uploadDate}</small></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default MiniThumbs