import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import MovieCard from '../components/MovieCard';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </>
  );
}

export default Home;