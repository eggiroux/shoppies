import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { removeMovieFromNominations } from "../actions";
import { getNominationsArray } from "../reducers";

import MovieListItem from "./MovieListItem";

const Nominations = () => {
  const dispatch = useDispatch();

  const nominations = useSelector(getNominationsArray);
  const listComplete = useSelector((state) => state.listComplete);

  return (
    <Wrapper>
      <h3>Nominations</h3>
      <ul>
        {nominations.map((item) => {
          return (
            <MovieListItem
              key={item.title}
              title={item.title}
              year={item.year}
              action="Remove"
              onClick={() => {
                dispatch(removeMovieFromNominations(item.movieId));
              }}
            />
          );
        })}
      </ul>
      {listComplete && <Submit>Submit Nominations</Submit>}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 30px;
  padding: 15px 30px;
  background-color: white;
  width: 50%;
  min-height: 200px;
  position: relative;
`;

const Submit = styled.button`
  border-radius: 5px;
  padding: 10px 40px;
  margin: 0 auto;
`;

export default Nominations;
