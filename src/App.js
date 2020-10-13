import React from 'react';

import './App.css';
import Row from './Row';
import requests from './requests'
import Navbar from './Navbar';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title='NETFLIX ORIGINALS' url={requests.netflixoriginals} islarge/>
      <Row title='Trending Now' url={requests.trendingMovies}/>
      <Row title='Top Rated' url={requests.topratedMovies}/>
      <Row title='Action' url={requests.actionMovies}/>
      <Row title='Comedy' url={requests.comedyMovies}/>
      <Row title='Horror' url={requests.horrorMovies}/>
      <Row title='Romance' url={requests.romanceMovies}/>
      <Row title='Documentaries' url={requests.documentaries}/>
    </div>
  );
}

export default App;
