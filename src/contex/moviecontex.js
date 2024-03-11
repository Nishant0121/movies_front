import { createContext, useReducer } from "react";

export const MovieContext = createContext();

export const moviereducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIE":
      return { movie: action.payload };
    case "CREATE_MOVIE":
      return { movie: action.payload, ...state.movie };
    default:
      return state;
  }
};

export const MovieProvider = ({ children }) => {
  const [state, dispatch] = useReducer(moviereducer, { movie: null });

  return (
    <MovieContext.Provider value={{ ...state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
};
