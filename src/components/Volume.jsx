import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import axios from "axios";

export default function Volume() {
  const [{ token }] = useStateProvider();

  const setVolume = async (e) => {
    try {
      await axios.put(
        "https://api.spotify.com/v1/me/player/volume",
        {},
        {
          params: {
            volume_percent: parseInt(e.target.value),
          },
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
    } catch (error) {
      alert("Purchase Spotify Premium to use this functionality!");
    }
  };
  return (
    <Container>
      <input type="range" onMouseUp={(e) => setVolume(e)} min={0} max={100} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: center;
  /* input {
    width: 15rem;
    border-radius: 2rem;
    height: 0.5rem;
  } */
  input[type="range"] {
    -webkit-appearance: none;
    width: 300px;
    height: 5px;
    background: #888;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    margin: 0 10px;
  }

  input[type="range"]:hover {
    opacity: 1;
  }

  input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: #1db954;
    cursor: pointer;
    border-radius: 50%;
  }

  input[type="range"]::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: #1db954;
    cursor: pointer;
    border-radius: 50%;
  }
`;
