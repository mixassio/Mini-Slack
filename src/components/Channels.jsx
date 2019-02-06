import React from 'react';
import cn from 'classnames';
import { createSelector } from 'reselect';
import { ListGroup, Button } from 'react-bootstrap';
import connect from '../connect';

const getChannels = state => state.channels;
const channelsSelector = createSelector(
  getChannels,
  channels => Object.values(channels),
);
const mapStateToProps = state => ({
  channels: channelsSelector(state),
  setCurrentChannnelId: state.setCurrentChannnelId,
  currentChannelId: state.currentChannelId,
});

@connect(mapStateToProps)
class Channels extends React.Component {
  setChannel = channelId => () => {
    const { setCurrentChannnelId } = this.props;
    setCurrentChannnelId(channelId);
  };

  render() {
    const { channels, currentChannelId } = this.props;
    return (
      <ListGroup>
        {channels.map((el) => {
          const btnClass = cn({
            'm-1': true,
            active: el.id === currentChannelId,
          });
          return (
            <Button onClick={this.setChannel(el.id)} className={btnClass} key={el.id} variant="outline-success">{el.name}</Button>
          );
        })}
      </ListGroup>
    );
  }
}

export default Channels;
