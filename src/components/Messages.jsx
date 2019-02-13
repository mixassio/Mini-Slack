import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import connect from '../connect';
import { messagesSelector } from '../selectors';

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
