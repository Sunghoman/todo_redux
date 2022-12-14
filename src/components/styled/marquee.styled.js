import styled from "styled-components";

const Marquee = styled.div`
  overflow: hidden;
  div {
    position: relative;
    animation: Marquee linear 20s infinite;
    &:hover {
      animation-play-state: paused;
    }
    -webkit-user-select:none;
    -moz-user-select:none;
    -ms-user-select:none;
    user-select:none
  }

  @keyframes Marquee {
    0% { right: -100% }
    100% { right: 100% }
  }
`
export default Marquee;