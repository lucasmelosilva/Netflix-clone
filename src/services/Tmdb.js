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
        items: await basicFetch(`/discover/tv?with_network=213&language=bt-BR&apy_key=${apiKey}`)
      },
      {
        slug: 'trending',
        title: 'Recomendados para Você',
        items: await basicFetch(`/trending/all/week?language=pt-BR&apy_key=${apiKey}`)
      },
      {
        slug: 'toprated',
        title: 'Em Alta',
        items: await basicFetch(`/movie/top_rated?language=pt-BR&apy_key=${apiKey}`)
      },
      {
        slug: 'action',
        title: 'Ação',
        items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&apy_key=${apiKey}`)

      },
      {
        slug: 'comedy',
        title: 'Comédia',
        items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&apy_key=${apiKey}`)

      },
      {
        slug: 'horror',
        title: 'Terror',
        items: await basicFetch(`/discover/movie?with_genres=27&language=pt-BR&apy_key=${apiKey}`)

      },
      {
        slug: 'romance',
        title: 'Romance',
        items: await basicFetch(`/discover/movie?with_genres=10749&language=pt-BR&apy_key=${apiKey}`)

      },
      {
        slug: 'documentary',
        title: 'Documentarios',
        items: await basicFetch(`/discover/movie?with_genres=99&language=pt-BR&apy_key=${apiKey}`)

      }
    ];
  }
}
