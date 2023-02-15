import Header from "@/src/components/header/Header";
import React from "react";
import Main from "@/src/components/main/Main";
import Footer from "@/src/components/footer/Footer";
const App = () => {
  return (
    <div className="app">
      <div className="wrapper">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
