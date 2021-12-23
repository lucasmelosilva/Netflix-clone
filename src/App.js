import React, { useEffect, useState } from 'react';
import Tmdb from './services/Tmdb';
import MovieRow from './components/MovieRow/MovieRow';


function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getMovieList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
}

export default App;
