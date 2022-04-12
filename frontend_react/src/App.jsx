import React from "react";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import MyProfile from "./components/my-profile/MyProfile";

function App() {
  return (
    <div className="App">
      <Header />
      <MyProfile />
      <Main />
    </div>
  );
}

export default App;
