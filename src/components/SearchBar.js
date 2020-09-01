import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { COLORS } from "../constants";

import { FiSearch } from "react-icons/fi";

import { searchResultsFromApi } from "../actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <Wrapper>
      <Title>Search for a movie</Title>
      <SearchArea>
        <FiSearch />
        <TextInput
          ref={inputRef}
          type="text"
          value={input}
          placeholder="Movie title"
          onChange={(ev) => {
            setInput(ev.target.value);
          }}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "Enter": {
                if (input !== "") {
                  fetch(
                    `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&s=${input}`
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      //console.log(data);
                      dispatch(searchResultsFromApi({ data, input }));
                    });
                } else {
                  dispatch(
                    searchResultsFromApi({
                      data: { Error: "Please type in a movie title." },
                      input,
                    })
                  );
                }

                break;
              }
              default:
                break;
            }
          }}
        />
      </SearchArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 15px 30px;
  margin-bottom: 30px;
  margin-right: 30px;
  background-color: ${COLORS.contour};
  border-radius: 6px;
  flex: 3;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.p`
  margin-bottom: 5px;
`;

const SearchArea = styled.div`
  padding: 0px 10px;
  border: 1px grey solid;
  display: flex;
  align-items: center;
  background-color: ${COLORS.contour};
  border-radius: 6px;
`;
const TextInput = styled.input`
  margin-left: 10px;
  width: 100%;
  border: none;
  line-height: 50px;
  font-size: 18px;
  outline: none;
  background-color: ${COLORS.contour};
  border-radius: 6px;
  color: ${COLORS.primary};
`;

export default SearchBar;
