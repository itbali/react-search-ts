import React, { useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../bll/store";
import {getBeers, setError, setQueryTitle} from "../../bll/beersReducer";
import s from "./Header.module.scss"

export const Header = () => {

  //get state params
  const dispatch = useDispatch()
  const isLoading = useAppSelector<boolean>(state => state.beers.isLoading)
  const error = useAppSelector<string>(state => state.beers.error)
  const totalBeers = useAppSelector<number>(state => state.beers.totalItems)
  const page = useAppSelector<number>(state => state.beers.searchParams.page!)
  const firstPage = 1

  //set local state
  const [title, setTitle] = useState('')

  //clean error in 10 sec if it occurred
  useEffect(() => {
    (setTimeout(() =>
        dispatch(setError('')), 10000)
    )
  }, [dispatch, error])

  //callback functions
  const onSearchClickHandler = () => {
    dispatch(setQueryTitle(title));
    dispatch<any>(getBeers(firstPage))
    setTitle('')
  }
  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.subHeader}>Beers search api</div>
        <form className={s.search} onSubmit={onSearchClickHandler}>
          <input
            style={s}
            disabled={isLoading}
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            placeholder={"Enter title"}/>
          <button disabled={isLoading} onClick={onSearchClickHandler}>🔍</button>
        </form>
        {error && <div className={s.error}>{error}</div>}
        <div className={s.categories}>
          <span className={s.totalFound}>{Boolean(totalBeers) && <>Beers on page: {totalBeers}</>}</span>
          <span className={s.totalFound}>{Boolean(totalBeers) && <>Current page: {page}</>}</span>
        </div>
      </div>
    </div>
  );
};
