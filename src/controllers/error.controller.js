import views from "../views/error.html";

export default () => {
    const element = document.createElement('section');
    element.innerHTML = views;

    return element;
}