import {
    createDiv,
    createHeading1,
    createParagraph,
    createButton,
    createSpan,
    createImg,
    createSvg,
    createCircle
} from "../elements"

export const main = (function () {
    const div = createDiv();
    const divChild1 = createDiv();
    const h1 = createHeading1();
    const p = createParagraph();
    const divChildOfDivChild1 = createDiv();
    const button1 = createButton();
    const span1Button1Child = createSpan();
    const span2Button1Child = createSpan();
    const button2 = createButton();
    const span1Button2Child = createSpan();
    const span2Button2Child = createSpan();

    div.classList.add("row", "hide-main");
    div.setAttribute("style", "margin-top: 3rem")
    divChild1.classList.add("col-lg-6", "d-flex", "flex-column", "justify-content-center",);

    h1.textContent = "An elegant place to eat and drink"
    h1.classList.add("tagline", "text-center", "text-lg-start");

    p.textContent = "You can enjoy our superb dishes in this welcoming and beautiful setting. You can feel like a tourist and genuine gourmet with our fantastic selection of foods from around the world!"

    divChildOfDivChild1.classList.add("d-flex", "justify-content-center", "justify-content-lg-start", "gap-2", "buttons-menu-about-us");
    button1.classList.add("btn", "btn-primary", "btn-lg", "d-flex", "align-items-center", "gap-2", "button-menu");
    button1.setAttribute("type", "button");

    span1Button1Child.textContent = "menu_book";
    span1Button1Child.classList.add("material-symbols-sharp", "menu-book-icon");

    span2Button1Child.textContent = "Menu";
    span2Button1Child.classList.add("menu-text");

    button2.classList.add("btn", "btn-primary", "btn-lg", "d-flex", "align-items-center", "gap-2", "button-menu")
    button2.setAttribute("type", "button");

    span1Button2Child.textContent = "info";
    span1Button2Child.classList.add("material-symbols-sharp", "info-icon");

    span2Button2Child.textContent = "About Us";
    span2Button2Child.classList.add("info-text");

    divChild1.appendChild(h1);
    divChild1.appendChild(p);
    divChild1.appendChild(divChildOfDivChild1);

    divChildOfDivChild1.appendChild(button1);
    divChildOfDivChild1.appendChild(button2);

    button1.appendChild(span1Button1Child);
    button1.appendChild(span2Button1Child);

    button2.appendChild(span1Button2Child);
    button2.appendChild(span2Button2Child);

    div.appendChild(divChild1);

    const divChild2 = createDiv();
    const divChildOfDivChild2 = createDiv();
    const img = createImg();
    const span1 = createSpan();
    const span2 = createSpan();
    const span3 = createSpan();
    const span4 = createSpan();
    const divCircle2 = createDiv();
    const divCircle3 = createDiv();
    const divCircle4 = createDiv();
    const svg1 = createSvg();
    const circle1 = createCircle();
    const svg2 = createSvg();
    const circle2 = createCircle();

    divChild2.classList.add("col-lg-6");
    divChildOfDivChild2.classList.add("d-flex", "justify-content-center", "position-relative");

    img.classList.add("img-fluid", "model-girl");
    for (const [imgKey, imgValue] of Object.entries({
        src: './assets/model.png',
        alt: 'Model-girl',
    })) {
        img.setAttribute(imgKey, imgValue);
    }

    span1.textContent = "local_dining";
    span1.classList.add("material-symbols-sharp", "local-dining-icon");
    span2.textContent = "local_pizza";
    span2.classList.add("material-symbols-sharp", "local-pizza-icon");
    span3.textContent = "kebab_dining";
    span3.classList.add("material-symbols-sharp", "kebab-dining-icon");
    span4.textContent = "lunch_dining";
    span4.classList.add("material-symbols-sharp", "lunch-dining-icon");

    divCircle2.classList.add("circle-2");
    divCircle3.classList.add("circle-3");
    divCircle4.classList.add("circle-4");

    svg1.classList.add("svg-circle-1");
    svg1.setAttribute("height", 100);
    svg1.setAttribute("width", 100);

    circle1.setAttribute('cx', 50);
    circle1.setAttribute('cy', 50);
    circle1.setAttribute('r', 40);

    svg2.classList.add("svg-circle-2");
    svg2.setAttribute("height", 50);
    svg2.setAttribute("width", 50);

    circle2.setAttribute("cx", 25);
    circle2.setAttribute("cy", 25);
    circle2.setAttribute("r", 15);

    divChild2.appendChild(divChildOfDivChild2);
    divChildOfDivChild2.appendChild(img);
    divChildOfDivChild2.appendChild(span1);
    divChildOfDivChild2.appendChild(span2);
    divChildOfDivChild2.appendChild(span3);
    divChildOfDivChild2.appendChild(span4);
    divChildOfDivChild2.appendChild(divCircle2);
    divChildOfDivChild2.appendChild(divCircle3);
    divChildOfDivChild2.appendChild(divCircle4);

    svg1.appendChild(circle1);
    svg2.appendChild(circle2);

    divChildOfDivChild2.appendChild(svg1);
    divChildOfDivChild2.appendChild(svg2);

    divChild2.appendChild(divChildOfDivChild2);

    div.appendChild(divChild2);

    return { div };
})();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add("show-main")
    })
})

observer.observe(main.div);
