import React,{ useReducer, createContext, useEffect, useContext, useRef } from 'react';
import reducer from './reducers/reducer';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ThemeButton from './components/ThemeButton/ThemeButton';
import sampleStore from './utils/samples/sampleStore';

export const store = createContext<any>(null);

const StoreProvider = ({ children }: any) => (
    <store.Provider value={useReducer(reducer,sampleStore)}>
      {children}
      </store.Provider>
);

const App = () => {
  return (
    <StoreProvider>
      <div
        className='App'
      >
        <NavBar />
        <ThemeButton />
      </div>
    </StoreProvider>
  )
}

export default App