import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { addMovieToNominations } from "../actions";

import MovieListItem from "./MovieListItem";

const SearchResults = () => {
  const dispatch = useDispatch();
  const {
    searchResults,
    searchTerm,
    searchError,
    nominations,
    listComplete,
  } = useSelector((state) => {
    return {
      searchResults: state.searchResults,
      searchTerm: state.searchTerm,
      searchError: state.searchError,
      nominations: state.nominations,
      listComplete: state.listComplete,
    };
  });

  if (searchError) {
    return (
      <Wrapper>
        <h3>Results for "{searchTerm}"</h3>
        <Error>{searchError}</Error>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h3>Results for "{searchTerm}"</h3>
      <ul>
        {searchResults.map((item) => {
          return (
            <MovieListItem
              key={`${item.Title}-${item.Year}`}
              title={item.Title}
              year={item.Year}
              movieId={item.imdbID}
            >
              <Button
                disabled={listComplete || nominations[item.imdbID]}
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
              >
                Nominate
              </Button>
            </MovieListItem>
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
  min-height: 200px;
`;

const Button = styled.button``;

const Error = styled.p`
  margin-top: 10px;
  color: red;
`;

export default SearchResults;
