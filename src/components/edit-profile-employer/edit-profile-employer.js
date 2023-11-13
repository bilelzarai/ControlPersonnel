import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { Dialog, Snackbar } from "@mui/material";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
import MuiPhoneNumber from "mui-phone-number";
import { MenuItem } from "@mui/material";

import { currencies } from "./helper";

const EditProfileEmployer = () => {
  const [visible, setVisible] = useState(true);
  // const [building, setBuilding] = useState({});
  const [error, setError] = useState();
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [formEmployer, setFormEmployer] = useState({
    firstName: "",
    lastName: "",
  });

  const handleLogin = () => {
    // Implement your login validation here.
    if (formEmployer.firstName === "" || formEmployer.lastName === "") {
      // Successful login
      setError("Invalid email or password");
      setOpenSnackbar(true);
    } else {
      setError("");
    }
  };
  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };
  console.log(formEmployer, 222222222);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log(event, 3333);
  // };

  // React.useEffect(() => {
  //   setBuilding();
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormEmployer({
      ...formEmployer,
      [name]: value,
    });
  };
  // const handleError = () => {
  //   if (formEmployer.firstName === "")
  //     setError({
  //       ...formEmployer,
  //       errorFirstName: "check First Name",
  //     });
  // };
  const onNumberChanged = () => {};
  return (
    <Dialog open={visible} onClose={() => setVisible(false)} scroll="paper">
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit Profile Employer
          </Typography>

          <Box
            component="form"
            // noValidate
            // onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2} className="MuiPaper-root" elevation={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className="MuiTextField-root"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={formEmployer.firstName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="lastName"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                  value={formEmployer.lastName}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <MuiPhoneNumber
                  style={{
                    background: "White",
                  }}
                  fullWidth
                  id="outlined-basic"
                  onChange={onNumberChanged}
                  variant="outlined"
                  label="Phone"
                  required
                  defaultCountry="tn"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Role"
                  defaultValue="EUR"
                  // helperText="Please select your currency"
                >
                  {currencies.map((el) => (
                    <MenuItem key={el.value} value={el.value}>
                      {el.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="outlined-select-currency"
                  select
                  label="Building"
                  defaultValue="EUR"
                  // helperText="Please select your currency"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              {error && (
                <Typography
                  className="MuiTypography-root MuiTypography-colorError"
                  color="error"
                >
                  {error}
                </Typography>
              )}
              <Button
                // type={handleSubmit}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleLogin}
              >
                Confirm
              </Button>
            </Grid>
          </Box>
        </Box>
      </Container>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={error}
      />
    </Dialog>
  );
};
export default EditProfileEmployer;
