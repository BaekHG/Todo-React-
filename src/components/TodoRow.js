import React from 'react';
import styled from 'styled-components';

const TodoRow = ({ todo, id }) => {
  return (
    <span>
      {id}...{todo}
    </span>
  );
};
const Button = styled.button`
  border: none;
  background-color: transparent;
`;
const Container = styled.div``;

export default TodoRow;
