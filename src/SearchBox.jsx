import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Style.css";
import Button from "@mui/material/Button";

function SearchBox({ setResult }) {
  const [city, setCity] = useState("");

  let URL = "https://api.openweathermap.org/data/2.5/weather";
  let KEY = "e614fcd688f6dfbcf74014726db4d671";

  async function fetching() {
    let Data = await fetch(`${URL}?q=${city}&appid=${KEY}&units=metric`);
    let ResponseData = await Data.json();
    console.log(ResponseData);

    let WhetherData = {
      name: ResponseData.name,
      temp: ResponseData.main.temp,
      FeelsLike: ResponseData.main.feels_like,
      humidity: ResponseData.main.humidity,
      description: ResponseData.weather[0].description,
    };

    return WhetherData;
  }

  function GetCityName(evt) {
    setCity(evt.target.value);
  }
  async function handlesubmit(evt) {
    evt.preventDefault();
    // setCity("");

    let newInfo = await fetching();
    setResult(newInfo);
    setCity("");
  }

  return (
    <div className="Whether">
      <form onSubmit={handlesubmit}>
        <h1>Whether App</h1>
        <br />
        <br />

        <h3>Enter City Name For Whether </h3>
        <TextField
          id="outlined-basic"
          label="City Name"
          variant="outlined"
          value={city}
          onChange={GetCityName}
          required
        />
        <br />
        <br />
        <Button variant="contained" color="success" type="submit">
          Get Whether
        </Button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default SearchBox;
