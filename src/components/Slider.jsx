import React from 'react'
import CardSlider from './CardSlider';

function Slider({movies}) {
  const getMoviesFromRange=(from,to)=>{
    return movies.slice(from,to)
  }
  return (
    <div>
      <CardSlider title='Trending Now' data={getMoviesFromRange(0,10)}/>
      <CardSlider title='New Releses' data={getMoviesFromRange(10,20)}/>
      <CardSlider title='Action' data={getMoviesFromRange(20,30)}/>
      <CardSlider title='Animation' data={getMoviesFromRange(30,40)}/>
      <CardSlider title='All Time fav' data={getMoviesFromRange(40,50)}/>
      <CardSlider title='Hollywood' data={getMoviesFromRange(50,60)}/>
    </div>
  )
}

export default React.memo(Slider);
