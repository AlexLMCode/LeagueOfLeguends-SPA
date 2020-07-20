import views from "../views/home.html";

export default () => {
    const element = document.createElement('section');
    element.innerHTML = views;

    return element;
}