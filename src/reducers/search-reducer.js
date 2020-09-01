import { produce } from "immer";

const initialState = {
  status: "idle",
  results: [],
  term: "",
  error: null,
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_REQUEST_TO_API": {
      return produce(state, (draftState) => {
        draftState.status = "loading";
      });
    }

    case "SEARCH_RESULTS_FROM_API": {
      if (action.data.Response === "True") {
        return produce(state, (draftState) => {
          draftState.status = "idle";
          draftState.results = action.data.Search;
          draftState.term = action.input;
          draftState.error = null;
        });
      } else {
        return produce(state, (draftState) => {
          draftState.status = "error";
          draftState.results = [];
          draftState.error = action.data.Error;
          draftState.term = action.input;
        });
      }
    }
    default:
      return state;
  }
}
