export default function openDrawer (openDrawer = false, action) {
    if (action.type === 'changeState') {
        return !openDrawer;
    } else {
        return openDrawer;
    }
}