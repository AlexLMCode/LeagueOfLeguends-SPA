import views from "../views/home.html";

export default () => {
    const element = document.createElement('div');
    element.innerHTML = views;

    return element;
}