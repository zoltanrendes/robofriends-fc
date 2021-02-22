import { createStore, AnyAction, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createPromise } from 'redux-promise-middleware';

/* eslint-disable-next-line import/no-extraneous-dependencies */
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';

import { appReducer } from './ducks';
import { IStore } from '../models/Store';

const rootReducer = (state: IStore | undefined, action: AnyAction) => appReducer(state, action);

const composeEnhancers = composeWithDevTools({});

export const middleware: Array<any> = [thunk, createPromise()];

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
