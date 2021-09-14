import React from "react";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";

function App() {
  return (
    <div className="app bg-black">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Rows */}
      {[3, 4, 3, 4].map((r) => (
        <Row />
      ))}
    </div>
  );
}

export default App;
