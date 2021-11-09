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
        svg: svg_home,
        filters: [
            {
                query: "filter by name",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by age",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by inscription date",
                options: [ "asc order", "desc order" ]
            }
        ]
    },
    PROFILE: {
        component: <Profile />,
        svg: svg_profile,
        filters: [
            {
                query: "filter by name",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by age",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by inscription date",
                options: [ "asc order", "desc order" ]
            }
        ]
    },
    SEARCH: {
        component: <Search />,
        svg: svg_search,
        filters: [
            {
                query: "filter by email",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by name",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by username",
                options: [ "asc order", "desc order" ]
            }
        ]
    }, 
    CHARACTERS: {
        component: <Characters />,
        svg: svg_characters,
        filters: [
            {
                query: "filter by family",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by gift",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by episode",
                options: [ "asc order", "desc order" ]
            }
        ]
    },
    PLANETS: {
        component: <Planets />,
        svg: svg_planets,
        filters: [
            {
                query: "filter by weight",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by distance",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by size",
                options: [ "asc order", "desc order" ]
            }
        ]
    },
    STARSHIPS: {
        component: <Starships />,
        svg: svg_starship,
        filters: [
            {
                query: "filter by length",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by capacity",
                options: [ "asc order", "desc order" ]
            },
            {
                query: "filter by speed",
                options: [ "asc order", "desc order" ]
            }
        ]
    },
}

export default menuConfig;
