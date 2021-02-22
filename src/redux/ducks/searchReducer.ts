import { Action } from 'redux';
import { ActionType } from 'redux-promise-middleware';
import update from 'immutability-helper';

import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS } from './const';
import { ISearch } from '../../models/Search';
import { IResponse } from '../../models/Response';

interface ISearchFulfilledAction extends Action<string> {
    payload: Array<IResponse>;
}

interface IChangeSearchFieldAction extends Action<string> {
    payload: string;
}

export type ISearchAction = ISearchFulfilledAction | IChangeSearchFieldAction | undefined;

const initialState: ISearch = { isPending: false, robots: [], searchField: '' };

export const searchRobots = (state: ISearch | null = initialState, action: ISearchAction = undefined) => {
    if (action !== undefined) {
        const { type } = action;
        switch (type) {
            case CHANGE_SEARCHFIELD: {
                const { payload } = action as IChangeSearchFieldAction;
                return update(state, {
                    searchField: { $set: payload },
                });
            }
            case `${REQUEST_ROBOTS}_${ActionType.Fulfilled}`: {
                const { payload } = action as ISearchFulfilledAction;
                return update(state, {
                    isPending: { $set: false },
                    robots: { $set: payload },
                });
            }
            case `${REQUEST_ROBOTS}_${ActionType.Pending}`: {
                return update(state, {
                    isPending: { $set: true },
                });
            }
            case `${REQUEST_ROBOTS}_${ActionType.Rejected}`: {
                return update(state, {
                    isPending: { $set: false },
                });
            }
            default:
                return state;
        }
    }

    return state;
};
