import React from 'react';
import NavBar from './Components/NavBar';
import BookList from './Components/BookList';
import './index.css';
import ThemeContextProvider from './contexts/ThemeContext';
import ToggleTheme from './Components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <div className='App'>
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ToggleTheme />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  )
}

export default App
