import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function MovieRow({ title, items }) {
  const halfWidthScreen = Math.round(window.innerWidth / 2);
  const [scrollX, setScrollX] = useState(0);

  function handleLeftArrow() {
    let x = scrollX + halfWidthScreen;
    if(x > 0){
      x = 0;
    }
    setScrollX(x);
  }

  function handleRightArrow() {
    let x = scrollX - halfWidthScreen;
    let listWidth = items.results.length * 150;
    if((window.innerWidth - listWidth) > x){
      x = window.innerWidth - listWidth - 60;
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{ 
            marginLeft: scrollX,
            width: items.results.length* 150 
          }}
        >
          {items.results.map((item, key) => (
            <div key={key} className="movieRow--item">
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.name} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default MovieRow;

