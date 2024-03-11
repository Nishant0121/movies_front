import React, { useState } from "react";

export default function AddMovie() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handlesubmit = async (e) => {
    e.preventDefault();

    const movie = { title, year, genre, director, description };

    const response = await fetch("/api/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("movie added");
    }
    setTitle("");
    setYear("");
    setGenre("");
    setDirector("");
    setDescription("");
  };

  return (
    <form
      action=""
      className=" flex justify-center flex-col items-center"
      onSubmit={handlesubmit}
    >
      <h1>Add Movie</h1>

      <label className=" bg-purple-500 rounded-lg p-2" htmlFor="">
        Movie Title
      </label>
      <input
        className="border border-purple-600 rounded-md p-2 m-2"
        type="text"
        name="title"
        id=""
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label className=" bg-purple-500 rounded-lg p-2" htmlFor="">
        Movie Year
      </label>
      <input
        className="border border-purple-600 rounded-md p-2 m-2"
        type="text"
        name="year"
        id=""
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />
      <label className=" bg-purple-500 rounded-lg p-2" htmlFor="">
        Movie Genre
      </label>
      <input
        className="border border-purple-600 rounded-md p-2 m-2"
        type="text"
        name="genre"
        id=""
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
      />
      <label className=" bg-purple-500 rounded-lg p-2" htmlFor="">
        Movie Director
      </label>
      <input
        className="border border-purple-600 rounded-md p-2 m-2"
        type="text"
        name="director"
        id=""
        value={director}
        onChange={(e) => setDirector(e.target.value)}
      />
      <label className=" bg-purple-500 rounded-lg p-2" htmlFor="">
        Movie Description
      </label>
      <input
        className="border border-purple-600 rounded-md p-2 m-2"
        type="text"
        name="director"
        id=""
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add Movie</button>
      {error && <div>{error}</div>}
    </form>
  );
}
