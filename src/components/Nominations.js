import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { removeMovieFromNominations } from "../actions";
import { getNominationsArray } from "../reducers";

import MovieListItem from "./MovieListItem";

const Nominations = () => {
  const dispatch = useDispatch();

  const nominations = useSelector(getNominationsArray);

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
              isDisabled={false}
              action="Remove"
              onClick={() => {
                dispatch(removeMovieFromNominations(item.movieId));
              }}
            />
          );
        })}
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 30px;
  margin-left: 30px;
  padding: 15px 30px;
  background-color: white;
  width: 50%;
  min-height: 200px;
`;

export default Nominations;
