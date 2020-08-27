import React from "react";
import styled from "styled-components";
import Globalstyles from "./Globalstyles";

import Header from "./Header";

function App() {
  return (
    <Wrapper>
      <Globalstyles />
      <Header />
      {/* <SearchField />
      <Results />
      <MovieList /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 35px 100px;
`;

export default App;
