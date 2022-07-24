import React from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../bll/store";
import s from "./BeerDescription.module.scss"
import {BeerType} from "../../api/beersAPI";
import noBeerCover from "../../assets/images/2022-07-24 00.10.57.jpg"

export const BeerDescription = () => {

  //get hooks and state data
  const params = useParams()
  const navigate = useNavigate()
  const currentBeer = useAppSelector<BeerType | undefined>(state => state.beers.beers.find(el => el.id === +params.id!))

  const goBack = () => {
    navigate(-1)
  }
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div onClick={goBack} className={s.goBack}>go back</div>

        {currentBeer
          ? <> <img src={currentBeer.image_url || noBeerCover} alt=""/>
            <h1>{currentBeer.name}</h1>
            <p><strong>Tagline: </strong>
              {currentBeer.tagline
                ? currentBeer.tagline
                : <span> "N/A" </span>
              }.
            </p>
            <p><strong>Description: </strong>{currentBeer.description || " N/A "}</p>
            <p><strong>ABV: </strong>{currentBeer.abv || " N/A "}</p>
            <p><strong>Food Pairing: </strong>{currentBeer.food_pairing || " N/A "}</p>
          </>
          : <h1>
            Some error has acquired, try to search again
          </h1>
        }
      </div>
    </div>
  );
};
