import styled from "styled-components";
import Marquee from "../styled/marquee.styled";

const Header = () => {

  function getDay() {
    //yyyy-mm-dd 포맷 날짜 생성
    var day = new Date();
    return day.getFullYear() + ". " 
    + ((day.getMonth() + 1) > 9 ? (day.getMonth() + 1).toString() : "0" + (day.getMonth() + 1)) 
    + ". " + (day.getDate() > 9 ? day.getDate().toString() : "0" + day.getDate().toString())
  }

  return (
    <HeaderBox>
      <h1>SungHo's TODO LIST.</h1>
      <div className="tag"> { getDay() } </div>
      <hr/>
      {/* <marquee width="100%" direction="left">
      </marquee> */}
      {/* 이거 크롬에선 잘 되는데 다른 브라우저에서는 좀 끊김 */}
      {/* 공식문서에서도 쓰지 말라고 함 */}
      <Marquee>
        <div>항해99 리액트 숙련주차 과제.</div>
        <div>마우스 올리면 멈춤</div>
      </Marquee>
    </HeaderBox>
  )
}

export default Header;

const HeaderBox = styled.header`
  padding: 15px;
  color: #22313F;
  font-size: 1.6em;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  background: whitesmoke;
  & h1 {
    margin: 0;
  }
  & .tag {
      padding: 0;
      color: #3A539B;
      font-weight: bold;
      font-size: .7em;
      margin: 0 auto;
    }
`