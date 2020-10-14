export default function openDrawer (openDrawer = true, action) {
    if (action.type === 'changeState') {
        return !openDrawer;
    } else {
        return openDrawer;
    }
}