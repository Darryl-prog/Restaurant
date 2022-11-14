import {
    createDiv,
    createNav,
    createAnchor,
    createButton,
    createSpan,
    createUl,
    createLi,
    createImg
} from "../elements"

export const navbar = (function () {

    const nav = createNav();
    const divNavChild = createDiv();
    const ancDivChild = createAnchor();
    const imgAncChild = createImg();
    const buttonDivChild = createButton();
    const spanButtonChild = createSpan();

    nav.classList.add("navbar", "navbar-expand-lg", "border-bottom", "mt-4");
    divNavChild.classList.add("container-fluid", "p-0");
    ancDivChild.classList.add("navbar-brand");
    imgAncChild.classList.add("img-fluid", "img-logo");
    buttonDivChild.classList.add("navbar-toggler");
    spanButtonChild.classList.add("navbar-toggler-icon")

    nav.appendChild(divNavChild);
    divNavChild.appendChild(ancDivChild);
    ancDivChild.appendChild(imgAncChild);
    divNavChild.appendChild(buttonDivChild);
    buttonDivChild.appendChild(spanButtonChild);

    for (const [ancDivChildKey, ancDivChildValue] of Object.entries({
        href: '#',
    })) {
        ancDivChild.setAttribute(ancDivChildKey, ancDivChildValue);
    }

    for (const [imgAncChildKey, imgAncChildValue] of Object.entries({
        src: './assets/logo.png',
        alt: 'logo',
    })) {
        imgAncChild.setAttribute(imgAncChildKey, imgAncChildValue);
    }

    for (const [buttonDivChildKey, buttonDivChildValue] of Object.entries({
        type: 'button',
        'data-bs-toggle': 'collapse',
        'data-bs-target': '#navbarNav',
        'aria-controls': 'navbarNav',
        'aria-expanded': 'false',
        'aria-label': 'Toggle navigation'
    })) {
        buttonDivChild.setAttribute(buttonDivChildKey, buttonDivChildValue);
    }

    const divDivChild_1 = createDiv();
    const ulDiv_2Child = createUl();
    const li_1UlChild = createLi();
    const li_2UlChild = createLi();
    const li_3UlChild = createLi();

    const a_1Li_1Child = createAnchor();
    const a_2Li_2Child = createAnchor();
    const a_3Li_3Child = createAnchor();

    divDivChild_1.classList.add("collapse", "navbar-collapse", "justify-content-end", "text-sm-center");
    divDivChild_1.setAttribute("id", "navbarNav");

    ulDiv_2Child.classList.add("navbar-nav", "gap-4");
    li_1UlChild.classList.add("nav-item");
    li_2UlChild.classList.add("nav-item");
    li_3UlChild.classList.add("nav-item");

    a_1Li_1Child.textContent = "HOME";
    a_1Li_1Child.classList.add("nav-link", "nav-home");
    for (const [a_1Li_1ChildKey, a_1Li_1ChildValue] of Object.entries({
        'aria-current': 'page',
        href: '#',
    })) {
        a_1Li_1Child.setAttribute(a_1Li_1ChildKey, a_1Li_1ChildValue);
    }
    const home = a_1Li_1Child;

    a_2Li_2Child.textContent = "MENU";
    a_2Li_2Child.classList.add("nav-link", "nav-menu");
    a_2Li_2Child.setAttribute("href", "#");
    const menu = a_2Li_2Child;

    a_3Li_3Child.textContent = "CONTACT";
    a_3Li_3Child.classList.add("nav-link", "nav-contact");
    a_3Li_3Child.setAttribute("href", "#");
    const contact = a_3Li_3Child;

    li_1UlChild.appendChild(a_1Li_1Child);
    li_2UlChild.appendChild(a_2Li_2Child);;
    li_3UlChild.appendChild(a_3Li_3Child);

    ulDiv_2Child.appendChild(li_1UlChild);
    ulDiv_2Child.appendChild(li_2UlChild);
    ulDiv_2Child.appendChild(li_3UlChild);


    divDivChild_1.appendChild(ulDiv_2Child);

    divNavChild.appendChild(divDivChild_1);

    return { nav, menu, home, contact }
})();