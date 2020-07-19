import home from "../controllers/index.controller"

let content = document.getElementById('root');

const router = (route) => {
    content.innerHTML = '';
    switch (route) {
        case '#/':
            content.appendChild(home());
            break;
        case '#/products':
            console.log('products');
            break;
        case '#/about':
            console.log('about');
            break;
        default:
            console.log('not found')
    }
}

export default router;