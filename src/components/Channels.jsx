import React from 'react';
import cn from 'classnames';
import { createSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form';
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
  addChannel: state.addChannel,
});

@connect(mapStateToProps)
@reduxForm({ form: 'newChannel' })
class Channels extends React.Component {
  setChannel = channelId => () => {
    const { setCurrentChannnelId } = this.props;
    setCurrentChannnelId(channelId);
  };

  submitChannel = async (value) => {
    const { reset, addChannel } = this.props;
    try {
      await addChannel(value.text);
      reset();
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { channels, currentChannelId, handleSubmit } = this.props;
    return (
      <ListGroup>
        <form className="form-inline m-1" onSubmit={handleSubmit(this.submitChannel)}>
          <Field name="text" required component="input" type="text" className="w-75 border border-success" />
          <button type="submit" className="ml-1 btn btn-success btn-sm">NEW</button>
        </form>
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
