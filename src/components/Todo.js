import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import Edit from './Edit';
const TODO = 'Todo_React';
class Todo extends React.Component {
  state = {
    toDoList: [],
    isEdit: false,
    editIndex: 1,
  };
  handleInputKeyPress = (event) => {
    const {
      target: { value },
    } = event;

    if (event.key === 'Enter') {
      if (value === '') {
        alert('Todo를 입력해주세요.');
        return;
      }
      this.setState(
        (state) => ({ toDoList: [...state.toDoList, value] }),
        () => localStorage.setItem(TODO, JSON.stringify(this.state.toDoList))
      );
      event.target.value = '';
    }
  };

  handleClickRemove = (index) => {
    if (window.confirm('목록에서 삭제하시겠습니까?')) {
      this.setState(
        (state) => ({
          toDoList: [
            ...state.toDoList.slice(0, index),
            ...state.toDoList.slice(index + 1),
          ],
        }),
        () => localStorage.setItem(TODO, JSON.stringify(this.state.toDoList))
      );
    }
  };
  handleCancle = () => this.setState({ isEdit: false });
  handleInputEditKeyPress = (event) => {
    const {
      target: { value },
    } = event;
    console.log();
    const { editIndex } = this.state;
    if (event.key === 'Enter') {
      if (value === '') {
        alert('변경할 값을 입력해주세요.');
        return;
      }
      this.setState(
        (state) => ({
          isEdit: false,
          toDoList: [
            ...state.toDoList.slice(0, editIndex),
            value,
            ...state.toDoList.slice(editIndex + 1),
          ],
        }),
        () => localStorage.setItem(TODO, JSON.stringify(this.state.toDoList))
      );
      event.target.value = '';
    }
  };
  handleModify = (index) => {
    this.setState({ isEdit: true, editIndex: index });
  };
  handleClickRemoveAll = () => {
    if (window.confirm('목록 전체를 삭제하시겠습니까?')) {
      this.setState({ toDoList: [] }, () => localStorage.clear());
    }
  };
  componentDidMount() {
    this.setState({
      toDoList: JSON.parse(localStorage.getItem(TODO)) || [],
    });
  }
  render() {
    const { toDoList, isEdit } = this.state;
    return (
      <Container>
        {isEdit ? (
          <Edit
            placeholder="할 일 변경"
            onKeyPress={this.handleInputEditKeyPress}
            editable={isEdit}
            handleCancle={this.handleCancle}
          />
        ) : null}
        <Button onClick={this.handleClickRemoveAll}>전체삭제</Button>
        <Input
          placeholder="할 일 추가"
          onKeyPress={this.handleInputKeyPress}
        ></Input>
        <TodoContainer>
          <TodoList
            todoList={toDoList}
            handleClickRemove={this.handleClickRemove}
            handleModify={this.handleModify}
            isEdit={isEdit}
          ></TodoList>
        </TodoContainer>
      </Container>
    );
  }
}

// const Edit = styled.input``;
const Button = styled.button`
  height: 100%;
  width: auto;
  margin: 22px;
  padding: 10px;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 15px;
  font-weight: lighter;
  color: white;
  cursor: pointer;

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
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -o-transform: scale(1.1);
    color: white;
    transform: scale(1.1);
  }
`;
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
  height: 40px;

  padding: 10px 10px;
  outline: none;
  border: 1px solid silver;
  border-radius: 11px;
  background: transparent;
  font-size: 22px;
  color: white;
`;

export default Todo;
