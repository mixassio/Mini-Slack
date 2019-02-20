import React from 'react';
import cn from 'classnames';
import { Field, reduxForm } from 'redux-form';
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap';
import connect from '../connect';
import { channelsSelector } from '../selectors';
import DeleteChannel from './DeleteChannel';
import RenameChannel from './RenameChannel';


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
    const {
      channels, currentChannelId, handleSubmit, submitting,
    } = this.props;
    return (
      <ListGroup>
        <form className="form-inline m-1" onSubmit={handleSubmit(this.submitChannel)}>
          <Field name="text" required component="input" disabled={submitting} type="text" className="w-75 border border-info" />
          <button type="submit" className="ml-1 btn btn-info btn-sm" disabled={submitting}>NEW</button>
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
                  {<RenameChannel channel={el} />}
                  {<DeleteChannel channelId={el.id} />}
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
