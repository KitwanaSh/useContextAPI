import React from 'react';
import NavBar from './Components/NavBar';
import BookList from './Components/BookList';
import './index.css';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './Components/ThemeToggle';


function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <NavBar />
        <BookList />
        <ToggleTheme />
      </ThemeContextProvider>
    </div>
  )
}

export default App
