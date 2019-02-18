import React from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import connect from '../connect';
import { UserConsumer } from '../context/UserContext';


const mapStateToProps = ({ currentChannelId, addMessage }) => ({
  addMessage,
  currentChannelId,
});

@connect(mapStateToProps)
@reduxForm({ form: 'newMessage' })
class FormMessage extends React.Component {
  constructor(props) {
    super(props);
    this.inputMessage = React.createRef();
  }

  componentDidMount() {
    console.log('didMount', this.inputMessage.current);
  }

  componentDidUpdate() {
    console.log('didUpdate', this.inputMessage.current);
    this.inputMessage.getRenderedComponent().focus();
  }

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
      throw new SubmissionError({ error: 'Somthing errors' });
    }
  };

  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <UserConsumer>
        {user => (
          <form className="form-inline mt-3" onSubmit={handleSubmit(this.submitMessage(user))}>
            <Field
              autoComplete="off"
              ref={this.inputMessage}
              withRef
              autoFocus
              name="text"
              required
              component="input"
              type="text"
              disabled={submitting}
              className="w-75 border border-info"
            />
            <button type="submit" className="ml-1 btn btn-primary btn-sm" disabled={submitting}>Send</button>
          </form>
        )}
      </UserConsumer>
    );
  }
}

export default FormMessage;
