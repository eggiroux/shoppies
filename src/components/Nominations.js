import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { removeMovieFromNominations, submitList } from "../actions";
import { getNominationsArray } from "../reducers";

import MovieListItem from "./MovieListItem";
import UnstyledButton from "./UnstyledButton";

const Nominations = () => {
  const dispatch = useDispatch();

  const nominationsArray = useSelector(getNominationsArray);
  const { listComplete, nominations } = useSelector((state) => {
    return { listComplete: state.listComplete, nominations: state.nominations };
  });

  React.useEffect(() => {
    localStorage.setItem("nominations", JSON.stringify(nominations));
  }, [nominations]);

  return (
    <Wrapper>
      <h3>Nominations</h3>
      <ul>
        {nominationsArray.map((item) => {
          return (
            <MovieListItem
              key={`${item.title}-${item.year}`}
              title={item.title}
              year={item.year}
              action="x"
            >
              <Button
                onClick={() => {
                  dispatch(removeMovieFromNominations(item.movieId));
                }}
              >
                x
              </Button>
            </MovieListItem>
          );
        })}
      </ul>
      {listComplete && (
        <Submit
          onClick={() => {
            dispatch(submitList());
          }}
        >
          Submit Nominations
        </Submit>
      )}
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
`;

const Submit = styled.button`
  border-radius: 5px;
  padding: 10px 40px;
  margin: 0 auto;
`;

const Button = styled(UnstyledButton)``;

export default Nominations;
