import {call, put, select, takeEvery} from "redux-saga/effects"
import {
  getBeers,
  setBeers,
  setError,
  setIsFirstSearch,
  setIsLoading,
  setPageSearch,
  setTotalItems
} from "../beersReducer";
import {beersAPI, GetBeersQueryParams, GetBeersResponseDataType} from "../../api/beersAPI";
import {AppStateType} from "../store";

export function* GetBeersWatcher() {
  yield takeEvery<any>('GET_BEERS', getBeersWorker)
}

function* getBeersWorker({clickedPage}: ReturnType<typeof getBeers>) {

  const state: AppStateType = yield select()
  const queryParams: GetBeersQueryParams = {
    beer_name: state.beers.searchParams.beer_name,
    page: clickedPage
  }

  try {
    yield put(setError(''))
    yield put(setIsLoading(true))
    yield put(setPageSearch(clickedPage))

    const data: GetBeersResponseDataType = yield call(() => beersAPI.getBeers(queryParams))
    yield put(setBeers(data))
    yield put(setTotalItems(data.length))
  } catch (err: any) {
    put(setError(err.response.data ? err.response.data.message : err.message
    ))
  } finally {
    yield put(setIsLoading(false))
    yield put(setIsFirstSearch(false))
  }
}
