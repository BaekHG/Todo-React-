import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
const TODO = 'Todo_React';
class Todo extends React.Component {
  state = {
    toDoList: [],
  };
  handleInputKeyPress = (event) => {
    const {
      target: { value },
    } = event;
    if (event.key === 'Enter') {
      this.setState(
        (state) => ({ toDoList: [...state.toDoList, value] }),
        () => {
          localStorage.setItem(TODO, JSON.stringify(this.state.toDoList));
        }
      );
      event.target.value = '';
    }
  };

  handleClickRemove = (index) => {
    const { toDoList } = this.state;

    this.setState(
      (state) => ({
        toDoList: [
          ...state.toDoList.slice(0, index),
          ...state.toDoList.slice(index + 1),
        ],
      }),
      () => localStorage.setItem(TODO, JSON.stringify(this.state.toDoList))
    );
  };

  componentDidMount() {
    this.setState({
      toDoList: JSON.parse(localStorage.getItem(TODO)) || [],
    });
  }
  render() {
    const { toDoList } = this.state;
    return (
      <Container>
        <Input
          placeholder="할 일 추가"
          onKeyPress={this.handleInputKeyPress}
        ></Input>
        <TodoContainer>
          <TodoList
            todoList={toDoList}
            handleClickRemove={this.handleClickRemove}
          ></TodoList>
        </TodoContainer>
      </Container>
    );
  }
}

const TodoContainer = styled.div`
  text-align: center;
`;
const Container = styled.div`
  margin-top: 44px;
  text-align: center;
  list-style: none;
`;

const Input = styled.input`
  width: 80%;
  height: 33px;
  padding: 7px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
`;

export default Todo;
