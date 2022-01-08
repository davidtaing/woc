import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faBookReader,
    faChalkboardTeacher,
    faCheckSquare,
    faCoffee,
    faComment,
    faDesktop,
    fas,
} from "@fortawesome/free-solid-svg-icons";

/* 
    handling fort awesome icon imports

    Note: is this being used? there are 2 coppies
*/

// free-solid-svg-icons
library.add(fas, faCoffee, faDesktop, faCheckSquare, faCoffee, faChalkboardTeacher, faBookReader, faComment);

const FontAwesomeGlobalIcons = ({ children }) => <>{children}</>;

export default FontAwesomeGlobalIcons;
