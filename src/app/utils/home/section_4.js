import {
    createDiv,
    createParagraph,
    createImg,
    createHeading5
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

export const section_4 = (function () {

    //Parents of these elements below
    const div = createDiv();
    div.classList.add("row");
    div.setAttribute("style", "margin-top: 2rem;")

    //1
    const div1 = createDiv();
    div1.classList.add("col-6", "col-lg-3", "mb-3", "hide-card-section-4");
    div.appendChild(div1);

    const div1_1 = createDiv();
    div1_1.classList.add("card", "card-pasta");
    div1_1.setAttribute("style", "height:25rem");
    div1.appendChild(div1_1);

    const img1 = createImg();
    img1.classList.add("img-fluid", "shrimp-pasta");
    img1.setAttribute("src", "./assets/shrimp-pasta.jpg");
    img1.setAttribute("alt", "Shrimp Pasta");
    div1_1.appendChild(img1);

    const div1_1_1 = createDiv();
    div1_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center")
    div1_1.appendChild(div1_1_1);

    const h5 = createHeading5();
    h5.textContent = "Shrimp Pasta";
    h5.classList.add("card-title", "shrimp-pasta-title");
    div1_1_1.appendChild(h5);

    const p1 = createParagraph();
    p1.textContent = "The combination of garlic, parmesan cheese, and tomatoes makes this shrimp pasta dish so delicious."
    div1_1_1.appendChild(p1);

    //2
    const div2 = createDiv();
    div2.classList.add("col-6", "col-lg-3", "mb-3", "hide-card-section-4");
    div.appendChild(div2);

    const div2_1 = createDiv();
    div2_1.classList.add("card", "card-rib");
    div2_1.setAttribute("style", "height:25rem");
    div2.appendChild(div2_1);

    const img2 = createImg();
    img2.classList.add("rib-eye-steak");
    img2.setAttribute("src", "./assets/rib-eye-steak.jpg");
    img2.setAttribute("alt", "Rib Eye Steak");
    div2_1.appendChild(img2);

    const div2_1_1 = createDiv();
    div2_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center");
    div2_1.appendChild(div2_1_1);

    const h5_2 = createHeading5();
    h5_2.textContent = "Rib-Eye Steak";
    h5_2.classList.add("card-title", "rib-eye-steak-title");
    div2_1_1.appendChild(h5_2);

    const p2 = createParagraph();
    p2.textContent = "This rib-eye steak is rich, juicy, tender and full-flavored with generous marbling throughout."
    div2_1_1.appendChild(p2);

    //3
    const div3 = createDiv();
    div3.classList.add("col-6", "col-lg-3", "mb-3", "hide-card-section-4");
    div.appendChild(div3);

    const div3_1 = createDiv();
    div3_1.classList.add("card", "card-chicken");
    div3_1.setAttribute("style", "height:25rem");
    div3.appendChild(div3_1);

    const img3 = createImg();
    img3.classList.add("chicken-madeira");
    img3.setAttribute("src", "./assets/chicken-madeira.jpg");
    img3.setAttribute("alt", "Chicken Madeira");
    div3_1.appendChild(img3);

    const div3_1_1 = createDiv();
    div3_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center");
    div3_1.appendChild(div3_1_1);

    const h5_3 = createHeading5();
    h5_3.textContent = "Chicken Madeira";
    h5_3.classList.add("card-title", "chicken-madeira-title");
    div3_1_1.appendChild(h5_3);

    const p3 = createParagraph();
    p3.textContent = "Garlicky, sautéed chicken breast smothered in a creamy sauce of Madeira wine and mushrooms."
    div3_1_1.appendChild(p3);

    //4
    const div4 = createDiv();
    div4.classList.add("col-6", "col-lg-3", "mb-3", "hide-card-section-4");
    div.appendChild(div4);

    const div4_1 = createDiv();
    div4_1.classList.add("card", "card-salmon");
    div4_1.setAttribute("style", "height:25rem");
    div4.appendChild(div4_1);

    const img4 = createImg();
    img4.classList.add("salmon");
    img4.setAttribute("src", "./assets/salmon.jpg");
    img4.setAttribute("alt", "Honey Garlic Glazed Salmon");
    div4_1.appendChild(img4);

    const div4_1_1 = createDiv();
    div4_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center");
    div4_1.appendChild(div4_1_1);

    const h5_4 = createHeading5();
    h5_4.textContent = "Honey Garlic Glazed Salmon";
    h5_4.classList.add("card-title", "salmon-title");
    div4_1_1.appendChild(h5_4);

    const p4 = createParagraph();
    p4.textContent = "This honey garlic glazed salmon is a great sweet and salty way to serve fish."
    div4_1_1.appendChild(p4);

    return { div, div1, div2, div3, div4 };

})();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add("show-card-section-4")
    })
})

for (let i = 1; i < 5; i++) {
    observer.observe((Object.entries(section_4))[i][1]);
}