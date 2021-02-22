import React from 'react';
import { Provider } from 'react-redux';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';
import { AnyAction, CombinedState, Store } from 'redux';

import { IStore } from './models/Store';

export const mockStore = configureMockStore<IStore, any>([thunk, createPromise()]);

interface ITestProvider {
    store?: Store<CombinedState<IStore>, AnyAction> & {
        dispatch: unknown;
    };
    children: React.ReactNode;
}

const data: IStore = { searchRobots: { isPending: false, robots: [], searchField: '' } };

const defaultStore = mockStore(data);

export const TestProvider = ({ store, children }: ITestProvider) => (
    <Provider store={store ?? defaultStore}>{children}</Provider>
);

TestProvider.defaultProps = {
    store: defaultStore,
};
