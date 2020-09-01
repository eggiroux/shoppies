import React from "react";
import styled from "styled-components";
import { VALUES } from "../../constants";

//the counter is more of a cosmetic component, so get his values as props instead of using the redux setup
const Counter = ({ listStatus, listLength }) => {
  return (
    <Wrapper>
      {/* if the list is not empty, show the counter to remind the user how many film should be added */}
      {listStatus !== "empty" && `${listLength} / ${VALUES.MAX_ITEMS_ON_LIST}`}
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
