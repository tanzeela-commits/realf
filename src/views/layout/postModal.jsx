import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import {
  TextField,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Grid,
  Button,
  Stack,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  width: "85%",
  maxWidth: "1020px",
  overflowY: "auto",
  boxShadow: 24,
  borderRadius: 1,
  p: 4,
};

export default function JobPostModal({ open, handleClose }) {
  const router = useRouter();
  const [jobname, setjobname] = useState("");
  const [shopname, setshopname] = useState("");
  const [shoploc, setshoploc] = useState("");
  const [workersReq, setworkersReq] = useState("");
  const [salary, setsalary] = useState("");
  const [timing, settiming] = useState("");
  const [postimg, setpostimg] = useState("");
  const [age, setage] = useState("");
  const [experience, setexperience] = useState("");
  const [description, setdescription] = useState("");
  const JWTtoken = window.localStorage.getItem("JWTtoken");

  async function editUserDetails() {
    try {
      const check = await axios.post(
        "http://localhost:5000/postjob",
        {
          jobname,
          shopname,
          shoploc,
          workersReq,
          salary,
          timing,
        },
        {
          headers: {
            Authorization: `Bearer ${JWTtoken}`,
          },
        }
      );

      // console.log(sendForm);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <Modal
        aria-labelledby="Job-title"
        aria-describedby="job-inputs"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h5" component="h2">
            Create a Job Post
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                value={shopname}
                onChange={(e) => setshopname(e.target.value)}
                label="Shop Name: "
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Job Type: </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={jobname}
                  label="Job Type"
                  onChange={(e) => setjobname(e.target.value)}
                >
                  <MenuItem value={10}>Plumber</MenuItem>
                  <MenuItem value={20}>Electrition</MenuItem>
                  <MenuItem value={30}>Milk man</MenuItem>
                  <MenuItem value={30}>General store helper</MenuItem>
                  <MenuItem value={30}>Bike Mechanic</MenuItem>
                  <MenuItem value={30}>Car Mechanic</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Timings: "
                value={timing}
                onChange={(e) => settiming(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Location: "
                value={shoploc}
                onChange={(e) => setshoploc(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Age Required: "
                value={age}
                onChange={(e) => setage(e.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                value={salary}
                onChange={(e) => setsalary(e.target.value)}
                id="outlined-basic"
                label="Salary Offered: "
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                value={workersReq}
                onChange={(e) => setworkersReq(e.target.value)}
                label="No. of Employee Required: "
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                value={experience}
                onChange={(e) => setexperience(e.target.value)}
                label="Experience required: "
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <FileUploader name="file" types={["JPG", "PNG"]} value={postimg} onChange={(e) => setpostimg(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Description: "
                value={description}
                onChange={(e) => setdescription(e.target.value)}
                multiline
                rows={4}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sx={{}}>
              <Stack direction="row" spacing={1} sx={{ justifyContent: "flex-end" }}>
                <Button
                  variant="outlined"
                  sx={{ color: "text.disabled", borderColor: "text.disabled" }}
                  onClick={handleClose}
                >
                  Cancel
                </Button>
                {/* <button onClick={editUserDetails}>post</button> */}
                <Button variant="contained" onClick={editUserDetails}>
                  Post
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
}
