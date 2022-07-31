import {BeerType, GetBeersQueryParams} from "../api/beersAPI";

//constants
const SET_BEERS = "SET_BEERS"
const SET_FIRST_SEARCH = "SET_FIRST_SEARCH"
const SET_TITLE = "SET_TITLE"
const SET_ERROR = "SET_ERROR"
const SET_TOTAL_ITEMS = "SET_TOTAL_ITEMS"
const SET_LOADING = "SET_LOADING"
const SET_PAGE_SEARCH = "SET_PAGE_SEARCH"

//types
export type InitStateType = {
  isLoading: boolean,
  isFirstSearch: boolean,
  kind: string,
  totalItems: number,
  error: string,
  searchParams: GetBeersQueryParams
  beers: Array<BeerType>
}
export type BeersActionsType =
  ReturnType<typeof setBeers> |
  ReturnType<typeof setQueryTitle> |
  ReturnType<typeof setError> |
  ReturnType<typeof setTotalItems> |
  ReturnType<typeof setIsFirstSearch> |
  ReturnType<typeof setPageSearch> |
  ReturnType<typeof getBeers> |
  ReturnType<typeof setIsLoading>

//initState
const initialState: InitStateType = {
  isLoading: false,
  isFirstSearch: true,
  kind: '',
  error: '',
  totalItems: 0,
  searchParams: {
    page: 1,
    beer_name: undefined,
  },
  beers: []
}

//reducer
export const beersReducer = (state: InitStateType = initialState, action: BeersActionsType) => {
  switch (action.type) {
    case "SET_BEERS":
      return {...state, beers: action.beers}
    case "SET_TITLE":
      return {
        ...state,
        searchParams: {...state.searchParams, beer_name: action.title.trim().length !== 0 ? action.title : undefined}
      }
    case "SET_ERROR":
      return {...state, error: action.error}
    case "SET_TOTAL_ITEMS":
      return {...state, totalItems: action.totalItems}
    case "SET_LOADING":
      return {...state, isLoading: action.isLoading}
    case "SET_FIRST_SEARCH":
      return {...state, isFirstSearch: action.isFirstSearch}
    case "SET_PAGE_SEARCH":
      return {...state, searchParams: {...state.searchParams, page: action.page}}
    default:
      return state
  }
}

//actions
export const setBeers = (beers: Array<BeerType>) => {
  return {type: SET_BEERS, beers} as const
}
export const setQueryTitle = (title: string) => {
  return {type: SET_TITLE, title} as const
}
export const setIsLoading = (isLoading: boolean) => {
  return {type: SET_LOADING, isLoading} as const
}
export const setIsFirstSearch = (isFirstSearch: boolean) => {
  return {type: SET_FIRST_SEARCH, isFirstSearch} as const
}
export const setPageSearch = (page: number) => {
  return {type: SET_PAGE_SEARCH, page} as const
}
export const setTotalItems = (totalItems: number) => {
  return {type: SET_TOTAL_ITEMS, totalItems} as const
}
export const setError = (error: string) => {
  return {type: SET_ERROR, error} as const
}
export const getBeers = (clickedPage: number) => {
  return {type: "GET_BEERS", clickedPage} as const
}
