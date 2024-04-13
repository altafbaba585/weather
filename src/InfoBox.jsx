import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import SevereColdIcon from "@mui/icons-material/SevereCold";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./Style.css";

function InfoBox({ info }) {
  const imgURL =
    "https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90JTIwZGF5fGVufDB8fDB8fHww";
  const COLD_URL =
    "https://images.unsplash.com/photo-1516047487059-fd288d84e8cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="info">
      <Card sx={{ maxWidth: 345, minWidth: 345 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={
            info.humidity > 80 ? RAIN_URL : info.temp < 15 ? COLD_URL : HOT_URL
          }
          title="Cloudy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.name}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp < 15 ? (
              <SevereColdIcon />
            ) : (
              <WbSunnyIcon />
            )}
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>humidity = {info.humidity}&deg;C</p>
            <p>FeelsLike = {info.FeelsLike}&deg;C</p>
            <p>
              description: <b>{info.description}</b>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
