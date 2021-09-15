import React from "react";
import Nav from "./components/Nav/Nav";
import Banner from "./components/Banner/Banner";
import Row from "./components/Row/Row";
import { requests } from "./api";

function App() {
  return (
    <div className="app bg-black">
      {/* Nav */}
      <Nav />
      {/* Banner */}
      <Banner />
      {/* Rows */}
      <Row
        title={`NETFLIX ORIGINALS`}
        fetchUrl={requests.fetchNetflixOriginals}
        typeOfRequest="fetchNetflixOriginals"
      />
      <Row
        title={`Trending`}
        fetchUrl={requests.fetchTrending}
        typeOfRequest="fetchTrending"
      />
      <Row
        title={`Top Rated`}
        fetchUrl={requests.fetchTopRated}
        typeOfRequest="fetchTopRated"
      />
      <Row
        title={`Action Movies`}
        fetchUrl={requests.fetchActionMovies}
        typeOfRequest="fetchActionMovies"
      />
      <Row
        title={`Comedy Movies`}
        fetchUrl={requests.fetchComedyMovies}
        typeOfRequest="fetchComedyMovies"
      />
      <Row
        title={`Horror Movies`}
        fetchUrl={requests.fetchHorrorMovies}
        typeOfRequest="fetchHorrorMovies"
      />
      <Row
        title={`Romance Movies`}
        fetchUrl={requests.fetchRomanceMovies}
        typeOfRequest="fetchRomanceMovies"
      />
      <Row
        title={`Documentaries`}
        fetchUrl={requests.fetchDocumentaries}
        typeOfRequest="fetchDocumentaries"
      />
    </div>
  );
}

export default App;
