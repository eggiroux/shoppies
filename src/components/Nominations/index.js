import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

import { useSelector, useDispatch } from "react-redux";

import { removeMovieFromNominations, submitList } from "../../actions";
import { getNominationsArray } from "../../reducers";

import MovieListItem from "../MovieListItem";
import UnstyledButton from "../UnstyledButton";
import Counter from "./Counter";

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
      <h3>My Nominations</h3>
      {nominationsArray.length === 0 && (
        <Text>
          Search and add your 5 favorite movies to nominate them for Shoppies!
        </Text>
      )}
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
                tabIndex="0"
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
      <Counter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 15px 30px;
  background-color: white;
  width: 50%;
  min-height: 200px;
  background-color: ${COLORS.contour};
  border-radius: 6px;
  width: 100%;
  position: relative;

  & ul {
    display: flex;
    flex-wrap: wrap;

    & li {
      border: 1px solid black;
      border-radius: 6px;
      background-color: ${COLORS.background};
      padding-top: 7px;
      @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 10px;
      }
    }
  }
`;

const Submit = styled.button`
  border-radius: 5px;
  padding: 10px 40px;
  margin: 0 auto;
  margin-top: 15px;
  background-color: ${COLORS.accept};
  color: ${COLORS.primary};
  border: 1px solid ${COLORS.primary};
  font-size: 1.2rem;
`;

const Button = styled(UnstyledButton)`
  color: ${COLORS.cancel};

  border-radius: 5px;
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 1000px;
  margin-bottom: 5px;
  position: relative;
  top: -10px;
  right: 2px;

  &:focus {
    outline: 2px solid ${COLORS.cancel};
  }
`;

const Text = styled.p`
  margin-top: 10px;
`;

export default Nominations;
