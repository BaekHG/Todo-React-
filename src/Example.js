import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { ButtonGroup, DropdownButton, Dropdown, Button } from 'react-bootstrap';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonGroup vertical>
        <Button>Button</Button>
        <Button>Button</Button>

        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-vertical-dropdown-1"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <Button>Button</Button>
        <Button>Button</Button>

        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-vertical-dropdown-2"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <DropdownButton
          as={ButtonGroup}
          title="Dropdown"
          id="bg-vertical-dropdown-3"
        >
          <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
          <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
      </ButtonGroup>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        animation={true}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
