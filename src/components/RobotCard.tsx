import React from 'react';
import { Card, CardImg, CardBody, CardSubtitle, CardTitle, CardText } from 'reactstrap';
import { IResponse } from '../models/Response';

const ROBOHASH_LINK = 'https://robohash.org/';

interface ICard {
    robot: IResponse;
}

export const RobotCard: React.FC<ICard> = ({ robot }: ICard) => (
    <Card key={robot.id}>
        <CardImg top width="100%" src={`${ROBOHASH_LINK}${robot.id}?size=200x200`} alt={robot.username} />
        <CardBody>
            <CardTitle tag="h5">{robot.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
                {robot.username}
            </CardSubtitle>
            <CardText>{robot.email}</CardText>
        </CardBody>
    </Card>
);
