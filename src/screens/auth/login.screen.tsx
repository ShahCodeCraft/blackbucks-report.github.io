import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  TextField,
  Grid,
  Box,
  Typography,
  FormControl,
  Link,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Form, Formik, Field, ErrorMessage } from "formik";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Checkbox from "@mui/material/Checkbox";
import CloseIcon from "@mui/icons-material/Close";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Images from "../../assets/images";
// import AprovalPage from './AprovalPage';

const LoginScreen = () => {
  const [open, setOpen] = useState(false);
  const [mail, setMail] = useState("");
  const [collegeCode, setCollegeCode] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const navigate = useNavigate();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleReset = () => {
    // Reset the form or perform any other necessary logic
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSignUp = () => {
    // console.log("Signup:", mail, collegeCode, collegeName);
    handleClose();
  };
  const onSubmitRegisterForm = () => {
    navigate("/dashboard");
  };
  return (
    <Box>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ flexDirection: { xs: "column", sm: "row" } }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <img src={Images.figma} width="50%" height="50%" alt="Error" />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Formik
            initialValues={{
              FullName: "",
              Email: "",
              Code: "",
              Mobile: "",
              CollegeCode: "",
              CollegeName: "",
            }}
            // validationSchema={
            //   yup.object({
            //         FullName:yup.string().required('Name Required'),
            //         Email:yup.string().required('Email Required'),
            //         Mobile:yup.number().required('Mobile Required'),
            //         Code:yup.string().required(),
            //   })
            // }
            onSubmit={(values) => {
              onSubmitRegisterForm();
            }}
          >
            <Form>
              <Grid sx={{ background: "#F7F8F8" }}>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "right",
                    background: "#F7F8F8",
                    mr: 5,
                  }}
                >
                  <img src={Images.figmaLogo} alt="Figma Logo" />
                </Grid>

                <Grid sx={{ display: "flex", justifyContent: "center" }}>
                  <Typography
                    color="#107869"
                    variant="h5"
                    sx={{ fontWeight: "bold" }}
                  >
                    Register
                  </Typography>
                </Grid>
              </Grid>

              <Divider sx={{ background: "gray", padding: "0.5px" }} />

              <Grid
                sx={{
                  width: "100%",
                  display: "grid",
                  justifyContent: "center",
                  background: "#F7F8F8",
                  padding: "15px",
                }}
              >
                <FormControl sx={{ mt: 5 }}>
                  <Field
                    type="text"
                    name="FullName"
                    variant="standard"
                    label="Full Name"
                    size="small"
                    as={TextField}
                  />
                </FormControl>
                <Grid sx={{ color: "red" }}>
                  <ErrorMessage name="FullName"></ErrorMessage>
                </Grid>

                <FormControl sx={{ mt: 3 }}>
                  <Field
                    type="email"
                    name="Email"
                    variant="standard"
                    label="Email"
                    size="small"
                    as={TextField}
                  />
                </FormControl>
                <Grid sx={{ color: "red" }}>
                  <ErrorMessage name="Email"></ErrorMessage>
                </Grid>

                <Grid sx={{ mt: 3, display: "flex" }}>
                  <Select
                    defaultValue="India"
                    name="Code"
                    sx={{ width: "30%" }}
                    size="small"
                  >
                    <MenuItem value="India">
                      <img
                        src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                        width="15px"
                        height="15px"
                        alt="India Flag"
                      />{" "}
                      +91
                    </MenuItem>
                    <MenuItem value="USA">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                        width="15px"
                        height="15px"
                        alt="USA Flag"
                      />{" "}
                      +1
                    </MenuItem>
                    <MenuItem value="Germany">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
                        width="15px"
                        height="15px"
                        alt="Germany Flag"
                      />{" "}
                      +49
                    </MenuItem>
                  </Select>
                  <Field
                    sx={{ width: "70%", ml: 2 }}
                    type="text"
                    name="Number"
                    variant="standard"
                    label="Mobile"
                    size="small"
                    as={TextField}
                  />
                </Grid>
                <Grid sx={{ color: "red" }}>
                  <ErrorMessage name="Mobile"></ErrorMessage>
                </Grid>

                <Grid sx={{ mt: 3, display: "flex" }}>
                  <Field
                    fullWidth
                    text="text"
                    name="College Code"
                    variant="standard"
                    label="College Code"
                    size="small"
                    as={TextField}
                  />
                  <Field
                    fullWidth
                    sx={{ ml: 6 }}
                    type="text"
                    name="College Name"
                    variant="standard"
                    label="College Name"
                    size="small"
                    as={TextField}
                  />
                </Grid>

                <Grid sx={{ mt: 5, display: "flex" }}>
                  <Grid>
                    <Checkbox />
                  </Grid>
                  <Grid sx={{ mt: 1 }}>
                    <Typography variant="caption">
                      I agree to receive Promotional Communication from
                      Blockbucks
                    </Typography>
                  </Grid>
                </Grid>

                <Grid sx={{ display: "flex" }}>
                  <Grid>
                    <Checkbox />
                  </Grid>
                  <Grid sx={{ mt: 1 }}>
                    <Typography variant="caption">
                      I agree to <a href="#">Terms and Condition</a> and{" "}
                      <a href="#">Privacy Policy</a>
                    </Typography>
                  </Grid>
                </Grid>

                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 5, background: "#107869" }}
                >
                  SignUp
                </Button>

                <Typography
                  sx={{ mt: 3, display: "flex", justifyContent: "center" }}
                >
                  or
                </Typography>

                <Grid item>
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      border: 1,
                      borderColor: "black",
                      padding: "10px",
                      mt: 3,
                      borderRadius: "5px",
                    }}
                  >
                    <Button onClick={handleOpen}>
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png"
                        width="20px"
                        height="20px"
                        alt="Google Logo"
                      />
                      <Link underline="none" sx={{ ml: 2 }}>
                        Sign up/Sign in With Gmail
                      </Link>
                    </Button>
                  </Grid>

                  <Dialog open={open} onClose={handleClose}>
                    <DialogTitle
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#107869",
                        fontWeight: "bold",
                      }}
                    >
                      Sign in With Gmail{" "}
                      <CloseIcon
                        sx={{ position: "absolute", right: "10px", top: "5px" }}
                        onClick={handleClose}
                      />
                    </DialogTitle>
                    <DialogContent onReset={handleReset}>
                      <Grid sx={{ mt: 3, display: "flex" }}>
                        <Field
                          fullWidth
                          text="text"
                          name="CollCode"
                          variant="standard"
                          label="College Code"
                          size="small"
                          as={TextField}
                        />
                        <Field
                          fullWidth
                          sx={{ ml: 2 }}
                          type="text"
                          name="CollName"
                          variant="standard"
                          label="College Name"
                          size="small"
                          as={TextField}
                        />
                      </Grid>

                      <Grid sx={{ mt: 3, display: "flex" }}>
                        <Select
                          defaultValue="India"
                          name="Code"
                          sx={{ width: "30%" }}
                          size="small"
                        >
                          <MenuItem value="India">
                            <img
                              src="https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
                              width="15px"
                              height="15px"
                              alt="India Flag"
                            />{" "}
                            +91
                          </MenuItem>
                          <MenuItem value="USA">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
                              width="15px"
                              height="15px"
                              alt="USA Flag"
                            />{" "}
                            +1
                          </MenuItem>
                          <MenuItem value="Germany">
                            <img
                              src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
                              width="15px"
                              height="15px"
                              alt="Germany Flag"
                            />{" "}
                            +49
                          </MenuItem>
                        </Select>

                        <Field
                          sx={{ width: "70%", ml: 2 }}
                          type="text"
                          name="Num"
                          variant="standard"
                          label="Mobile"
                          size="small"
                          as={TextField}
                        />
                      </Grid>
                    </DialogContent>
                    <DialogActions
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        fullWidth
                        onClick={handleSignUp}
                        sx={{ color: "white", background: "#107869" }}
                      >
                        Submit Request
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginScreen;
