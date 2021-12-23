import React, { useEffect } from 'react';
import Tmdb from './services/Tmdb';


function App() {
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getMovieList();
      console.log(list);
    }

    loadAll();
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
