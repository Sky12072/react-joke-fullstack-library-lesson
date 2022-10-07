import {createContext, useContext} from 'react'

// this file is for creating/defining GlobalState

export const StateContext = createContext()

export const useGlobalState = () => useContext(StateContext)
