import React from 'react';
import {useDispatch} from "react-redux";
import {BeerType} from "../../api/beersAPI";
import {useAppSelector} from "../../bll/store";
import {getBeers, setPageSearch} from "../../bll/beersReducer";
import Spinner from "../uiUtils/Spinner/Spinner";
import s from "./Beers.module.scss"
//lazy load
const Beer = React.lazy(() => import('../Beer/Beer'));

export const Beers = () => {

  const totalItems = useAppSelector<number>(state => state.beers.totalItems)
  const isFirstSearch = useAppSelector<boolean>(state => state.beers.isFirstSearch)
  const beers = useAppSelector<Array<BeerType>>(state => state.beers.beers)
  const page = useAppSelector<number>(state => state.beers.searchParams.page!)
  const dispatch = useDispatch<any>()
  const maxTotalItems = 25

  const paginationHandler = (num: number) => {
    dispatch(setPageSearch(num))
    dispatch(getBeers(num))
  }

  if (isFirstSearch) {
    return (
      <div className={s.background}>
        <h1 className={s.container}>To search type some text and press enter or just press search icon</h1>
      </div>
    )
  }

  return (
    <div className={s.background}>
      <div className={s.container}>
        {
          totalItems
            ?
            <div>

              <div className={s.beers}>
                {beers.map(el => {
                  return (
                    <React.Suspense fallback={<Spinner/>}>
                      <Beer key={el.id} beer={el}/>
                    </React.Suspense>
                  )
                })}
              </div>
              <div className={s.buttonsBlock}>
                <button
                  disabled={page === 1}
                  onClick={() => paginationHandler(page - 1)}
                  className={s.paginationButton}
                >Back
                </button>
                <button
                  disabled={totalItems !== maxTotalItems}
                  onClick={() => paginationHandler(page + 1)}
                  className={s.paginationButton}
                >Next
                </button>
              </div>
            </div>
            :
            (<div>No beer found</div>)
        }
      </div>
    </div>
  );
}
