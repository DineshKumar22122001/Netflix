import React, { useState ,useEffect} from "react";
import Navbar from "../components/Navbar";
import backgroundImage from '../assets/home.jpg';
import MovieLogo from '../assets/homeTitle.webp';
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";

const Netflix = () => {

  const navigate=useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const movies=useSelector((state)=>state.netflix.movies);

  const genresLoaded=useSelector((state)=>state.netflix.genresLoaded);

  const dispatch=useDispatch()

useEffect(() => {
    dispatch(getGenres())
  }, [dispatch]);

useEffect(()=>{
  if(genresLoaded) dispatch(fetchMovies({type:'all'}));
},[genresLoaded,dispatch])

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);  
  };

  // console.log(movies);
  return <Container>
    <Navbar isScrolled={isScrolled}/>
    <div className="hero">
      <img src={backgroundImage} alt="background" className="backgroud-image" />
      <div className="container">
        <div className="logo">
          <img src={MovieLogo} alt="movieLogo" />
        </div>
        <div className="buttons flex">
          <button className="flex a-center j-center" onClick={()=>navigate('/player')}>
            <FaPlay /> Play
          </button>
          <button className="flex a-center j-center">
            <AiOutlineInfoCircle/> More info
          </button>
        </div>
      </div>
    </div>
    <Slider movies={movies}/>
  </Container>;
};

export default Netflix;

const Container=styled.div`
backround-color-black;
.hero{
  position:relative;
  .backround-image{
    filter:brightness(60%);
  }
  img{
    height:100vh;
    width:100vw;
  }
  .container{
    position:absolute;
    bottom:5rem;
    .logo{
      img{
        height:100%;
        width:100%;
        margin-left:5rem;
      }
    }
    .buttons{
      margin:5rem;
      gap:2rem;
      button{
        font-size:1.4rem;
        gap:1rem;
        border-radius:.2rem;
        padding:.5rem;
        padding-left:2rem;
        padding-right:2.4rem;
        border:none;
        cursor:pointer;
        transition:.3s ease-in-out;
        &:hover{
          opacity:0.8;
        }
        &:nth-of-type(2){
          background-color:rgba(109,109,110,.7);
          color:white;
          svg{
font-size:1.8rem;
          }
        }     
      }
    }
  }
}
`;

