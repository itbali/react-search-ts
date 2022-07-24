import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {beersReducer, BeersActionsType} from "./beersReducer";

export type AppStateType = ReturnType<typeof rootReducer>;
export type RootActionsType = BeersActionsType
export type AppThunkType<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, RootActionsType>;
export type AppDispatchType = ThunkDispatch<AppStateType, unknown, RootActionsType>;

const rootReducer = combineReducers(
  {
    beers: beersReducer,
  }
)
export const store = createStore(rootReducer, applyMiddleware(thunk))

export const useAppDispatch = () => useDispatch<AppDispatchType>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

//TODO DELETE TS IGNORE
//@ts-ignore
window.store = store
