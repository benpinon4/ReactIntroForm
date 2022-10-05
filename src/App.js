import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const MovieForm = (props) => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");
  const [plot, setPlot] = useState("");
  const [year, setYear] = useState(0);
  const [imdbRating, setImdgRating] = useState(0);

  return (
    <div>
      <h1>Title: {title}</h1>
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <h1>Director: {director}</h1>
      <input
        type="text"
        onChange={(event) => {
          setDirector(event.target.value);
        }}
      />
      <h1>Actors: {actors}</h1>
      <input
        type="text"
        onChange={(event) => {
          setActors(event.target.value);
        }}
      />
      <h1>Plot: {plot}</h1>
      <input
        type="text"
        onChange={(event) => {
          setPlot(event.target.value);
        }}
      />
      <h1>Year: {year}</h1>
      <input
        type="number"
        step="0.1"
        onChange={(event) => {
          setYear(event.target.value);
        }}
      />
      <h1>imdb Rating: {imdbRating}</h1>
      <input
        type="number"
        step="0.1"
        onChange={(event) => {
          setImdgRating(event.target.value);
        }}
      />
    </div>
  );
};

function App() {
  return (
    <div className="App App-header">
      <MovieForm />
    </div>
  );
}

export default App;
