import {
    createDiv,
    createHeading1,
    createParagraph,
    createSpan,
} from "../elements";

//Reference
/* <div>                => 1       (div1)
    <div>               => 1.1     (div1_1)
        <div></div>     => 1.1.1   (div1_1_1)
        <div></div>     => 1.1.2   (div1_1_2)
    </div>
    <div></div>         => 1.2     (div1_2)
</div> */
// '_' => '.'

export const section_3 = (function () {

    //Parents of these elements below
    const div = createDiv();
    div.classList.add("row", "hide-section-3");
    div.setAttribute("style", "margin-top: 5rem");

    const h1 = createHeading1();
    h1.textContent = "Recommended for you!";
    h1.classList.add("mb-4", "recommended");
    div.appendChild(h1);

    const div1 = createDiv();
    div1.classList.add("col-lg-6");
    div.appendChild(div1);

    const p1 = createParagraph();
    p1.textContent = "It is not true that money cannot buy happiness. I mean, have you tried buying these dishes from us? It is the same thing!"
    div1.appendChild(p1);

    const div2 = createDiv();
    div2.classList.add("col-lg-6", "d-flex", "justify-content-lg-end");
    div.appendChild(div2);

    const div2_1 = createDiv();
    div2_1.classList.add("d-flex", "align-items-center", "justify-content-between", "justify-content-lg-end", "gap-2", "w-100");
    div2.appendChild(div2_1);

    const div2_1_1 = createDiv();
    div2_1.appendChild(div2_1_1);

    const button = createDiv();
    button.classList.add("btn", "btn-lg", "btn-primary", "d-flex", "align-items-center", "gap-1", "button-menu");
    div2_1_1.appendChild(button);

    const span = createSpan();
    span.textContent = "menu_book";
    span.classList.add("material-symbols-sharp", "menu-book-icon")
    button.appendChild(span);

    const span2 = createSpan();
    span2.textContent = "Full Menu";
    button.appendChild(span2);

    return { div };

})();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry)
            entry.target.classList.add("show-section-3")
        }
    })
})

observer.observe(section_3.div);