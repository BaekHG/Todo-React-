import React from 'react';
import styled from 'styled-components';

function Content() {
  return <Container>Hello!!!!!!!!!!!!</Container>;
}

export default Content;

const Container = styled.div`
  position: absolute;
  right: 0;
  top: 33px;
  width: 500px;
  height: calc(100% - 33px);
  color: black;
  background: white;
`;
