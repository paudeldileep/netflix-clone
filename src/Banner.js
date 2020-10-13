import React, { useState, useEffect } from "react"
import requests from "./requests"
import axios from "./axios"
import './Banner.css'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(requests.trendingMovies)
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      )
    }

    fetchMovies()
  }, [])
  console.log(movie)

  function truncate(str,n){
      return str?.length>n ?str.substr(0,n-1)+ "...":str;
  }

  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className='banner-data'>
        <h1 className='banner-title'> {movie?.title || movie?.name || movie?.original_name}</h1>
        <div className='banner-buttons'>
            <button className='banner-button'>Play</button>
            <button className='banner-button'>My List</button>
        </div>
    <h1 className='banner-desc'>{truncate(movie?.overview,150)}</h1>
      </div>
      <div className='banner-bottom'></div>
    </header>
  )
}

export default Banner
