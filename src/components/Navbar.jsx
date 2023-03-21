import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

const Navbar = (props) => {
  const Links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tvshows" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/mylist" },
  ];

  const navigate=useNavigate();

  onAuthStateChanged(firebaseAuth,(currentUser)=>{
    if(!currentUser) navigate('/login');
  })

  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  return (
    <Container>
      <nav className={`flex ${props.isScrolled ? "scrolled" : ""}`}>
        <div className="left flex a-center">
          <div className="brand flex a-center j-center">
            <img src={logo} alt="logo" />
            <ul className="link flex">
              {Links.map(({ name, link }) => {
                return (
                  <li key={name}>
                    <Link to={link}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right flex a-center">
          <div className={`search ${showSearch ? "show-search" : ""}`}>
            <button
              onFocus={() => setShowSearch(true)}
              onBlur={() => {
                if (!inputHover) setShowSearch(false);
              }}
            >
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search"
              onMouseEnter={() => setInputHover(true)}
              onMouseLeave={() => setInputHover(false)}
              onBlur={() => {
                setInputHover(false);
                setShowSearch(false);
              }}
            ></input>
          </div>
          <button onClick={() => signOut(firebaseAuth)}>
            <FaPowerOff />
          </button>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
.scrolled{
    background-color:black;
}
nav{
    position:sticky;
    top:0;
    height:6.5rem;
    width:100%;
    justify-content:space-between;
    padding:0 4rem;
    z-index:2;
    position:fixed;
    align-items:center;
    transition:0.3s ease-in-out;
    .left{
        gap:2rem;
        .brand{
            img{
                height:4rem;
            }
        }
        .link{
            list-style-type:none;
            gap:2rem;
            li{
                a{
                    text-decoration:none;
                    color:white;
                    
                }
                
            }
        }
    }
    .right{
        gap:1rem;
        button{
            background-color:transparent;
            border:none;
            cursor:pointer;
            &:focus{
                outline:none;
            }
            svg{
                color:#f34242;
                font-size:1.2rem;
            }
        }
        .search{
            display:flex;
            gap:.4rem;
            align-items:center;
            justify-content:center;
            padding:.2rem;
            padding-left:.5rem;
            button{
                background-color:transparent;
                svg{
                    color:white;
                }
            }
            input{
                width:0;
                opacity:0;
                visiblity:hidden;
                transition:.3s ease-in-out;
                background-color:transparent;
                border:none;
                color:white;
                &:focus{
                    outline:none;
                }
            }
        }
        .show-search{
            border:1px solid white;
            // border-radius:
            background-color:rgba(0,0,0,0.6);
            input{
                width:100%;
                opacity:1;
                visiblity:visible;
                padding:.3rem;
            } 
        }
    }
}
`;
