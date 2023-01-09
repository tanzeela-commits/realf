import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Grid, Stack } from "@mui/material";
import axios from "axios";

const Post = () => {
  const JWTtoken = window.localStorage.getItem("JWTtoken");
  const config = {
    headers: {
      Authorization: `Bearer ${JWTtoken}`,
    },
  };
  const [data, setData] = useState([]);
  function getData() {
    axios.get("http://localhost:5000/myposts", config).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  const handleUpdate = () => {
    // code to handle update goes here
  };
  const handleDelete = () => {
    // code to handle update goes here
  };
  return (
    <>
      {data.map((eachdata) => {
        return (
          // <>
          //   <Card
          //     sx={{
          //       px: 2,
          //       border: "0.5px solid",
          //       borderColor: (theme) => theme.palette.action.focus,
          //       boxShadow: (theme) => theme.shadows[9],
          //     }}
          //   >
          //     <CardHeader
          //       action={
          //         <IconButton aria-label="settings">
          //           <MoreVertIcon />
          //         </IconButton>
          //       }
          //       title={
          //         <Typography variant="h5" sx={{ color: "primary.dark", fontWeight: 700 }}>
          //           Title of the Post:{eachdata.jobname}
          //         </Typography>
          //       }
          //       subheader="September 14, 2016"
          //     />

          //     <CardContent>
          //       <Stack spacing={1}>
          //         <Grid container>
          //           <Grid item xs={6}>
          //             <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>Job:</Typography>
          //           </Grid>
          //           <Grid item xs={6}>
          //             <Typography sx={{ color: "primary.dark" }}>{eachdata.shopname}</Typography>
          //           </Grid>
          //         </Grid>
          //         <Grid container>
          //           <Grid item xs={6}>
          //             <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>
          //               Location:
          //             </Typography>
          //           </Grid>
          //           <Grid item xs={6}>
          //             <Typography sx={{ color: "primary.dark" }}>{eachdata.shoploc}</Typography>
          //           </Grid>
          //         </Grid>
          //         <Grid container>
          //           <Grid item xs={6}>
          //             <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>
          //               Salary Offer:
          //             </Typography>
          //           </Grid>
          //           <Grid item xs={6}>
          //             <Typography sx={{ color: "primary.dark" }}>{eachdata.salary}</Typography>
          //           </Grid>
          //         </Grid>
          //         <Grid container>
          //           <Grid item xs={6}>
          //             <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>
          //               Timings
          //             </Typography>
          //           </Grid>
          //           <Grid item xs={6}>
          //             <Typography sx={{ color: "primary.dark" }}>{eachdata.timing}</Typography>
          //           </Grid>
          //         </Grid>
          //       </Stack>
          //     </CardContent>
          //     <CardContent>
          //       <Grid container>
          //         <Grid item xs={12}>
          //           <Typography sx={{ color: "primary.dark", fontWeight: 700 }}>
          //             Description:
          //           </Typography>
          //         </Grid>
          //         <Grid item>
          //           <Typography sx={{ color: "primary.dark" }}>
          //             It is a long established fact that a reader will be distracted by the readable
          //             content of a page when looking at its layout.
          //           </Typography>
          //         </Grid>
          //       </Grid>
          //     </CardContent>
          //     <CardMedia>
          //       <Box
          //         sx={{
          //           borderRadius: 1,
          //           overflow: "hidden",
          //         }}
          //       >
          //         <img
          //           style={{ maxWidth: "100%", minHeight: "100%" }}
          //           src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          //         />
          //       </Box>
          //     </CardMedia>
          //     <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
          //       <Button sx={{ textTransform: "uppercase" }}>applications</Button>
          //     </CardActions>
          //   </Card>
          // </>
          <>
            <div
              style={{
                padding: "2px",
                border: "0.5px ",
                width: "25%",
                boxShadow: "0 9px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
              }}
            ></div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <h5 style={{ color: "primary.dark", fontWeight: 700 }}>
                Title of the Post: {eachdata.jobname}
              </h5>
              <button style={{ background: "none", border: "none" }}>
                <i className="material-icons">more_vert</i>
              </button>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "primary.dark", fontWeight: 700 }}>Job:</span>
                <span style={{ color: "primary.dark" }}> {eachdata.shopname}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "primary.dark", fontWeight: 700 }}>Location:</span>
                <span style={{ color: "primary.dark" }}> {eachdata.shoploc}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "primary.dark", fontWeight: 700 }}>Salary Offer:</span>
                <span style={{ color: "primary.dark" }}> {eachdata.salary}</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "primary.dark", fontWeight: 700 }}>Timings:</span>
                <span style={{ color: "primary.dark" }}> {eachdata.timing}</span>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "primary.dark", fontWeight: 700 }}>Description:</span>
              </div>
              <div>
                <span style={{ color: "primary.dark" }}>
                  It is a long established fact that a reader will be distracted by the readable
                  content of a page when looking at its layout.
                </span>
              </div>
            </div>
            <div>
              <img
                style={{
                  maxWidth: "100%",
                  minHeight: "100%",
                  borderRadius: "1px",
                  overflow: "hidden",
                }}
                src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYW"
              ></img>
            </div>
            <div
              style={{
                display: "flex-end",
                flexDirection: "row",
                margin: "5px 5px 5px 5px",
              }}
            >
              {" "}
              <div>
                {" "}
                <button
                  style={{
                    backgroundColor: "#C9835B",
                    border: "none",
                    color: "white",
                    padding: "8px 20px",
                    boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",

                    borderRadius: "12px",
                    textAlign: "center",
                    fontSize: "16px",
                    marginRight: "8px",
                    // display: "flex",
                    // flexDirection: "row",
                  }}
                  onClick={handleDelete}
                >
                  delete
                </button>
              </div>
              <div>
                {" "}
                <button
                  style={{
                    backgroundColor: "#C9835B",
                    border: "none",
                    color: "white",
                    padding: "8px 20px",
                    marginRight: "2px",
                    boxShadow: "0 8px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)",

                    borderRadius: "12px",
                    textAlign: "center",
                    fontSize: "16px",
                    // display: "flex",
                    // flexDirection: "row",
                  }}
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
export default Post;
