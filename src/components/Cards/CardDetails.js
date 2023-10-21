import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Cards.module.scss";

const CardDetails = () => {
  let [fetchData, updateFetchedData] = useState([]);
  // console.log(fetchData);
  let { name, image, location, origin, gender, species, status, type } =
    fetchData;

  let { id } = useParams();

  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      // console.log(data);
      // console.log(data.results);
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center ">
      <div className="d-flex flex-column gap-3 ">
        <h1 className="text-center">{name}</h1>
        <div className="d-flex flex-column gap-3 border border-success border-2 rounded p-1">
          <img src={image} alt="" className="img-fluid rounded" />

          {(() => {
            if (status === "Dead") {
              return (
                <div className={`${styles.badge}  badge bg-danger fs-5`}>
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div className={`${styles.badge}  badge bg-success fs-5`}>
                  {status}
                </div>
              );
            } else {
              return (
                <div className={`${styles.badge}  badge bg-secondary fs-5`}>
                  {status}
                </div>
              );
            }
          })()}

          <div className="content ">
            <div className=""></div>
            <span className="fw-bold">Gender : </span>
            {gender}
          </div>
          <div className="content">
            <div className=""></div>
            <span className="fw-bold">Species : </span>
            {species}
          </div>

          <div className="content">
            <div className=""></div>
            <span className="fw-bold">Type : </span>
            {type === "" ? "Unknown" : type}
          </div>
          <div className="content">
            <div className=""></div>
            <span className="fw-bold">Origin : </span>
            {origin?.name}
          </div>
          <div className="content">
            <div className=""></div>
            <span className="fw-bold">Location : </span>
            {location?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
