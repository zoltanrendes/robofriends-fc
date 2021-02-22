import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'fetch-mock-jest';

import { App } from './App';
import { mockStore, TestProvider } from './TestUtils';
import { IStore } from './models/Store';
import { fetchResult } from './mocks/mockFetchResult';
import { API_LINK } from './redux/ducks/actions';

describe('App.tsx', () => {
    afterAll(() => {
        fetchMock.reset();
    });
    beforeEach(() => {
        fetchMock.mockReset();
    });
    it('renders header components', async () => {
        fetchMock.mock(API_LINK, fetchResult);
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
        await waitFor(() => {
            expect(fetchMock).toHaveLastFetched(API_LINK);
        });
    });
    it('renders content', () => {
        const data: IStore = {
            searchRobots: {
                isPending: false,
                robots: fetchResult,
                searchField: '',
            },
        };
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
});
