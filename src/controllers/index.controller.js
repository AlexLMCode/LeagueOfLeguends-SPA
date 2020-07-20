import Home from "./home.controller";
import Products from "./products.controller";
import Error from "./error.controller";
import About from "./about.controller";

const pages = {
    home: Home,
    products: Products,
    about: About,
    error: Error
}

export default pages;
