import React, { createContext, useContext, useReducer } from "react";

//Preapring the data layer
//creating context which is where the data layer lives
const StateContext = createContext();

//Higher order component...takes three things....children--->basically anything that lies inside stateProvider component..here its app component
const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//Hook which allows to pull information from data layer
const useStateValue = () => useContext(StateContext)

export {StateContext, StateProvider, useStateValue}