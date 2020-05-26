import React from 'react';
import styled from 'styled-components';

// const TodoRow = ({ todo }) => {
//   return (
// <Container>
//   <Text>{todo}</Text>
// </Container>
//   );
// };
class TodoRow extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.todo === nextProps.todo) {
      return false;
    }
    return true;
  }
  render() {
    const { todo } = this.props;
    return (
      <Container>
        <Text>{todo}</Text>
      </Container>
    );
  }
}
const Container = styled.span`
  margin: 13px 0;
  width: 80%;
  text-align: left;
`;

const Text = styled.div`
  display: inline-block;
  cursor: pointer;
  font-size: 26px;
  /* &:hover {
    opacity: 0.4;
  } */
`;
export default TodoRow;
