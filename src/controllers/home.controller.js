import views from "../views/home.html";

export default () => {
    const element = document.createElement('section');
    element.innerHTML = views;
    element.classList.add('h-center');
    return element;
}