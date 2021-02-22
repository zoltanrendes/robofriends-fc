import React from 'react';
import { Row, Col } from 'reactstrap';
import { IResponse } from '../models/Response';
import { RobotCard } from './RobotCard';

interface ICardList {
    robots: Array<IResponse>;
}

export const CardList: React.FC<ICardList> = ({ robots }: ICardList) => (
    <Row className="justify-content-center">
        {robots.map((robot) => (
            <Col
                key={robot.id}
                xs={5}
                sm={5}
                md={4}
                lg={3}
                xl={3}
                className="my-1 px-1 mx-0"
                style={{ minWidth: '17rem', maxWidth: '17rem' }}
            >
                <RobotCard robot={robot} />
            </Col>
        ))}
    </Row>
);
