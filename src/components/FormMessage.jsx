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
    reset();
    return addMessage({ message: value.text, channelId: currentChannelId, user });
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form className="form-inline" onSubmit={handleSubmit(this.submitMessage)}>
        <div className="form-group mx-3">
          <Field name="text" required component="input" type="text" />
        </div>
        <button type="submit" className="btn btn-primary btn-sm">Send</button>
      </form>
    );
  }
}

export default FormMessage;
