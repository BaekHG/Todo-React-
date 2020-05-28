import React from 'react';
import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';
//  const [isOpen, setIsOpen] = React.useState(false);
class Edit extends React.Component {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    const { editable } = this.props;
    this.setState({ isOpen: editable });
  }
  render() {
    const { isOpen } = this.state;
    return (
      <Modal show={isOpen}>
        <Modal.Header>
          <Modal.Title>변경할 값을 입력하세요.</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Input
            placeholder="입력하세요."
            onKeyPress={this.props.onKeyPress}
          ></Input>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={this.props.handleCancle}>Cancel</button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const Input = styled.input`
  width: 100%;
`;
export default Edit;
