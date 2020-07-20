import views from "../views/about.html";

export default () => {
    const element = document.createElement('section');
    element.innerHTML = views;

    return element;
}