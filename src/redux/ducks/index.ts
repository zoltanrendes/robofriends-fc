import { combineReducers } from 'redux';

import { searchRobots } from './searchReducer';
import { IStore } from '../../models/Store';

export const appReducer = combineReducers<IStore>({
    searchRobots,
});
