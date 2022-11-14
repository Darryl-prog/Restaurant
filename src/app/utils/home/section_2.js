import {
    createDiv,
    createHeading1,
    createHeading4,
    createParagraph,
    createButton,
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

export const section_2 = (function () {

    //Parent of these elements
    const div = createDiv();
    div.classList.add("row", "hide-section-2");
    div.setAttribute("style", "margin-top: 5rem;");

    //1
    const div1 = createDiv();
    div1.classList.add("col-lg-6");
    div.appendChild(div1);

    const div1_1 = createDiv();
    div1_1.classList.add("mb-2")
    div1.appendChild(div1_1);

    const h1 = createHeading1();
    h1.textContent = "Do you want to be happy?";
    h1.classList.add("mb-4");
    h1.setAttribute("style", "color: #21332c;");
    h1.setAttribute("font-weight", 600);
    div1_1.appendChild(h1);

    const p1 = createParagraph();
    p1.textContent = "Where there is good food, there is happiness.";
    div1_1.appendChild(p1);

    const div1_2 = createDiv();
    div1.appendChild(div1_2);

    const button1 = createButton();
    button1.classList.add("btn", "btn-lg", "btn-primary", "d-flex", "align-items-center", "gap-2", "deliver-now");
    div1_2.appendChild(button1);

    const span1 = createSpan();
    span1.textContent = "book";
    span1.classList.add("material-symbols-sharp");
    button1.appendChild(span1);

    const span2 = createSpan();
    span2.textContent = "Book";
    button1.appendChild(span2);

    const div1_3 = createDiv();
    div1_3.classList.add("d-flex", "align-items-center", "gap-4", "mb-3");
    div1.appendChild(div1_3);

    const span3 = createSpan();
    span3.textContent = "tapas";
    span3.classList.add("material-symbols-sharp", "tapas");
    div1_3.appendChild(span3);

    const div1_3_1 = createDiv();
    div1_3.appendChild(div1_3_1);

    const h4 = createHeading4();
    h4.textContent = "Appetizers";
    h4.classList.add("starters");
    div1_3_1.appendChild(h4);

    const p2 = createParagraph();
    p2.textContent = "The best snack for the best people.";
    div1_3_1.appendChild(p2);

    const div1_4 = createDiv();
    div1_4.classList.add("d-flex", "align-items-center", "gap-4");
    div1.appendChild(div1_4);

    const span4 = createSpan();
    span4.textContent = "local_bar";
    span4.classList.add("material-symbols-sharp", "local-bar");
    div1_4.appendChild(span4);

    const div1_4_1 = createDiv();
    div1_4.appendChild(div1_4_1);

    const h4_2 = createHeading4();
    h4_2.textContent = "Drinks";
    h4_2.classList.add("drinks");
    div1_4_1.appendChild(h4_2);

    const p3 = createParagraph();
    p3.textContent = "Your everyday thirst quencher!";
    div1_4_1.appendChild(p3);

    //2
    const div2 = createDiv();
    div2.classList.add("col-lg-6", "d-flex", "flex-column", "justify-content-end");
    div.appendChild(div2);

    const div2_1 = createDiv();
    div2_1.classList.add("d-flex", "align-items-center", "gap-4");
    div2.appendChild(div2_1);

    const span5 = createSpan();
    span5.textContent = "dinner_dining";
    span5.classList.add("material-symbols-sharp", "dinner-dining");
    div2_1.appendChild(span5);

    const div2_1_1 = createDiv();
    div2_1.appendChild(div2_1_1);

    const h4_3 = createHeading4();
    h4_3.textContent = "Main Dishes";
    h4_3.classList.add("main-dishes");
    div2_1_1.appendChild(h4_3);

    const p4 = createParagraph();
    p4.textContent = "Dream, then come to us for the food you dreamt of.";
    div2_1_1.appendChild(p4);

    const div2_2 = createDiv();
    div2_2.classList.add("d-flex", "align-items-center", "gap-4", "mb-0");
    div2.appendChild(div2_2);

    const span6 = createDiv();
    span6.textContent = "cake";
    span6.classList.add("material-symbols-sharp", "cake");
    div2_2.appendChild(span6);

    const div2_2_1 = createDiv();
    div2_2.appendChild(div2_2_1);

    const h4_4 = createHeading4();
    h4_4.textContent = "Desserts";
    h4_4.classList.add("desserts");
    div2_2_1.appendChild(h4_4);

    const p5 = createParagraph();
    p5.textContent = "Stressed? Try our desserts."
    div2_2_1.appendChild(p5);

    return { div };
})();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            console.log(entry)
            entry.target.classList.add("show-section-2")
        }
    })
})

observer.observe(section_2.div);













