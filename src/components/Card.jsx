import React from "react";


function Cards({project}) {
    return (
    <div className="card">
            <div>
                <br></br>
                <h2>{project.name}</h2>
                <div className="img">
                <a href={project.url}><img className="hello" src={project.imgURL}/></a>
                </div>
            </div>
        </div>
    )
}
export default Cards;