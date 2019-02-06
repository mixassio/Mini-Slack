import React from 'react';
import { Field, reduxForm } from 'redux-form';
import connect from '../connect';
import { UserConsumer } from '../context/UserContext';


const mapStateToProps = ({ currentChannelId, addMessage }) => ({
  addMessage,
  currentChannelId,
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
          <form className="form-inline mt-3" onSubmit={handleSubmit(this.submitMessage(user))}>
            <Field name="text" required component="input" type="text" disabled={submitting} className="w-75 border border-info" />
            <button type="submit" className="ml-1 btn btn-primary btn-sm" disabled={submitting}>Send</button>
          </form>
        )}
      </UserConsumer>
    );
  }
}

export default FormMessage;
