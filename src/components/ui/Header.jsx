import styled from "styled-components";
import Marquee from "../styled/marquee.styled";

const Header = () => {
  return (
    <HeaderBox>
      <h1>TODO</h1>
      <div className="tag"> An easy way to manage your work.</div>
      <hr/>
      {/* <marquee width="100%" direction="left">
        <span>TodoList 입니다. 근데 이제 Redux를 곁들인</span>
      </marquee> */}
      <Marquee><div>TodoList 입니다. 근데 이제 Redux를 곁들인</div></Marquee>
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