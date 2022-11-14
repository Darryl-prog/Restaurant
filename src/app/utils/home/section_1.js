import {
    createDiv,
    createHeading1,
    createHeading4,
    createParagraph,
    createSpan,
    createImg
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

export const section_1 = (function () {

    //Parent of these elements below
    const div = createDiv();
    div.classList.add("row", "hide-section-1");
    div.setAttribute("style", "margin-top: 5rem;");

    //1
    const div1 = createDiv();
    div1.classList.add("col-lg-6", "d-flex", "align-items-center", "order-2", "order-lg-1");
    div.appendChild(div1);

    const div1_1 = createDiv();
    div1_1.classList.add("img-restaurant-container");
    div1.appendChild(div1_1);

    const img1 = createImg();
    img1.classList.add("restaurant");
    img1.setAttribute("src", "./assets/restaurant.jpg");
    img1.setAttribute("alt", "Restaurant");
    div1_1.appendChild(img1);

    const div1_1_1 = createDiv();
    div1_1_1.classList.add("circle-5");
    div1_1.appendChild(div1_1_1);

    const div1_1_2 = createDiv();
    div1_1_2.classList.add("circle-6");
    div1_1.appendChild(div1_1_2);

    const div1_1_3 = createDiv();
    div1_1_3.classList.add("circle-7");
    div1_1.appendChild(div1_1_3);

    const div1_1_4 = createDiv();
    div1_1_4.classList.add("circle-8");
    div1_1.appendChild(div1_1_4);

    const div1_1_5 = createDiv();
    div1_1_5.classList.add("circle-9");
    div1_1.appendChild(div1_1_5);

    const div1_1_6 = createDiv();
    div1_1_6.classList.add("circle-10");
    div1_1.appendChild(div1_1_6);

    //2
    const div2 = createDiv();
    div2.classList.add("col-lg-6", "d-flex", "align-items-center", "order-1", "order-lg-2", "mb-5");
    div.appendChild(div2);

    const div2_1 = createDiv();
    div2_1.classList.add("d-flex", "flex-column");
    div2.appendChild(div2_1);

    const h1 = createHeading1();
    h1.textContent = "The tastiest food and the best ambiance";
    h1.classList.add("tagline-2");
    div2_1.appendChild(h1);

    const div2_1_1 = createDiv();
    div2_1_1.classList.add("d-flex", "gap-5");
    div2_1.appendChild(div2_1_1);

    const span1 = createSpan();
    span1.textContent = "01";
    span1.classList.add("span-01");
    div2_1_1.appendChild(span1);

    const div2_1_1_1 = createDiv();
    div2_1_1.appendChild(div2_1_1_1);

    const h4_1 = createHeading4();
    h4_1.textContent = "Check out our brand new interior";
    h4_1.classList.add("pt-3", "ps-2");
    div2_1_1_1.appendChild(h4_1);

    const p1 = createParagraph();
    p1.textContent = "A gorgeous view and delicious food cannot help but inspire creativity in the kitchen."
    p1.classList.add("ps-2");
    div2_1_1_1.appendChild(p1);

    const div2_1_2 = createDiv();
    div2_1_2.classList.add("d-flex", "gap-5");
    div2_1.appendChild(div2_1_2);

    const span2 = createSpan();
    span2.textContent = "02";
    span2.classList.add("span-02");
    div2_1_2.appendChild(span2);

    const div2_1_2_1 = createDiv();
    div2_1_2.appendChild(div2_1_2_1);

    const h4_2 = createHeading4();
    h4_2.textContent = "Room is not a room without natural light";
    h4_2.classList.add("pt-3");
    div2_1_2_1.appendChild(h4_2);

    const p2 = createParagraph();
    p2.textContent = "A place that feels like it is always summer inside.";
    div2_1_2_1.appendChild(p2);

    const div2_1_3 = createDiv();
    div2_1_3.classList.add("d-flex", "gap-5");
    div2_1.appendChild(div2_1_3);

    const span3 = createSpan();
    span3.textContent = "03";
    span3.classList.add("span-03");
    div2_1_3.appendChild(span3);

    const div2_1_3_1 = createDiv();
    div2_1_3.appendChild(div2_1_3_1);

    const h4_3 = createHeading4();
    h4_3.textContent = "You are in good hands";
    h4_3.classList.add("pt-3");
    div2_1_3_1.appendChild(h4_3);

    const p3 = createParagraph();
    p3.textContent = "Go on, sit back and relax at our restaurant.";
    div2_1_3_1.appendChild(p3);

    return { div };
})();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add("show-section-1")
    })
})

observer.observe(section_1.div);



