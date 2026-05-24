import { useState } from "react";

import {
  Button,
  InputLabel,
  TextareaAutosize,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import "./index.css";
import collaboration from "../../../assets/Collaborate.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [snackbarMessage, setSnackbarMessage] = useState("");
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const formRef = useRef();
  // console.log("SERVICE:", import.meta.env.EMAILSERVICEID);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILSERVICEID,
        import.meta.env.VITE_EMAILTEMPLATEID,
        formRef.current,
        import.meta.env.VITE_EMAILPUBLICKEY,
      )
      .then(
        () => {
          setSnackbarOpen(true);
          setSnackbarMessage("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.log(error.text);
          setSnackbarOpen(true);
          setSnackbarMessage("Failed to send message.");
        },
      );
  };
  return (
    <>
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-header-wrapper">
            <img src={collaboration} width={350} />
            <h1 className="contact-header">Let's Work Together</h1>
            <p className="contact-subtext">
              Ready to collaborate on your next project? wheather you need a
              Fullstack developer, ReactNative consultant or Frontend devloper
              Let's connect and work together.
            </p>
          </div>
          <form className="mail" ref={formRef} onSubmit={sendEmail}>
            <InputLabel>Name </InputLabel>
            <TextField placeholder="Your Name" name="user_name" />
            <InputLabel>Email </InputLabel>
            <TextField
              placeholder="johndoe@example.com"
              type="email"
              name="user_email"
            />
            <InputLabel>Subject </InputLabel>
            <TextField
              placeholder="What's this about"
              type="text"
              name="subject"
            />
            <InputLabel>Message </InputLabel>
            <TextareaAutosize
              name="message"
              minRows={3}
              className="mail-textarea"
              placeholder="Tell me about your project"
              onFocus={(e) => {
                e.target.style.borderColor = "#1976d2";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#d1d5db";
              }}
            />
            <Button variant="contained" type="submit">
              Submit
            </Button>

            <Snackbar
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              open={snackbarOpen}
              autoHideDuration={6000}
              onClose={() => setSnackbarOpen(false)}
            >
              <Alert
                onClose={() => setSnackbarOpen(false)}
                severity={
                  snackbarMessage.includes("success") ? "success" : "error"
                }
                variant="filled"
              >
                {snackbarMessage}
              </Alert>
            </Snackbar>
          </form>
        </div>
      </div>
    </>
  );
};

export default index;
