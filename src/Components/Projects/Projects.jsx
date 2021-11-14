import React from 'react';
import ProjectCart from './ProjectCart/ProjectCart';
import s from './Projects.module.css';

const Projects = (props) => {

    let carts =
        props.carts.map(c => <ProjectCart header={c.header}
            description={c.description}
            projectLanguage={c.projectLanguage}
        />);

    return (
        <div className='projects' className={s.body}>
            <span className={s.projects_header}>Projects</span>
            <div className={s.carts}>
                {carts}
            </div>
            <button className={s.more_projects}>MORE PROJECTS</button>
        </div>
    );
}

export default Projects;