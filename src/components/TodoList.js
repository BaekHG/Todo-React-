import React from 'react';
import styled from 'styled-components';
import TodoRow from './TodoRow';

const TodoList = ({ todoList, handleClickRemove, handleModify }) => (
  <Container>
    {todoList.map((todo, index) => (
      <Li id={index}>
        <TodoRow todo={todo} id={index} key={index}></TodoRow>
        <ModifyAndReomve>
          <Button onClick={() => handleModify(index)}>
            <span>📝</span>
          </Button>

          <Button onClick={() => handleClickRemove(index)}>
            <span>❌</span>
          </Button>
        </ModifyAndReomve>
      </Li>
    ))}
  </Container>
);

const ModifyAndReomve = styled.div`
  display: flex;
`;
const Li = styled.li`
  display: flex;
  width: 80%;

  justify-content: space-between;

  /* padding: 7px; */
  margin: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;

  &:hover {
    /* opacity: 0.7; */
    border-color: rgb(51, 105, 191);
  }
`;
const Button = styled.button`
  border: none;
  font-size: 26px;
  background-color: transparent;
  cursor: pointer;
  padding: 1px 3px;

  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transform: scale(1);

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -ms-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
  &:focus {
    outline: none;
  }
  &:hover {
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
    -ms-transform: scale(1.3);
    -o-transform: scale(1.3);
    color: white;
    border-color: transparent;
    transform: scale(1.3);
    outline: none;
  }
`;

const Container = styled.div`
  margin-top: 33px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default TodoList;
