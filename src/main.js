import "materialize-css/dist/css/materialize.min.css"
import './main.scss'

import router from "./router/router";

/*Capturando el cambio de la url para actualizar el contenido*/
router(window.location.hash);
window.addEventListener('hashchange', ()=>{
    router(window.location.hash);
});
