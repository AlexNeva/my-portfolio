import React from "react";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import MyProfile from "./components/my-profile/MyProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <MyProfile />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
