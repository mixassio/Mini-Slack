import React from 'react';
import { Button, Modal } from 'react-bootstrap';


class DeleteChannel extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <>
        <Button size="sm" variant="outline-danger" onClick={this.handleShow}><span className="oi oi-x" /></Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Channell</Modal.Title>
          </Modal.Header>
          <Modal.Body>This channel will be deleted with all messages</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="danger" onClick={this.handleClose}>
              DELETE
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
export default DeleteChannel;
