import React from "react";


function Cards({project}) {
    return (
    <div className="card">
            <div>
                <h1>Hello</h1>
                <h3>{project.name}</h3>
                <div className="img">
                <a href={project.url}><img className="hello" src={project.imgURL}/></a>
                </div>
            </div>
        </div>
    )
}
export default Cards;