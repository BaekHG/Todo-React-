import React from 'react';
import styled from 'styled-components';
import TodoRow from './TodoRow';

const TodoList = ({ todoList, handleClickRemove }) => (
  <Container>
    {todoList.map((todo, index) => (
      <li id={index}>
        <TodoRow todo={todo} id={index} key={index}></TodoRow>
        <Button onClick={() => handleClickRemove(index)}>❌</Button>
      </li>
    ))}
  </Container>
);

const Button = styled.button`
  border: none;
  background-color: transparent;
`;

const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TodoList;
