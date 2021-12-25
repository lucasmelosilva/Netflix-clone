import React, { useEffect, useState } from 'react';
import Tmdb from './services/Tmdb';
import MovieRow from './components/MovieRow/MovieRow';
import FeaturedMovie from './components/FeaturedMovie/FeaturedMovie';

import './App.css';

function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getMovieList();
      setMovieList(list);

      let originals = list.filter(i=>i.slug==='originals');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
    }

    loadAll();
  }, []);

  return (
    <div className="page">

    {featuredData &&
      <FeaturedMovie item={featuredData}/>
    }

      <section className="list">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} alt={item.original_title}/>
        ))}
      </section>
    </div>
  );
}

export default App;
