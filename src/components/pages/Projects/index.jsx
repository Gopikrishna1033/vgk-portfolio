// import React from 'react'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";
import NexTalkImg from "../../../assets/NexTalk.jpg";
import WeatherlyImg from "../../../assets/Weatherly.jpg";
import TimeSmithImg from "../../../assets/TimeSmith.jpg";
import DineFlowImg from "../../../assets/DineFlow.jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import "./index.css";
import { Typography } from "@mui/material";
const index = () => {
  const projects = [
    {
      name: "NexTalk",
      description:
        "Real-time chat application enabling seamless one-to-one communication with instant messaging.",
      image: NexTalkImg,
      github:
        "https://github.com/Gopikrishna1033/chat_app/tree/main/Backend_Chat",
    },
    {
      name: "Weatherly",
      description:
        "Real-time weather application providing live weather updates and forecasts.",
      image: WeatherlyImg,
      github: "https://github.com/Gopikrishna1033/Weather_App/tree/main/src",
    },
    {
      name: "TimeSmith",
      description:
        "E-commerce watch shopping application offering product browsing and seamless user experience for mobile platforms.",
      image: TimeSmithImg,
      github: "https://github.com/Gopikrishna1033/Watch_Man",
    },
    {
      name: "DineFlow",
      description:
        "Restaurant discovery application allowing users to explore menus, view details, and browse restaurant information.",
      image: DineFlowImg,
      github:
        "https://github.com/Gopikrishna1033/Restaruant_App_MUI/tree/main/src",
    },
  ];
  return (
    <>
      <div className="projects-container">
        <Typography className="Project-title">
          Projects I've worked on
        </Typography>

        <Typography className="project-subtitle">
          A showcase of my diverse portfolio spanning real-world applications
          and modern technologies.
        </Typography>

        <div className="projects-grid">
          {projects.map((project, idx) => {
            return (
              <Card key={idx} sx={{ maxWidth: 345 }}>
                <CardMedia component="img" image={project.image} />

                <CardContent>
                  <Typography variant="h6">{project.name}</Typography>

                  <Typography className="project-description">
                    {project.description}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button onClick={() => window.open(project.github, "_blank")}>
                    <OpenInNewIcon />
                    &nbsp;&nbsp;View Source
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default index;
