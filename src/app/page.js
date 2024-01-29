const API_KEY = process.env.API_KEY
import Results from './components/Results';

export default async function Home({searchParams}) {
  // console.log(searchParams.genre)
  const genre = searchParams.genre || 'fetchTrending';
  const res = await fetch(`
  ${
    genre === "fetchTopRated"?
  `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`
  :
  `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  }`,
  {
    next:{ revalidate:10000}
  });

  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  const data  = await res.json()

  const results = data.results;

  // console.log(results);

  return (
    // <h1 className="">Home</h1>
    <Results results={results}/>
  );
}
