import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchMovies, getGenres } from '../store';
import { firebaseAuth } from '../utils/firebase-config';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import NotAvailable from '../components/NotAvailable';
import SelectGenre from '../components/SelectGenre';

const Movies = () => {
    const navigate=useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const movies=useSelector((state)=>state.netflix.movies);
  const genres=useSelector((state)=>state.netflix.genres);

  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded);

  const dispatch=useDispatch()

useEffect(() => {
    dispatch(getGenres())
  }, [dispatch]);

useEffect(()=>{
  if(genresLoaded) dispatch(fetchMovies({type:'movies'}));
},[dispatch,genresLoaded])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);      
  };
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/");
  });

    return (
        <Container>
            <div className="navbar">
                <Navbar isScrolled={isScrolled}/>
            </div>
            <div className='data'>
            <SelectGenre genres={genres} type='movie'/>
                {movies.length? <Slider movies={movies}/>:<NotAvailable/>}
            </div>
        </Container>
    );
}

export default Movies;

const Container=styled.div`
.data{
    margin-top:8rem;
    .not-available{
        color:white;
        text-align:center;
        margin-top:4rem;

    }
}`;
