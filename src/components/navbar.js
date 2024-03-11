import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="containior flex justify-around">
        <Link to="/">
          <h1 className=" text-center p-2 m-3 font-bold text-xl">Movie Boy</h1>
        </Link>
        <Link to="/add">
          <h1 className=" text-center p-2 m-3 font-bold text-xl">Add Movie</h1>
        </Link>
      </div>
    </header>
  );
}
