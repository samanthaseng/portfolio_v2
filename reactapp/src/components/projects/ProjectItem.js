import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    ButtonsContainer,
    Content,
    CloseContainer,
    Project,
    ProjectActive,
    ProjectActiveContent,
    ProjectMainContainer,
    ProjectHoverContainer,
    Subtitle,
    Technologies,
    Title
} from './Projects.style';
import Button from '../UI/Button/Button';

function ProjectItem(props) {
    const { 
        name, 
        subtitle,
        image, 
        description,
        technologies,
        website,
        github,
        position, 
        openProject,
        closeProject, 
        activeProject 
    } = props;

    const [hover, setHover] = useState(false);

    const handleMouseEnter = () => {
        setHover(true);
    }

    const handleMouseLeave = () => {
        setHover(false);
    }

    const handleOpenProject = () => {
        openProject(position)
    }

    const projectClass = activeProject === null
        ? 'default'
        : position === activeProject
            ? 'open'
            : 'reduced';

    const descriptionToDisplay = description.map(text => {
        return <Content>{text}</Content>
    })

    return (
        <Project 
            background={image}
            className={projectClass}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <ProjectMainContainer className={projectClass}>
                { position !== activeProject &&
                <ProjectHoverContainer className='project-content'>
                    {hover &&
                        <Button component='projects' action={handleOpenProject}>
                            Plus d'infos sur {name}
                        </Button>
                    }
                </ProjectHoverContainer>
                }
                
                { position === activeProject &&
                    <ProjectActive>
                        <ProjectActiveContent>
                            <CloseContainer>
                                <FontAwesomeIcon icon={faTimes} onClick={closeProject} className='close-icon' />
                            </CloseContainer>
                            <Title>{name}</Title>
                            <Subtitle>{subtitle}</Subtitle>
                            {descriptionToDisplay}
                            <Technologies><span className="technologies-title">Technologies : </span>{technologies.join(', ')}</Technologies>
                        </ProjectActiveContent>
                        
                        <ButtonsContainer>
                            { website &&
                                <Button component='website-link' link={website}>
                                    Site web
                                </Button>
                            }
                            { github &&
                                <Button component='github-link' link={github}>
                                    GitHub
                                </Button>
                            }
                        </ButtonsContainer>
                    </ProjectActive>
                }
            </ProjectMainContainer>
        </Project>
    )
}

function mapStateToProps(state) {
    return { activeProject: state.project }
  }

function mapDispatchToProps(dispatch) {
    return {
        openProject: function(position) { 
            dispatch({ type: 'openProject', position: position }) 
        },
        closeProject: function() { 
            dispatch({ type: 'closeProject' }) 
        }
    }
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ProjectItem);

ProjectItem.propTypes = {
    name: PropTypes.string,
    subtitle: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.array,
    technologies: PropTypes.array,
    website: PropTypes.string,
    github: PropTypes.string,
    position: PropTypes.number,
    openProject: PropTypes.func,
    closeProject: PropTypes.func,
    activeProject: PropTypes.number
}
