import React from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import "./Style.css";
import { useState } from "react";

function WhetherInfo() {
  const [weatherInfo, setWeatherInfo] = useState({
    name: "pune",
    temp: 33,
    FeelsLike: 31,
    humidity: 51,
    description: "haze",
  });

  function setResult(newInfo) {
    setWeatherInfo(newInfo);
  }
  return (
    <div>
      <SearchBox setResult={setResult} />
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WhetherInfo;
