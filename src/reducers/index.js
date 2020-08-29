import { produce } from "immer";
import { persistedState } from "../utils";

const initialState = persistedState({
  searchResults: [],
  nominations: {},
  searchTerm: "",
  searchError: null,
  listComplete: false,
});

export default function listReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_RESULTS_FROM_API": {
      if (action.data.Response === "True") {
        return produce(state, (draftState) => {
          draftState.searchResults = action.data.Search;
          draftState.searchTerm = action.input;
          draftState.searchError = null;
        });
      } else {
        return produce(state, (draftState) => {
          draftState.searchResults = [];
          draftState.searchError = action.data.Error;
          draftState.searchTerm = action.input;
        });
      }
    }

    case "ADD_MOVIE_TO_NOMINATIONS": {
      //console.log("from reducers", action);
      return produce(state, (draftState) => {
        draftState.nominations[action.movieId] = action.movie;
        if (Object.keys(draftState.nominations).length >= 5) {
          draftState.listComplete = true;
        }
        localStorage.setItem("nominationsState", JSON.stringify(draftState));
      });
    }
    case "REMOVE_MOVIE_FROM_NOMINATIONS": {
      //console.log("remove movie", action);
      return produce(state, (draftState) => {
        delete draftState.nominations[action.movieId];
        draftState.listComplete = false;
        localStorage.setItem("nominationsState", JSON.stringify(draftState));
      });
    }

    default:
      return state;
  }
}

export const getNominationsArray = (state) => {
  return Object.values(state.nominations);
};
