import { Box, Button, Input } from "@mui/material";
import CountDownDate from "../countdount-date/count-down-date";

const WeWillBackSoon = () => {
  const deadline = new Date("December 17, 2023 ");
   return (
    <Box
      sx={{
        background: "linear-gradient(to right,#009BBC,#023A4E)",
        height: "100vh",
        py: { xs: 5, md: 10 },
        px: { xs: 10, md: 20 },
        fontSize: 20,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%" // Adjust the height as needed
        sx={{
          background: "#fff",
          borderRadius: 8,
        }}
      >
        <div>Your Logo</div>
        <div>Coming Soon</div>
        {/* <CountDownDate deadline={deadline} /> */}

        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          // elevation={3}
          width={{ xs: "80%", md: "50%" }}
          sx={{
            boxShadow: 3,
            backgroundColor: "#F5F5FA",
            borderRadius: 8,
            elevation: 8,
            py: { xs: 2, md: 2 },
            px: { xs: 2, md: 2 },
            mx: { xs: 30, md: 30 },
            my: { xs: 4, md: 4 },
          }}
          // spacing={2}
        ></Box>
        <div>We’ll let you know when we are Launching</div>

        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          // elevation={3}
          width={{ xs: "80%", md: "50%" }}
          sx={{
            boxShadow: 9,
            backgroundColor: "#F5F5FA",
            borderRadius: 8,
            elevation: 8,
            py: { xs: 2, md: 2 },
            px: { xs: 2, md: 2 },
            mx: { xs: 30, md: 30 },
            my: { xs: 4, md: 4 },
            fontSize: 20,
          }}
        >
          <Input
            className="MuiTextField-root"
            disableUnderline
            autoComplete="given-name"
            placeholder=" Type your mail here"
            name="firstName"
            required
            id="firstName"
            autoFocus
            height="100%"
            // value={formEmployer.firstName}
            // onChange={handleInputChange}
            sx={{
              backgroundColor: "#F5F5FA",
              width: { md: "60%" },
            }}
          />
          <Button
            // type={handleSubmit}

            sx={{
              backgroundColor: "#014F68",
              borderRadius: 4,
              width: { xs: "50%", md: "30%" },
              height: "50px",
            }}
            variant="contained"
            // onClick={handleLogin}
          >
            Notify Me
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WeWillBackSoon;
