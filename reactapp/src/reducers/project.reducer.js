export default function projects (project = null, action) {
    if (action.type === 'openProject') {
        console.log(action.position)
        return action.position;
    } else if (action.type === 'closeProject') {
        return null;
    } else {
        return project;
    }
}