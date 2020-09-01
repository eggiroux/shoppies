import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { COLORS } from "../constants";

import { addMovieToNominations } from "../actions";

import MovieListItem from "./MovieListItem";

const SearchResults = () => {
  const dispatch = useDispatch();
  const {
    searchStatus,
    searchResults,
    searchTerm,
    searchError,
    nominations,
    listComplete,
  } = useSelector((state) => {
    return {
      searchStatus: state.search.status,
      searchResults: state.search.results,
      searchTerm: state.search.term,
      searchError: state.search.error,
      nominations: state.list.nominations,
    };
  });

  //early return when search went wrong, display the error
  if (searchStatus === "error") {
    return (
      <Wrapper>
        <h3>Results {searchTerm && `for "${searchTerm}"`}</h3>
        <Error>{searchError}</Error>
      </Wrapper>
    );
  }

  //when there are no errors, show the search results
  return (
    <Wrapper>
      <h3>Results {searchTerm && `for "${searchTerm}"`}</h3>
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
  padding: 15px 30px;
  background-color: white;
  width: 50%;
  min-height: 200px;
  background-color: ${COLORS.contour};
  border-radius: 6px;
  flex: 5;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: ${COLORS.accept};
  padding: 10px 12px;
  border-radius: 6px;
  border: 1px solid ${COLORS.primary};

  &:disabled {
    border: none;
  }
`;

const Error = styled.p`
  margin-top: 10px;
  color: ${COLORS.cancel};
  font-weight: bold;
`;

export default SearchResults;
