import React from 'react';
import cn from 'classnames';
import { createSelector } from 'reselect';
import { Field, reduxForm } from 'redux-form';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';
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
          <Field name="text" required component="input" type="text" className="w-75 border border-info" />
          <button type="submit" className="ml-1 btn btn-info btn-sm">NEW</button>
        </form>
        {channels.map((el) => {
          const btnClass = cn({
            'w-100': true,
            'm-1': true,
            active: el.id === currentChannelId,
          });
          return (
            <ButtonGroup size="sm" key={el.id}>
              <Button size="sm" onClick={this.setChannel(el.id)} className={btnClass} variant="outline-success">{el.name}</Button>
              {el.removable
              && (
                <ButtonGroup className="m-1">
                  <Button size="sm" variant="outline-warning"><span className="oi oi-pencil" /></Button>
                  <Button size="sm" variant="outline-danger"><span className="oi oi-x" /></Button>
                </ButtonGroup>
              )
              }
            </ButtonGroup>
          );
        })}
      </ListGroup>
    );
  }
}

export default Channels;
