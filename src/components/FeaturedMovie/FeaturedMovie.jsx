import React from 'react';
import './FeaturedMovie.css';

function FeaturedMovie({ item }) {

  const firstDate = new Date(item.first_air_date);
  const genres = [];
  item.genres.forEach(genre => genres.push(genre.name));

  let description = item.overview;

  return (
    <section className="featuredMovie" style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`
    }}>
      <div className="featured--verticalFilter">
        <div className="featured--horizontalFilter">
          <div className="featured--name">{item.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons!==1?'s': ''}</div>
          </div>
    
          <div className="featured--description">
            {description.length > 300 ? description.substring(0,300) + '...' : description}
          </div>

          <div className="featured--buttons">
            <p></p>
            <a href={`/watch/${item.id}`} className="featured--watchButton">▶ &nbsp; Assistir</a>
            <a href={`/list/add/${item.id}`} className="featured--myListButton">+ &nbsp; Minha lista</a>
          </div>

          <div className="featured--genres"><strong>Gêneros:</strong> {genres.join(', ')}</div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie;