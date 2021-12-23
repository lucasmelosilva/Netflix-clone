const apiKey = '5be23d41b69d769586f75b46e4bb901e';
const apiBase = 'https://api.themoviedb.org/3';

async function basicFetch(endpoint) {
  const req = await fetch(`${apiBase}${endpoint}`);
  const json = await req.json();
  return json;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default  {
  getMovieList: async () => {
    return [
      {
        slug: 'originals',
        title: 'Originais do Netflix',
        items: await basicFetch(`/discover/tv?with_network=213&api_key=${apiKey}&language=pt-br`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?api_key=${apiKey}&language=pt-br`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?api_key=${apiKey}&language=pt-BR`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&api_key=${apiKey}&language=pt-BR`)

      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&api_key=${apiKey}&language=pt-BR`)

      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&api_key=${apiKey}&language=pt-BR`)

      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&api_key=${apiKey}&language=pt-BR`)

      },
      {
        slug: 'documentary',
        title: 'Documentarios',
        items: await basicFetch(`/discover/movie?with_genres=99&api_key=${apiKey}&language=pt-BR`)

      }
    ];
  }
}
