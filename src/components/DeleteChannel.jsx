import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import connect from '../connect';

const mapStateToProps = ({ deleteChannel }) => ({
  deleteChannel,
});

@connect(mapStateToProps)
class DeleteChannel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }

  delete = idChannel => async () => {
    const { deleteChannel } = this.props;
    try {
      await deleteChannel(idChannel);
    } catch (e) {
      throw e;
    }
  };

  handleClose = () => {
    this.setState({ show: false });
  }

  handleShow = () => {
    this.setState({ show: true });
  }

  render() {
    const { show } = this.state;
    const { channelId } = this.props;
    return (
      <>
        <Button size="sm" variant="outline-danger" onClick={this.handleShow}><span className="oi oi-x" /></Button>

        <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Channell</Modal.Title>
          </Modal.Header>
          <Modal.Body>This channel will be deleted with all messages</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>Close</Button>
            <Button variant="danger" onClick={this.delete(channelId)}>DELETE</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default DeleteChannel;