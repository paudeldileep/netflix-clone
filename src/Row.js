import React, { useEffect, useState } from 'react'
import axios from './axios'
import './Row.css'

const img_base_url='https://image.tmdb.org/t/p/original/';

const Row = ({title,url,islarge}) => {
    
    
    const[movies,setMovies]=useState([])

    useEffect(()=>{

        const fetchMovies=async()=>{
            const res=await axios.get(url);
           setMovies(res.data.results);
        }

        fetchMovies()
    },[url])

    

    return (
        <div className='main-div'>
            <h2>{title}</h2>
            <div className='data-div'>
                {movies.map(movie=>(
                    <img className={`movie-img ${islarge && 'movie-img-large'}`} key={movie.id} src={`${img_base_url}${islarge ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Row
