import React, { useContext } from "react";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useNavigate, Link } from "react-router-dom";
import AuthProvider from "../contexts/AuthProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "80%", sm: "500px" },
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

function LoginModal() {
  const auth = useContext(AuthProvider);
  console.log(auth);
  // const { username, password, isAuthenticated } = Auth.state;
  // console.log(Auth);
  // const onSubmit = async (e) => {
  //   e.preventDefault();
  //   // dispatch({ type: "login" });
  //   try {
  //     // await login({ username, password });
  //     // dispatch({ type: "success" });
  //   } catch (error) {
  //     // dispatch({ type: "error" });
  //   }
  // };
  const onSubmit = () => {};

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Modal
      open={true}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Avatar sx={{ bgcolor: deepOrange[500], margin: "auto" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography variant="h5" align="center" sx={{ mt: "12px", mb: "12px" }}>
          Login
        </Typography>
        <form className="form" onSubmit={onSubmit}>
          {/* {error && (
            <Alert severity="error" sx={{ mb: "16px" }}>
              {error}
            </Alert>
          )} */}

          <TextField
            fullWidth
            id="outlined-password-input"
            label="Username"
            type="text"
            // value={username}
            // onChange={(e) =>
            //   dispatch({
            //     type: "field",
            //     payload: { name: "username", value: e.currentTarget.value },
            //   })
            // }
            sx={{ mb: "12px" }}
          />
          <FormControl fullWidth variant="outlined" sx={{ mb: "12px" }}>
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              // value={password}
              // onChange={(e) =>
              //   dispatch({
              //     type: "field",
              //     payload: { name: "password", value: e.currentTarget.value },
              //   })
              // }
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            color="error"
            variant="contained"
            // disabled={isLoading}
          >
            {/* {isLoading ? "LOGGING IN..." : "SIGN IN"} */}
            SIGN IN
          </Button>
          <Stack
            direction="row"
            spacing={2}
            sx={{ justifyContent: "space-between", mt: "16px" }}
          >
            <Typography
              component={Link}
              to={`#`}
              variant="body2"
              color="error"
              sx={{ textDecoration: "none" }}
            >
              Forgot password?
            </Typography>
            <Typography
              component={Link}
              to={`#`}
              variant="body2"
              color="error"
              sx={{ textDecoration: "none" }}
            >
              Don't have an account? Sign Up
            </Typography>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
}

export default LoginModal;
