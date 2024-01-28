import React from 'react'
// const API_KEY = process.env.API_KEY

export default async function About() {
  // const genre = 
  // searchParams.genre || 
  // 'fetchTrending';
  // // console.log(API_KEY)
  // const res = await fetch(
    //trending
    // `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
    //top rated
    // `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`
    // `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`
    // `https://api.themoviedb.org/3/movie/11?api_key=${API_KEY}&language=en-US` 
    // 565c59ee37a045fc2cddac9c43b9dd8b
  //   `https://api.themoviedb.org/3/
  // `${
  //   genre === "fetchTopRated"?
  // `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200`
  // :
  // `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  // "trending/all/week"
  // }`
  // // ?api_key=${API_KEY}&language=en-US&page=1`
  // ,
  // {
  //   next:{ revalidate:10000}
  // });

  

  // // console.log(res)
  // const data  = await res.json()
  // // console.log(data)
  // const results = data.results

  // if(!res.ok){
  //   throw new Error("failed to fetch data")//this will be caught by the error page and passed to the page as props
  // }

  // console.log(results)
  return (
    <>
    <div className='max-w-6xl mx-auto mt-5 space-y-4 p-6'>
        <h1 className='text-2xl font-medium text-amber-500'>About</h1>
        <p>Welcome to movie Database</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>    
    </div>
    </>
  )
}
