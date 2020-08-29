import React from "react";
import styled from "styled-components";

const MovieListItem = ({ title, year, children }) => {
  return (
    <Wrapper>
      <Name>{`${title} (${year})`}</Name>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  margin: 30px 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.p`
  padding: 0 10px;
`;

export default MovieListItem;
