import React from 'react';
import { createSelector } from 'reselect';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import connect from '../connect';

const getChannels = state => state.channels;
const channelsSelector = createSelector(
  getChannels,
  channels => Object.values(channels),
);
const mapStateToProps = state => ({
  channels: channelsSelector(state),
});

@connect(mapStateToProps)
class ListChannels extends React.Component {
  render() {
    const { channels } = this.props;
    return (
      <ListGroup className="w-100">
        {channels.map(el => <ListGroupItem key={el.id}>{el.name}</ListGroupItem>)}
      </ListGroup>
    );
  }
}

export default ListChannels;
