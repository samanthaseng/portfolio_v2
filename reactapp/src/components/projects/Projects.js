import React from 'react';
import ProjectItem from './ProjectItem';
import {
    ProjectsContainer,
    ProjectsContainerLineOne,
    ProjectsContainerLineTwo,
    ProjectsTitle,
    ProjectsTitleWrapper,
    ProjectsWrapper
} from './Projects.style';
import projectsData from '../../data/projects.json';

export default function Projects() {
    const { projects } = projectsData;

    const projectsToDisplay = projects.map((project, i) => {
        if (project.position < 5) {
            return (
                <ProjectItem 
                    key={project.name}
                    name={project.name}
                    subtitle={project.subtitle}
                    image={project.image}
                    description={project.description}
                    technologies={project.technologies}
                    website={project.website}
                    github={project.github}
                    position={i}
                />
            )
        }
    })

    return (
        <ProjectsWrapper id="projects">
            <ProjectsTitleWrapper>
                <ProjectsTitle>Projets réalisés</ProjectsTitle>
            </ProjectsTitleWrapper>
            <ProjectsContainer>
                <ProjectsContainerLineOne>
                    {projectsToDisplay[0]}
                    {projectsToDisplay[1]}
                </ProjectsContainerLineOne>
                <ProjectsContainerLineTwo>
                    {projectsToDisplay[2]}
                    {projectsToDisplay[3]}
                </ProjectsContainerLineTwo>
            </ProjectsContainer>
        </ProjectsWrapper>
    )
}