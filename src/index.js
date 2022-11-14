import "./main.css";
import { showHome, removeHome } from "./app/utils/home/home";
import { navbar } from "./app/utils/home/navbar";
import { showMenu, removeMenu } from "./app/utils/menu/menu";
import { showContact, removeContact } from "./app/utils/contact/contact";

showHome()
navbar.home.classList.add("nav-active");


navbar.home.addEventListener('click', function () {
    if (showMenu()) {
        navbar.menu.classList.remove("nav-active");
        this.classList.add("nav-active");
        removeMenu();
        showHome();
    }
    if (showContact()) {
        navbar.contact.classList.remove("nav-active");
        this.classList.add("nav-active");
        removeContact();
        showHome();
    }
})

navbar.menu.addEventListener('click', function () {
    if (showHome()) {
        navbar.home.classList.remove("nav-active");
        this.classList.add("nav-active");
        removeHome();
        showMenu();
    }
    if (showContact()) {
        navbar.contact.classList.remove("nav-active");
        this.classList.add("nav-active");
        removeContact();
        showMenu();
    }
})

navbar.contact.addEventListener('click', function () {
    if (showHome()) {
        navbar.home.classList.remove("nav-active");
        this.classList.add("nav-active");
        removeHome();
        showContact();
    }
    if (showMenu()) {
        navbar.menu.classList.remove("nav-active");
        this.classList.add("nav-active");
        removeMenu();
        showContact();
    }
})
