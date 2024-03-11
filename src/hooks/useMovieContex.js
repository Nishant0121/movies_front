import { MovieContext } from "../contex/moviecontex";

import { useContext } from "react";

export const useMovie = () => {
  const context = useContext(MovieContext);

  if (!context) {
    throw Error("useMovie must be used within a MovieProvider");
  }

  return context;
};
