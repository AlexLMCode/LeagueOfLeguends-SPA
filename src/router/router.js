let content = document.getElementById('root');
import pages from "../controllers/index.controller";

const router = async (route) => {
    content.innerHTML = '';
    console.log(route);

    switch (route) {
        case '': {
            return content.appendChild(pages.home());
        }
        case '#/': {
            return content.appendChild(pages.home());
        }
        case '#/products': {
            return content.appendChild(await pages.products());
        }
        case '#/about': {
            return content.appendChild(pages.about());
        }
        default: {
            return content.appendChild(pages.error());
        }
    }
}

export default router;