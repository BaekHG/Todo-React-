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
      // ()=> console.log(event.target.value)
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
  padding-left: 10px;
  font-size: 24px;
  font-weight: lighter;
  /* &:hover {
    opacity: 0.4;
  } */
`;
export default TodoRow;
