import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <h2>The Shoppies</h2>
    </Wrapper>
  );
};
const Wrapper = styled.header`
  margin-bottom: 25px;
`;

export default Header;
