import React, { useReducer } from "react";
import StoreContext from "./store-context";

const initialState = {
  elementValue: 0,
  homePageState: false,
};

const dataReducer = (state, action) => {

    if(action.type === 'ADD') {
       console.log('dd');
       return {
        ...state,
        elementValue: state.elementValue + action.value
       }
    }

  return state;
};

const StoreProvider = (props) => {
  const [dataState, dispatch] = useReducer(dataReducer, initialState);

  const updateHandler = (obj) => {
    dispatch(obj);
  };

  const allState = {
    ...dataState,
    homePageState: dataState.elementValue === 100,
    update: updateHandler,
  };

  return (
    <StoreContext.Provider value={allState}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
