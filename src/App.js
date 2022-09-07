import React, { useState } from "react";
import Counter from "./Counter";
import CounterHooks from "./CounterHooks";

export const ThemeContext = React.createContext()

function App() {
const [theme, setTheme] = useState('green')
  return (
    <ThemeContext.Provider value={{backgroundColor: theme}}>
    Counter
  <Counter initialCount={0}></Counter>
  Counter Hooks
  <CounterHooks initialCount={0}></CounterHooks>
  <button onClick={()=> setTheme(prevTheme =>{
    return prevTheme === "red"?"blue":"red"
  })}>Toggle Colors</button>
  </ThemeContext.Provider>
  )
}

export default App;
