import React from 'react';
import styled from 'styled-components';
import Clock from './Clock';
import Todo from './Todo';
function Content() {
  return (
    <Container>
      <Clock />
      <Todo />
    </Container>
  );
}

export default Content;

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 33px;
  width: 500px;
  height: calc(100% - 33px);
  color: white;
  background: transparent;
`;
