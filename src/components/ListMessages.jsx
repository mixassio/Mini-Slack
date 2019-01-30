import React from 'react';
import { createSelector } from 'reselect';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import connect from '../connect';

const getMessages = ({ messages, currentChannelId }) => ({ messages, currentChannelId });
const messagesSelector = createSelector(
  getMessages,
  state => Object.values(state.messages).filter(item => item.channelId === state.currentChannelId),
);
const mapStateToProps = state => ({
  messages: messagesSelector(state),
});

@connect(mapStateToProps)
class ListChannels extends React.Component {
  render() {
    const { messages } = this.props;
    return (
      <ListGroup>
        {messages.map(el => (
          <ListGroupItem key={el.id}>
            <i>{el.user}</i>
            {':  '}
            <b>{el.text}</b>
          </ListGroupItem>
        ))}
      </ListGroup>
    );
  }
}

export default ListChannels;
