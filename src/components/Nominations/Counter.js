import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getNominationsArray } from "../../reducers";

const Counter = () => {
  const nominationsArray = useSelector(getNominationsArray);
  return (
    <Wrapper>
      {nominationsArray.length !== 0 && `${nominationsArray.length} / 5`}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 15px;
  opacity: 0.8;
`;

export default Counter;
