import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';
import { UserConsumer } from '../context/UserContext';


const mapStateToProps = ({ currentChannelId, user, addMessageToState }) => ({
  addMessageToState,
  currentChannelId,
  user,
});

@connect(mapStateToProps)
@reduxForm({ form: 'inputForm' })
class FormMessage extends React.Component {
  submitMessage = user => async (value) => {
    const {
      reset,
      addMessage,
      currentChannelId,
    } = this.props;
    try {
      await addMessage({
        message: value.text,
        channelId: currentChannelId,
        user,
      });
      reset();
    } catch (e) {
      throw e;
    }
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <UserConsumer>
        {user => (
          <form className="form-inline" onSubmit={handleSubmit(this.submitMessage(user))}>
            <div className="form-group mx-3">
              <Field name="text" required component="input" type="text" disabled={submitting} />
            </div>
            <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>Send</button>
          </form>
        )}
      </UserConsumer>
    );
  }
}

export default FormMessage;
