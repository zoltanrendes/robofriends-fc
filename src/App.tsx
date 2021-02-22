import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Spinner } from 'reactstrap';
import { IStore } from './models/Store';
import { searchActions } from './redux/ducks/actions';
import { Header } from './components/Header';
import { Content } from './components/Content';

export const App: React.FC = () => {
    const dispatch = useDispatch();
    const isPending = useSelector<IStore, boolean>((state) => state.searchRobots?.isPending ?? false);

    useEffect(() => {
        dispatch(searchActions.requestRobots());
    }, [dispatch]);

    return (
        <Container className="text-center" fluid>
            <Header />
            {isPending && <Spinner size="lg" color="primary" />}
            <Content />
        </Container>
    );
};
