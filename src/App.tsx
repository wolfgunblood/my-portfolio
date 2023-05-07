import React,{ useReducer, createContext, useEffect, useContext, useRef } from 'react';
import reducer from './reducers/reducer';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import ThemeButton from './components/ThemeButton/ThemeButton';
import sampleStore from './utils/samples/sampleStore';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';

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
        {/* <Hero /> */}
        {/* <About /> */}
        {/* <Projects /> */}
        <Skills />
      </div>
    </StoreProvider>
  )
}

export default App