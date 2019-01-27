import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

const ListChannels = ({ channels }) => (
  <div className="mh-100 col-3 pl-0 my-3">
    <div className="row pl-5">
      <h5 className="pr-2 pt-2">Channels</h5>
    </div>
    <div className="list-group list-group-flush">
      {channels.map(el => (
        <a key={el.id} role="button" href="/" className="list-group-item list-group-item-action d-flex flex-row list-group-item-success">
          <span className="p-2 mr-auto">{el.name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default ListChannels;
// <ListGroupItem key={el.id}>{el.name}</ListGroupItem>)