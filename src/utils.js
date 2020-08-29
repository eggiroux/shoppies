export const persistedState = (initialState) => {
  const savedState = localStorage.getItem("nominations");

  if (savedState) {
    return { ...initialState, nominations: JSON.parse(savedState) };
  } else {
    localStorage.setItem("nominations", JSON.stringify({}));
    return initialState;
  }
};
