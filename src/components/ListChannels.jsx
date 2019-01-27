import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ListChannels = ({ channels }) => (
  <ListGroup>
    {channels.map(el => <ListGroupItem key={el.id}>{el.name}</ListGroupItem>)}
  </ListGroup>
);

export default ListChannels;
