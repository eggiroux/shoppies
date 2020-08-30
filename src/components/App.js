import React from "react";
import styled from "styled-components";
import Globalstyles from "./Globalstyles";

import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";
import Alerts from "./Alerts";

function App() {
  return (
    <Wrapper>
      <Globalstyles />
      <Header />
      <SearchBar />
      <Bottom>
        <SearchResults />
        <Nominations />
      </Bottom>
      <Alerts />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 35px 150px;
`;

const Bottom = styled.div`
  display: flex;
  align-items: start;
`;

export default App;
