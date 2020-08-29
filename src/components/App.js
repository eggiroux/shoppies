import React from "react";
import styled from "styled-components";
import Globalstyles from "./Globalstyles";
import { useSelector, useDispatch } from "react-redux";

import { restartListProcess } from "../actions";

import Header from "./Header";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Nominations from "./Nominations";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function App() {
  const dispatch = useDispatch();
  const listSubmitted = useSelector((state) => state.listSubmitted);
  return (
    <Wrapper>
      <Globalstyles />
      <Header />
      <SearchBar />
      <Bottom>
        <SearchResults />
        <Nominations />
      </Bottom>
      <Snackbar
        open={listSubmitted}
        elevation={6}
        autoHideDuration={3000}
        onClose={() => {
          dispatch(restartListProcess());
        }}
      >
        <MuiAlert severity="success" variant="filled">
          List Complete! Congratulations!
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => {
              dispatch(restartListProcess());
            }}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </MuiAlert>
      </Snackbar>
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
