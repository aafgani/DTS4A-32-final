import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Typography, Link, Box, Divider } from "@mui/material";
import styled from "@emotion/styled";
import LoginForm from "./LoginForm";
import SocialAuth from "./SocialAuth";
// import Logo from "../components/Logo";
// import { motion } from "framer-motion";

//////////////////////////////////
const RootStyle = styled("div")({
  background: "rgb(249, 250, 251)",
  height: "100vh",
  display: "grid",
  placeItems: "center",
});

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled("div")({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const Login = ({ loginOrRegister }) => {
  return (
    <RootStyle>
      <Container maxWidth="sm">
        <ContentStyle>
          {loginOrRegister === "login" ? (
            <>
              <HeadingStyle>
                {/* <Logo /> */}
                <Typography sx={{ color: "text.secondary", mb: 5 }}>
                  Login to your account
                </Typography>
              </HeadingStyle>

              <Box>
                <SocialAuth />
              </Box>

              <Divider sx={{ my: 3 }}>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  OR
                </Typography>
              </Divider>
            </>
          ) : (
            <HeadingStyle>
              {/* <Logo /> */}
              <Typography sx={{ color: "text.secondary", mb: 5 }}>
                Register your account
              </Typography>
            </HeadingStyle>
          )}

          <LoginForm loginOrRegister={loginOrRegister} />

          <Typography sx={{ mt: 3 }}>
            Don’t have an account?{" "}
            <Link variant="subtitle2" component={RouterLink} to="/register">
              Sign up
            </Link>
          </Typography>
          <Typography sx={{ mt: 3 }}>
            Back to{" "}
            <Link variant="subtitle2" component={RouterLink} to="/home">
              Home?
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
};

export default Login;
