import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "../assets/Stranger_Things.mp4";
import styled from "styled-components";
import {IoPlayCircleSharp} from 'react-icons/io5'
import {RiThumbUpFill,RiThumbDownFill} from 'react-icons/ri'
import { BsCheck } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import {BiChevronDown} from 'react-icons/bi';
const Card = ({ movieData, isLiked = false }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
        alt="movieImage"
      ></img>

      {isHovered && (
        <div className="hover">
          <div className="image-video-container">
            <img
              src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
              alt="movieImage"
              onClick={() => navigator("/player")}
            ></img>
            <video
              src={video}
              autoPlay
              loop
              muted
              onClick={() => navigator("/player")}
              ></video>
          </div>
          <div className="info-container flex column">
            <h3 className="name" onClick={() => navigate("/player")}>
              {movieData.name}
            </h3>
            <div className="icons flex j-between">
              <div className="controls flex">
                <IoPlayCircleSharp title='play'
              onClick={() => navigate("/player")}
                />
                <RiThumbUpFill title='like'/>
                <RiThumbDownFill title='disLike'/>
                {
                  isLiked?
                    <BsCheck title="Remove from  list"/>:
                    <AiOutlinePlus title='add to my list'/>
                  
                }
              </div>
              <div className="info">
<BiChevronDown title="More info"/>
              </div>
            </div>
            <div className="genres flex">
              <ul className="flex">{movieData.genres.map((genre)=>{return <li key={genre}>{genre}</li>})}</ul>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default React.memo(Card);

const Container = styled.div`
max-width:230px;
width:230px;
height:100%;
cursor:pointer;
position:relative;
img{
  border-radius:0.2rem;
  width:100%;
  height:100%;
  z-index:10;
}
.hover{
  z-index:90;
  height:max-content;
  width:20rem;
  position:absolute;
  top:-18vh;
  left:0;
  border-radius:.3rem;
  box-shadow:rgba(0,0,0,.75) 0px 0px 10px;
  background-color:#181818;
  transition:0.3s ease-in-out;
  .image-video-container{
    position:relative;
    height:140px;
    img{
      width:100%;
      height:140px;
      object-fit:cover;
      border-radius:.3rem;
      top:0;
      z-index:4;
      position:absolute;
    }
    video{
      width:100%;
      height:140px;
      object-fit:cover;
      border-radius:.3rem;
      top:0;
      z-index:5;
      position:absolute;
    }
  }
  .info-container{
    padding:1rem;
    gap:.5rem;
  }
  .icons{
    .controls{
      display:flex;
      gap:1rem;
    }
    svg{
      font-size:2rem;
      cursor:pointer;
      transition:.3s ease-in-out;
      &:hover{
        color:#b8b8b8;
      }
    }
  }
  .genres{
    ul{
      gap:1rem;
      li{
        padding-right:.7rem;
        &:first-of-type{
          list-style-type:none;
        }
      }
    }

  }
}
`;
