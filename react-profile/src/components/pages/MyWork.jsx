import React from 'react';
import projects from '../../projects';
import Cards from '../Card';
export default function MyWork() {
  return (
    <div>
      <h1>My Work</h1>
      <div>{projects.map(project => <Cards key={project.id} project ={project}/>)}</div>
      </div>
  );
}
