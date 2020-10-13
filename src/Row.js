import React, { useEffect, useState } from "react"
import axios from "./axios"
import "./Row.css"
import Youtube from "react-youtube"
import movieTrailer from "movie-trailer"

const img_base_url = "https://image.tmdb.org/t/p/original/"

const Row = ({ title, url, islarge }) => {
  const [movies, setMovies] = useState([])
  const [tUrl, setTurl] = useState("")

  useEffect(() => {
    const fetchMovies = async () => {
      const res = await axios.get(url)
      setMovies(res.data.results)
    }

    fetchMovies()
  }, [url])

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  const handleClick = (movie) => {
    if (tUrl) {
      setTurl("")
    } else {
        console.log(movie?.name)
      movieTrailer(movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTurl(urlParams.get("v")) 
        })
        .catch((error) => console.log(error))
    }
  }

  return (
    <div className='main-div'>
      <h2>{title}</h2>
      <div className='data-div'>
        {movies.map((movie) => (
          <img
            className={`movie-img ${islarge && "movie-img-large"}`}
            key={movie.id}
            src={`${img_base_url}${
              islarge ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {tUrl && <Youtube videoId={tUrl} opts={opts} />}
    </div>
  )
}

export default Row
