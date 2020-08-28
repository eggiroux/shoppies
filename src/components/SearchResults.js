import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { addMovieToNominations } from "../actions";

import MovieListItem from "./MovieListItem";

const SearchResults = () => {
  const dispatch = useDispatch();
  const { searchResults, searchTerm, nominations } = useSelector((state) => {
    return {
      searchResults: state.searchResults,
      searchTerm: state.searchTerm,
      nominations: state.nominations,
    };
  });
  return (
    <Wrapper>
      <h3>Results for "{searchTerm}"</h3>
      <ul>
        {searchResults.map((item) => {
          const isDisabled = nominations[item.imdbID];
          return (
            <MovieListItem
              key={item.Title}
              title={item.Title}
              year={item.Year}
              movieId={item.imdbID}
              isDisabled={isDisabled}
              action="Nominate"
              onClick={() => {
                dispatch(
                  addMovieToNominations({
                    movieId: item.imdbID,
                    movie: {
                      movieId: item.imdbID,
                      title: item.Title,
                      year: item.Year,
                    },
                  })
                );
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
  padding: 15px 30px;
  background-color: white;
  width: 50%;
`;

export default SearchResults;
