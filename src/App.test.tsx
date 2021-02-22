import React from 'react';
import { render, screen } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';

import { App } from './App';
import { mockStore, TestProvider } from './TestUtils';

import { IStore } from './models/Store';
import { mockFetchResult } from './mocks/mockFetchResult';
import { API_LINK } from './redux/ducks/actions';

const data: IStore = {
    searchRobots: {
        isPending: false,
        robots: mockFetchResult,
        searchField: '',
    },
};
describe('App.tsx', () => {
    afterAll(() => {
        fetchMock.reset();
    });
    beforeEach(() => {
        fetchMock.mockReset();
    });
    it('renders header components', async () => {
        fetchMock.mock(API_LINK, mockFetchResult);
        render(
            <TestProvider>
                <App />
            </TestProvider>,
        );

        const roboFriends = screen.getAllByText(/Robofriends/i);
        const textbox = screen.getByRole('textbox');
        const linkElement = screen.getByRole('link');
        const navElement = screen.getByRole('navigation');
        expect(roboFriends.length).toBe(2);
        expect(textbox).toBeInTheDocument();
        expect(linkElement).toBeInTheDocument();
        expect(navElement).toBeInTheDocument();
    });
    it('renders content', () => {
        const defaultStore = mockStore(data);
        render(
            <TestProvider store={defaultStore}>
                <App />
            </TestProvider>,
        );
        const imgElements = screen.getAllByRole('img');
        const headingElements = screen.getAllByRole('heading');
        expect(imgElements.length).toBe(10);
        expect(headingElements.length).toBe(20);
    });
    // userEvent.type not working remarked until find out why
    // it('handles user input changes', () => {
    //     fetchMock.mock(API_LINK, mockFetchResult);
    //     const store = mockStore(data);
    //     const { debug } = render(
    //         <TestProvider store={store}>
    //             <App />
    //         </TestProvider>,
    //     );
    //     userEvent.type(screen.getByRole('textbox'), 'clementin');
    //     expect(screen.getByRole('textbox')).toHaveValue('clementin');
    // });
});
