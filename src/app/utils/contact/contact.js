import {
    createDiv,
    createSpan,
    createImg,
    createFigure,
    createFigCaption
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

export const contact = (function () {
    //Parent of these elements below
    const div = createDiv();
    div.classList.add("row", "hide");
    div.setAttribute("style", "margin-top: 5rem");

    const div1 = createDiv();
    div1.classList.add("col-12", "d-flex", "justify-content-center");
    div.appendChild(div1);

    const figure = createFigure();
    figure.classList.add("figure", "border", "border-5", "p-3");
    div1.appendChild(figure);

    const img = createImg();
    img.classList.add("figure-img", "img-fluid", "rounded");
    img.setAttribute("src", "./assets/location.png");
    img.setAttribute("alt", "Location");
    figure.appendChild(img);

    const figCaption = createFigCaption();
    figCaption.classList.add("figure-caption", "d-flex", "align-items-center",
        "justify-content-center", "gap-3", "text-primary");
    figure.appendChild(figCaption);

    const span1 = createSpan();
    span1.textContent = "call"
    span1.classList.add("material-symbols-sharp");
    figCaption.appendChild(span1);

    const span2 = createSpan();
    span2.textContent = "123-456-789"
    figCaption.appendChild(span2);

    const span3 = createSpan();
    span3.textContent = "pin_drop"
    span3.classList.add("material-symbols-sharp");
    figCaption.appendChild(span3);

    const span4 = createSpan();
    span4.textContent = "Philippines"
    figCaption.appendChild(span4);

    return { div }

})();

export const showContact = function () {
    document.querySelector('.container').appendChild(contact.div);
    return true;
}

export const removeContact = function () {
    document.querySelector('.container').removeChild(contact.div);
    return;
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add("show")
    })
})

observer.observe(contact.div);