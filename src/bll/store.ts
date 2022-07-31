import {TypedUseSelectorHook, useSelector} from "react-redux";
import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import createSagaMiddleware from 'redux-saga';
import {beersReducer} from "./beersReducer";

export type AppStateType = ReturnType<typeof rootReducer>;


export const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers(
  {
    beers: beersReducer,
  }
)
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;

//TODO DELETE TS IGNORE
//@ts-ignore
window.store = store
