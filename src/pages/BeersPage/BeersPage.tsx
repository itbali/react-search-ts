import React from 'react';
import {useAppSelector} from "../../bll/store";
import {Beers} from "../../components/Beers/Beers";
import {Loader} from "../../components/uiUtils/Loader/Loader";
import {Header} from "../../components/Header/Header";
import {Footer} from "../../components/Footer/Footer";

export const BeersPage = () => {

  //get state params
  const isLoading = useAppSelector<boolean>(state => state.beers.isLoading)

  //jsx
  return (
    <div>
      {isLoading && <Loader/>}
      <Header/>
      <Beers/>
      <Footer/>
    </div>
  );
};
