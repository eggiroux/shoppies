import { produce } from "immer";

const initialState = { searchResults: [], nominations: {}, searchTerm: "" };

export default function listReducer(state = initialState, action) {
  //console.log(state);
  switch (action.type) {
    case "SEARCH_RESULTS_FROM_API": {
      //console.log("from reducers", action);
      return produce(state, (draftState) => {
        draftState.searchResults = action.search;
        draftState.searchTerm = action.input;
      });
    }
    case "ADD_MOVIE_TO_NOMINATIONS": {
      //console.log("from reducers", action);
      return produce(state, (draftState) => {
        draftState.nominations[action.movieId] = action.movie;
      });
    }
    case "REMOVE_MOVIE_FROM_NOMINATIONS": {
      console.log("remove movie", action);
      return produce(state, (draftState) => {
        delete draftState.nominations[action.movieId];
      });
    }

    default:
      return state;
  }
}

export const getNominationsArray = (state) => {
  return Object.values(state.nominations);
};
