import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FiSearch } from "react-icons/fi";

import { searchResultsFromApi } from "../../actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = React.useState("");

  return (
    <Wrapper>
      <Title>Movie Title</Title>
      <SearchArea>
        <FiSearch />
        <TextInput
          type="text"
          value={input}
          onChange={(ev) => {
            setInput(ev.target.value);
          }}
          onKeyDown={(ev) => {
            switch (ev.key) {
              case "Enter": {
                fetch(
                  `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&s=${input}`
                )
                  .then((res) => res.json())
                  .then((data) =>
                    dispatch(
                      searchResultsFromApi({ search: data.Search, input })
                    )
                  );
                break;
              }
            }
          }}
        />
      </SearchArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: white;
  padding: 15px 30px;
`;

const Title = styled.p`
  margin-bottom: 5px;
`;

const SearchArea = styled.div`
  padding: 0px 10px;
  border: 1px grey solid;
  display: flex;
  align-items: center;
`;
const TextInput = styled.input`
  margin-left: 10px;
  width: 100%;
  border: none;
  line-height: 50px;
  font-size: 18px;
  outline: none;
`;

export default SearchBar;
