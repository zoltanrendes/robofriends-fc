import React from 'react';
import { Jumbotron, Navbar, Row, Col, Nav, NavItem, Input } from 'reactstrap';
import { BootstrapFill } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';
import { searchActions } from '../redux/ducks/actions';
import './Header.scss';

export const Header: React.FC = () => {
    const dispatch = useDispatch();
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
                                    aria-label="Search"
                                    placeholder="Search for name"
                                    onChange={(event) => {
                                        dispatch(searchActions.changeSearchField(event.target.value));
                                    }}
                                />
                            </Col>
                        </Row>
                    </NavItem>
                </Nav>
            </Navbar>
        </>
    );
};
