import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';

const mapStateToProps = ({ currentChannelId, user, addMessageToState }) => ({
  addMessageToState,
  currentChannelId,
  user,
});

@connect(mapStateToProps)
@reduxForm({ form: 'inputForm' })
class FormMessage extends React.Component {
  submitMessage = (value) => {
    const {
      user,
      reset,
      addMessage,
      currentChannelId,
    } = this.props;
    return addMessage(value.text);
  };


  sendMessage = author => ({ message }) => {
    const { sendMessage, currentChannel } = this.props;
    return sendMessage({ currentChannel, message, author });
  };

  render() {
    return (
      <form className="form-inline" onSubmit={this.props.handleSubmit(this.submitMessage)}>
        <div className="form-group mx-3">
          <Field name="text" required component="input" type="text" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Send</button>
      </form>
    );
  }
}

export default FormMessage;
