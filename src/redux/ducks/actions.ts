import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS } from './const';

export const API_LINK = 'https://jsonplaceholder.typicode.com/users';

const apiCall = (link: string) => fetch(link).then((response) => response.json());
const changeSearchField = (text: string) => ({
    type: CHANGE_SEARCHFIELD,
    payload: text,
});

const requestRobots = () => ({
    type: REQUEST_ROBOTS,
    payload: apiCall(API_LINK),
});

export const searchActions = { changeSearchField, requestRobots };
