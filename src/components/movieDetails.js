import React from "react";

export default function MovieDetails({ movie }) {
  return (
    <div className="flow-root rounded-lg border border-gray-100 py-3 m-4 shadow-sm">
      <dl className="-my-3 divide-y divide-gray-100 text-sm">
        <div className="grid grid-cols-1 gap-1 p-1 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Title</dt>
          <dd className="text-gray-700 sm:col-span-2">{movie.title}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-1 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Name</dt>
          <dd className="text-gray-700 sm:col-span-2">{movie.director}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-1 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Genre</dt>
          <dd className="text-gray-700 sm:col-span-2">{movie.genre}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-1 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Year</dt>
          <dd className="text-gray-700 sm:col-span-2">{movie.year}</dd>
        </div>

        <div className="grid grid-cols-1 gap-1 p-1 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
          <dt className="font-medium text-gray-900">Discription</dt>
          <dd className="text-gray-700 sm:col-span-2">{movie.description}</dd>
        </div>
      </dl>
    </div>
  );
}
