import React from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Main from "../components/Main";

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Banner />
      <Main/>
        
    </div>
  );
}

export default Home;
