import { navbar } from "./navbar";
import { main } from "./main";
import { section_1 } from "./section_1";
import { section_2 } from "./section_2";
import { section_3 } from "./section_3";
import { section_4 } from "./section_4";
export const showHome = function () {
    document.querySelector('.container').appendChild(navbar.nav);
    document.querySelector('.container').appendChild(main.div);
    document.querySelector('.container').appendChild(section_1.div);
    document.querySelector('.container').appendChild(section_2.div);
    document.querySelector('.container').appendChild(section_3.div);
    document.querySelector('.container').appendChild(section_4.div);
    return true;
}

export const removeHome = function () {
    document.querySelector('.container').removeChild(main.div);
    document.querySelector('.container').removeChild(section_1.div);
    document.querySelector('.container').removeChild(section_2.div);
    document.querySelector('.container').removeChild(section_3.div);
    document.querySelector('.container').removeChild(section_4.div);
    return;
}