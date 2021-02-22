import React from 'react';
import { useSelector } from 'react-redux';

import { ErrorBoundary } from '../ErrorBoundary';
import { IResponse } from '../models/Response';
import { IStore } from '../models/Store';
import { CardList } from './CardList';

export const Content: React.FC = () => {
    const filteredRobots = useSelector<IStore, Array<IResponse>>((state) => {
        const { searchRobots } = state;
        if (searchRobots) {
            const { robots, searchField } = searchRobots;
            return robots?.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));
        }
        return [];
    });

    return (
        <div
            style={{ overflowX: 'hidden', overflowY: 'scroll', height: 'calc(100vh - 12.5rem)' }}
            className="d-flex justify-content-center"
        >
            <ErrorBoundary fallBackComponent={<h1>Something went wrong.</h1>}>
                <CardList robots={filteredRobots} />
            </ErrorBoundary>
        </div>
    );
};
