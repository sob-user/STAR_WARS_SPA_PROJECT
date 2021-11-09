import Home from "../app/pages/auth/home";
import Profile from "../app/pages/auth/profile";
import Search from "../app/pages/auth/search";
import Characters from "../app/pages/auth/characters";
import Planets from "../app/pages/auth/planets";
import Starships from "../app/pages/auth/starships";

import svg_home from "../app/svg/home.svg";
import svg_profile from "../app/svg/profile.svg";
import svg_search from "../app/svg/search.svg";
import svg_characters from "../app/svg/characters.svg";
import svg_planets from "../app/svg/planet.svg";
import svg_starship  from "../app/svg/starship.svg";

const menuConfig = {
    HOME: {
        component: <Home />,
        svg: svg_home
    },
    PROFILE: {
        component: <Profile />,
        svg: svg_profile
    },
    SEARCH: {
        component: <Search />,
        svg: svg_search
    }, 
    CHARACTERS: {
        component: <Characters />,
        svg: svg_characters
    },
    PLANETS: {
        component: <Planets />,
        svg: svg_planets
    },
    STARSHIPS: {
        component: <Starships />,
        svg: svg_starship
    },
}

export default menuConfig;
