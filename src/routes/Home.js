import React from 'react';
import styled from 'styled-components';
import Content from '../components/Content';
class Home extends React.Component {
  state = {
    query: '',
  };
  handleInputkeyPress = (event) => {
    // console.log(this.state.query);
    // const { query } = this.state;
    if (event.key === 'Enter') {
      this.setState({ query: event.target.value });
      event.target.value = '';
    }
  };

  componentDidUpdate() {
    console.log('updated');
  }
  render() {
    const { query } = this.state;
    return (
      <Container query={query}>
        <Input
          placeholder="테마를 입력하세요"
          onKeyPress={this.handleInputkeyPress}
        ></Input>
        <Content />
      </Container>
    );
  }
}
const Input = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  width: 190px;
  height: 33px;
  padding: 3px;
  background: transparent;
  outline: none;
  border: none;
  font-size: 22px;
  color: white;
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: black; */
  background: linear-gradient(
      to right,
      rgba(20, 20, 20, 0.1) 10%,
      rgba(20, 20, 20, 0.7) 70%,
      rgba(20, 20, 20, 1)
    ),
    url(https://source.unsplash.com/random/1920x1080?${(props) => props.query});
  background-size: cover;
`;

export default Home;
