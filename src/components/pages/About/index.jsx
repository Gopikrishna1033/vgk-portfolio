import { Box, Typography } from "@mui/material";
import "./index.css";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
const index = () => {
  const EvonSysprojectpoints = [
    "Developed cross-border payment platform using React.js",
    "Improved UI decision flow by assisting clients with design changes",
    "Built custom Pega Constellation UI components and worked with React SDK",
  ];

  const Verzeopoints = [
    "Learned fundamentals of Machine Learning using Python",
    "Worked on data preprocessing and model building",
    "Gained hands-on experience with supervised learning algorithms",
  ];

  return (
    <>
      <div className="about-container">
        <p className="about-text">
          Over the past 1.5 years, I've worked on enterprise applications using
          Pega Constellation UI and modern frontend technologies, focusing on
          building scalable and user-friendly experiences.
        </p>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent
              align="right"
              variant="body2"
              sx={{
                color: "text.secondary",
                m: "auto 0",
              }}
            >
              Sep 2024 – Present(1 year 8 months)
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: 2, px: 5 }}>
              <Box className="timelineContent">
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  Associate Engineer – EvonSys
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1.5 }}
                >
                  Frontend developer working on multiple enterprise projects.
                </Typography>

                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Key Achievements:
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                  {EvonSysprojectpoints.map((item, index) => (
                    <Typography
                      component="li"
                      variant="body2"
                      key={index}
                      sx={{ mb: 1 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              variant="body2"
              sx={{
                color: "text.secondary",
                m: "auto 0",
              }}
            >
              July 2023 – August 2023 (2 months)
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot></TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: 2, px: 5 }}>
              <Box className="timelineContent">
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  Machine Learning Intern – Verzeo
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 1.5 }}
                >
                  Machine Learning Intern working on machine learning models and
                  data processing tasks.
                </Typography>

                <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 2 }}>
                  Key Achievements:
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 2 }}>
                  {Verzeopoints.map((item, index) => (
                    <Typography
                      component="li"
                      variant="body2"
                      key={index}
                      sx={{ mb: 1 }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </>
  );
};

export default index;
