import React from "react";
import styled from "styled-components";
import Globalstyles from "./Globalstyles";

import Header from "./Header";
import SearchBar from "./SearchBar";

function App() {
  return (
    <Wrapper>
      <Globalstyles />
      <Header />
      <SearchBar />
      {/*<Results />
      <MovieList /> */}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 35px 200px;
`;

export default App;
