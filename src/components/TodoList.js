import React from 'react';
import styled from 'styled-components';
import TodoRow from './TodoRow';

const TodoList = ({ todoList, handleClickRemove }) => (
  <Container>
    {todoList.map((todo, index) => (
      <li id={index}>
        <TodoRow todo={todo} id={index} key={index}></TodoRow>
        <Button onClick={() => handleClickRemove(index)}>
          <span>❌</span>
        </Button>
      </li>
    ))}
  </Container>
);

const Button = styled.button`
  border: none;
  font-size: 32px;
  background-color: transparent;
  cursor: pointer;
`;

const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TodoList;
