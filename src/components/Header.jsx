import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Container = styled.div`
padding:0 4rem;
.logo{
    img{
        height:5rem;
    }
}
button{
    padding:.5rem 1rem;
    border:none;
    border-radius:.2rem;
    background-color:#e50913;
    cursor:pointer;
    color:white;
    font-size:1.05rem;
    font-weight:bolder;
}`;

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <Container className='flex a-center j-between'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Log In" : "Sign Up"}
      </button>
    </Container>
  );
};

export default Header;
