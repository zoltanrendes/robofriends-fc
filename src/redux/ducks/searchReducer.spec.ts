import { ActionType } from 'redux-promise-middleware';
import { fetchResult } from '../../mocks/mockFetchResult';
import { ISearch } from '../../models/Search';
import { CHANGE_SEARCHFIELD, REQUEST_ROBOTS } from './const';
import { searchRobots } from './searchReducer';

const initialState: ISearch = { isPending: false, robots: [], searchField: '' };

describe('reducer', () => {
    it('should return the initial state', () => {
        expect(searchRobots(null)).toEqual(null);
    });
    it('should handle CHANGE_SEARCHFIELD', () => {
        const check = 'Chnged search';
        expect(
            searchRobots(initialState, {
                type: CHANGE_SEARCHFIELD,
                payload: check,
            }),
        ).toEqual({ ...initialState, searchField: check });
    });
    it(`should handle ${REQUEST_ROBOTS}_${ActionType.Fulfilled}`, () => {
        expect(
            searchRobots(initialState, {
                type: `${REQUEST_ROBOTS}_${ActionType.Fulfilled}`,
                payload: fetchResult,
            }),
        ).toEqual({ ...initialState, robots: fetchResult });
    });
    it(`should handle ${REQUEST_ROBOTS}_${ActionType.Pending}`, () => {
        expect(
            searchRobots(initialState, {
                type: `${REQUEST_ROBOTS}_${ActionType.Pending}`,
                payload: '',
            }),
        ).toEqual({ ...initialState, isPending: true });
    });
    it(`should handle ${REQUEST_ROBOTS}_${ActionType.Rejected}`, () => {
        expect(
            searchRobots(initialState, {
                type: `${REQUEST_ROBOTS}_${ActionType.Rejected}`,
                payload: '',
            }),
        ).toEqual({ ...initialState, isPending: false });
    });
});
