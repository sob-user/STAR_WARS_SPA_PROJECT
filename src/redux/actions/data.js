import STARWARS_API from "../../axios/swapi.dev";
import { checkPersistentDataExist, setPersitentData } from "../../utils/storage";
import { LOADING_DATA, DATA_LOADED, DATA_REFRESH } from "./types";


const dispatchLoadingData = () => {
    return { type: LOADING_DATA };
}

const dispatchDataLoaded = () => {
    return { type: DATA_LOADED };
}

const dispatchDataRefresh = () => {
    return { type: DATA_REFRESH };
}

const getPersitentData = (dispatch) => {
    dispatch(dispatchDataLoaded());
    dispatch(dispatchDataRefresh());
}

const checkIfTheFecthNeeded = (dispatch) => {
    dispatch(dispatchLoadingData())
    checkPersistentDataExist() ? getPersitentData(dispatch) : getAllRessources(dispatch);
}

async function getAllRessources(dispatch) {
    try {
        const resources = [
            "films", 
            "people", 
            "planets", 
            "species", 
            "starships", 
            "vehicles" 
        ];

        let payload = {};

        for (let ressource = 0; ressource < resources.length; ressource++) {
            const results = await STARWARS_API.get(resources[ressource]);
            const numOfResults = results.data.count;
            const numOfResultsByPages = results.data.results.length;
            const numOfPages = Math.ceil(numOfResults / numOfResultsByPages)

            const data = [];
            const TOGGLE_INDEX = numOfPages === 1 ? 0 : 1;
            const TOGGLE_PAGE = numOfPages === 1 ? 1 : 0;

            setTimeout(async() => {
                for (let page = TOGGLE_INDEX; page < numOfPages; page++) {
                    const fetch = await STARWARS_API.get(
                        resources[ressource] + "/?page=" + (page + TOGGLE_PAGE)
                    );

                    const characters = fetch.data.results;
                    data.push(characters)

                    if(ressource < resources.length) {
                        if(page < numOfPages) {
                            payload[resources[ressource]] = data
                            setPersitentData(payload);
                            dispatch(dispatchDataLoaded());
                            dispatch(dispatchDataRefresh());
                        }
                    }
                }
            }, 2000)

            payload[resources[ressource]] = data
        }

    } catch (err) {
        console.log(err)
    }
}

export default checkIfTheFecthNeeded;
