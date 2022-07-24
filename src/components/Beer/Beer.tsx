import React from 'react';
import {BeerType} from "../../api/beersAPI";
import s from "./Beer.module.scss"
import {useNavigate} from "react-router-dom";
import  noBeerCover from "../../assets/images/2022-07-24 00.10.57.jpg"

type BeerPropsType = {
  beer: BeerType
}

const Beer = ({beer}: BeerPropsType) => {

  const navigate = useNavigate()

  function openBookHandler() {
    navigate(`/${beer.id}`)
  }

  return (
    <div onClick={openBookHandler} className={s.singeBeer}>
      <img src={
        beer.image_url
        || noBeerCover
      } alt=""/>
      <h3>{beer.name}</h3>
      <p>
        <strong>Description:</strong> {(beer.description.length < 140 ? beer.description : beer.description.slice(0, 140) + "...") || "N/A"}
      </p>
    </div>
  );
};

export default Beer;
