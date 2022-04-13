import React, { useEffect, useState } from "react";
import { ThemeContext } from "./context/theme-context";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import MyProfile from "./components/my-profile/MyProfile";

function App() {

  const initialDarkTheme = localStorage.getItem('dark-theme');
  const [isDark, setTheme] = useState(!!initialDarkTheme);

  useEffect(() => {
    if (isDark) {
      localStorage.setItem('dark-theme', true)
    } else {
      localStorage.removeItem('dark-theme');
    }
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, setTheme }}>
      <div className={isDark ? 'App dark-theme' : 'App'}>
        <div>
          <Header />
          <MyProfile />
          <Main />
        </div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
