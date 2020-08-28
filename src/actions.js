export const searchResultsFromApi = ({ search, input }) => ({
  type: "SEARCH_RESULTS_FROM_API",
  search,
  input,
});

export const addMovieToNominations = ({ movieId, movie }) => ({
  type: "ADD_MOVIE_TO_NOMINATIONS",
  movieId,
  movie,
});

export const removeMovieFromNominations = (movieId) => ({
  type: "REMOVE_MOVIE_FROM_NOMINATIONS",
  movieId,
});
