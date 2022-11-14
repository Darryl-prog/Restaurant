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



export const menu = (function () {

    //Parent of these elements
    const div = createDiv();
    div.classList.add("row");
    div.setAttribute("style", "margin-top: 5rem");


    //1
    const div1 = createDiv();
    div1.classList.add("col-6", "col-lg-3", "mb-3", "hide", "card-pasta");
    div.appendChild(div1);

    const div1_1 = createDiv();
    div1_1.classList.add("card");
    div1_1.setAttribute("style", "height:25rem");
    div1.appendChild(div1_1);

    const img1 = createImg();
    img1.classList.add("shrimp-pasta");
    img1.setAttribute("src", "./assets/shrimp-pasta.jpg");
    img1.setAttribute("alt", "Shrimp Pasta");
    div1_1.appendChild(img1);

    const div1_1_1 = createDiv();
    div1_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center")
    div1_1.appendChild(div1_1_1);

    const h5_1 = createHeading5();
    h5_1.textContent = "Shrimp Pasta";
    h5_1.classList.add("card-title", "shrimp-pasta-title");
    div1_1_1.appendChild(h5_1);

    const p1 = createParagraph();
    p1.textContent = "The combination of garlic, parmesan cheese, and tomatoes makes this shrimp pasta dish so delicious."
    p1.classList.add("card-text", "text-center");
    div1_1_1.appendChild(p1);

    //2
    const div2 = createDiv();
    div2.classList.add("col-6", "col-lg-3", "mb-3", "hide", "card-chicken");
    div.appendChild(div2);

    const div2_1 = createDiv();
    div2_1.classList.add("card");
    div2_1.setAttribute("style", "height:25rem");
    div2.appendChild(div2_1);

    const img2 = createImg();
    img2.classList.add("chicken-madeira");
    img2.setAttribute("src", "./assets/chicken-madeira.jpg");
    img2.setAttribute("alt", "Chicken Madeira");
    div2_1.appendChild(img2);

    const div2_1_1 = createDiv();
    div2_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center")
    div2_1.appendChild(div2_1_1);

    const h5_2 = createHeading5();
    h5_2.textContent = "Chicken Madeira";
    h5_2.classList.add("card-title", "chicken-madeira-title");
    div2_1_1.appendChild(h5_2);

    const p2 = createParagraph();
    p2.textContent = "Garlicky, sautéed chicken breast smothered in a creamy sauce of Madeira wine and mushrooms."
    p2.classList.add("card-text", "text-center");
    div2_1_1.appendChild(p2);

    //3
    const div3 = createDiv();
    div3.classList.add("col-6", "col-lg-3", "mb-3", "hide", "card-rib");
    div.appendChild(div3);

    const div3_1 = createDiv();
    div3_1.classList.add("card");
    div3_1.setAttribute("style", "height:25rem");
    div3.appendChild(div3_1);

    const img3 = createImg();
    img3.classList.add("rib-eye-steak");
    img3.setAttribute("src", "./assets/rib-eye-steak.jpg");
    img3.setAttribute("alt", "Rib Eye Steak");
    div3_1.appendChild(img3);

    const div3_1_1 = createDiv();
    div3_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center")
    div3_1.appendChild(div3_1_1);

    const h5_3 = createHeading5();
    h5_3.textContent = "Rib-Eye Steak";
    h5_3.classList.add("card-title", "rib-eye-steak-title");
    div3_1_1.appendChild(h5_3);

    const p3 = createParagraph();
    p3.textContent = "This rib-eye steak is rich, juicy, tender and full-flavored with generous marbling throughout."
    p3.classList.add("card-text", "text-center");
    div3_1_1.appendChild(p3);

    //4
    const div4 = createDiv();
    div4.classList.add("col-6", "col-lg-3", "mb-3", "hide", "card-salmon");
    div.appendChild(div4);

    const div4_1 = createDiv();
    div4_1.classList.add("card");
    div4_1.setAttribute("style", "height:25rem");
    div4.appendChild(div4_1);

    const img4 = createImg();
    img4.classList.add("salmon");
    img4.setAttribute("src", "./assets/salmon.jpg");
    img4.setAttribute("alt", "Honey Garlic Glazed Salmon");
    div4_1.appendChild(img4);

    const div4_1_1 = createDiv();
    div4_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center")
    div4_1.appendChild(div4_1_1);

    const h5_4 = createHeading5();
    h5_4.textContent = "Honey Garlic Glazed Salmon";
    h5_4.classList.add("card-title", "salmon-title");
    div4_1_1.appendChild(h5_4);

    const p4 = createParagraph();
    p4.textContent = "This honey garlic glazed salmon is a great sweet and salty way to serve fish."
    p4.classList.add("card-text", "text-center");
    div4_1_1.appendChild(p4);

    //5
    const div5 = createDiv();
    div5.classList.add("col-6", "col-lg-3", "mb-3", "hide", "card-laksa");
    div.appendChild(div5);

    const div5_1 = createDiv();
    div5_1.classList.add("card");
    div5_1.setAttribute("style", "height:25rem");
    div5.appendChild(div5_1);

    const img5 = createImg();
    img5.classList.add("salmon");
    img5.setAttribute("src", "./assets/laksa.jpg");
    img5.setAttribute("alt", "Laksa Seafood Pasta");
    div5_1.appendChild(img5);

    const div5_1_1 = createDiv();
    div5_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center")
    div5_1.appendChild(div5_1_1);

    const h5_5 = createHeading5();
    h5_5.textContent = "Laksa Seafood pasta";
    h5_5.classList.add("card-title", "laksa-title");
    div5_1_1.appendChild(h5_5);

    const p5 = createParagraph();
    p5.textContent = "A laksa is a simple way to liven up the week. This one's hearty and full of our favourite seafood."
    p5.classList.add("card-text", "text-center");
    div5_1_1.appendChild(p5);

    //6
    const div6 = createDiv();
    div6.classList.add("col-6", "col-lg-3", "mb-3", "hide", "card-mongolian-beef");
    div.appendChild(div6);

    const div6_1 = createDiv();
    div6_1.classList.add("card");
    div6_1.setAttribute("style", "height:25rem");
    div6.appendChild(div6_1);

    const img6 = createImg();
    img6.classList.add("mongolian-beef");
    img6.setAttribute("src", "./assets/mongolian-beef.png");
    img6.setAttribute("alt", "Mongolian Beef");
    div6_1.appendChild(img6);

    const div6_1_1 = createDiv();
    div6_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center")
    div6_1.appendChild(div6_1_1);

    const h5_6 = createHeading5();
    h5_6.textContent = "Mongolian Beef";
    h5_6.classList.add("card-title", "mongolian-beef-title");
    div6_1_1.appendChild(h5_6);

    const p6 = createParagraph();
    p6.textContent = "This Mongolian beef recipe with green onions has a soy-based sauce for a Chinese-style beef dish."
    p6.classList.add("card-text", "text-center");
    div6_1_1.appendChild(p6);


    //7
    const div7 = createDiv();
    div7.classList.add("col-6", "col-lg-3", "mb-3", "hide", "card-prawn");
    div.appendChild(div7);

    const div7_1 = createDiv();
    div7_1.classList.add("card");
    div7_1.setAttribute("style", "height:25rem");
    div7.appendChild(div7_1);

    const img7 = createImg();
    img7.classList.add("prawn");
    img7.setAttribute("src", "./assets/prawn.jpg");
    img7.setAttribute("alt", "Prawn Pollichathu");
    div7_1.appendChild(img7);

    const div7_1_1 = createDiv();
    div7_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center")
    div7_1.appendChild(div7_1_1);

    const h5_7 = createHeading5();
    h5_7.textContent = "Prawn Pollichathu";
    h5_7.classList.add("card-title", "prawn-title");
    div7_1_1.appendChild(h5_7);

    const p7 = createParagraph();
    p7.textContent = "Cooked in coconut milk and an array of masalas, get to ready to experience the authentic flavours of this food.";
    p7.classList.add("card-text", "text-center");
    div7_1_1.appendChild(p7);

    //8
    const div8 = createDiv();
    div8.classList.add("col-6", "col-lg-3", "mb-3", "hide", "card-crab");
    div.appendChild(div8);

    const div8_1 = createDiv();
    div8_1.classList.add("card");
    div8_1.setAttribute("style", "height:25rem");
    div8.appendChild(div8_1);

    const img8 = createImg();
    img8.classList.add("crab");
    img8.setAttribute("src", "./assets/crab.jpg");
    img8.setAttribute("alt", "Goan Crab Curry");
    div8_1.appendChild(img8);

    const div8_1_1 = createDiv();
    div8_1_1.classList.add("card-body", "d-flex", "flex-column", "justify-content-center")
    div8_1.appendChild(div8_1_1);

    const h5_8 = createHeading5();
    h5_8.textContent = "Goan Crab Curry";
    h5_8.classList.add("card-title", "crab-title");
    div8_1_1.appendChild(h5_8);

    const p8 = createParagraph();
    p8.textContent = "This coastal favourite is cooked with coconut cream, Kashmiri chillies, cumin, cinnamon, toddy vinegar, etc.";
    p8.classList.add("card-text", "text-center");
    div8_1_1.appendChild(p8);

    return { div, div1, div2, div3, div4, div5, div6, div7, div8 }
})();

export const showMenu = function () {
    document.querySelector('.container').appendChild(menu.div);
    return true;
}

export const removeMenu = function () {
    document.querySelector('.container').removeChild(menu.div);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add("show-card")
    })
})

for (let i = 1; i < 9; i++) {
    observer.observe((Object.entries(menu))[i][1]);
}
