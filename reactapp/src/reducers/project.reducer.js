export default function projects (project = null, action) {
    if (action.type === 'openProject') {
        return action.position;
    } else if (action.type === 'closeProject') {
        return null;
    } else {
        return project;
    }
}