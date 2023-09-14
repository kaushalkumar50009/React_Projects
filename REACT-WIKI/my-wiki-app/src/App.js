import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filter/Filters";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./pages/Episodes";
import Location from "./pages/Location";
import CardDetails from "./components/Cards/CardDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}

const Home = () => {
  let [search, setSearch] = useState("");
  let [pageNumber, setPageNumber] = useState("");
  // console.log(pageNumber);
  let [status, setStatus] = useState(" ");
  let [gender, setGender] = useState("");
  let [species, setspecies] = useState("");

  let [fetchData, updateFetchedData] = useState([]);
  // console.log(fetchData);
  let { info, results } = fetchData;
  // console.log(info);
  // console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  // fetching and updatingdata from api
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      // console.log(data);
      // console.log(data.results);
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center mb-4">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <Filters
            setGender={setGender}
            setStatus={setStatus}
            setPageNumber={setPageNumber}
            setspecies={setspecies}
          />
          <div className="col-lg-8 col-12">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>
      <Pagination
        info={info}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </div>
  );
};

export default App;
