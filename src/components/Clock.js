import React from 'react';
import styled from 'styled-components';

// function Clock() {
//   const date = new Date();
//   //   console.log(date);
//   const str = 'asdsa';
//   return (
//     <div>
//       <Container>
//         <CurDate>{date.getHours()}</CurDate>
//         <CurDay>요일</CurDay>
//         <CurTime>시간</CurTime>
//       </Container>
//     </div>
//   );
// }

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    setInterval(this.getDate, 1000);
  }

  getDate = () => {
    this.setState({
      date: new Date(),
    });
  };
  render() {
    const { date } = this.state;
    return (
      <Container>
        <CurDate>
          {date.getFullYear()} / {date.getMonth() + 1} / {date.getDate()}
        </CurDate>
        <CurDay>
          {date.getDay() === 0
            ? '일요일'
            : date.getDay() === 1
            ? '월요일'
            : date.getDay() === 2
            ? '화요일'
            : date.getDay() === 3
            ? '수요일'
            : date.getDay() === 4
            ? '목요일'
            : date.getDay() === 5
            ? '금요일'
            : '토요일'}
        </CurDay>
        <CurTime>
          {date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}
          &nbsp;:&nbsp;
          {date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}
          &nbsp;:&nbsp;
          {date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}
          {/* {date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()} :{' '}
          {date.getMinutes() >= 10
            ? date.getMinutes()
            : '0' + date.getMinutes()}{' '}
          :{' '}
          {date.getSeconds() >= 10
            ? date.getSeconds()
            : '0' + date.getSeconds()} */}
        </CurTime>
      </Container>
    );
  }
}
const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

const CurDate = styled.div`
  font-size: 24px;
`;

const CurDay = styled.div`
  font-style: italic;
`;

const CurTime = styled.div`
  font-size: 55px;
  font-weight: 600;
`;
export default Clock;
