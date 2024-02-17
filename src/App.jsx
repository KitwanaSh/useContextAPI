import React from 'react';
import NavBar from './Components/NavBar';
import BookList from './Components/BookList';
import './index.css';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './Components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';


function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookList />
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
