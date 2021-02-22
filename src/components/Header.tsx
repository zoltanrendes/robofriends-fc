import React from 'react';
import { Jumbotron, Navbar, Row, Col, Nav, NavItem, Input } from 'reactstrap';
import { BootstrapFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions } from '../redux/ducks/actions';
import { IStore } from '../models/Store';
import './Header.scss';

export const Header: React.FC = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector<IStore, string>((state) => state.searchRobots?.searchField ?? '');
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchActions.changeSearchField(event.target.value));
    };
    return (
        <>
            <Jumbotron fluid className="text-center my-1 py-1">
                <p className="h2">Robofriends</p>
                <p>
                    This is the React.FC version of <a href="https://aneagoie.github.io/robofriends/">Robofriends</a>
                </p>
                <p>
                    Design: <BootstrapFill size={24} />
                    ootstrap
                </p>
            </Jumbotron>
            <Navbar color="primary" dark expand="md" className="rounded">
                <Nav navbar fill style={{ width: '100%' }} className="justify-content-center">
                    <NavItem>
                        <Row className="justify-content-center">
                            <Col sm={6}>
                                <Input
                                    type="text"
                                    aria-label="Search"
                                    placeholder="Search for name"
                                    onChange={handleInputChange}
                                    value={searchValue}
                                />
                            </Col>
                        </Row>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    );
};
