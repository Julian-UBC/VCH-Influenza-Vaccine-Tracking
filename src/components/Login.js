import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const Login = ({ className, handleLogin }) => {
  const email = "team2@thinktech.com";
  const password = "team2willwin";

  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const validate = () => {
    if (email === inputEmail && password === inputPassword) {
      console.log("success");
      handleLogin();
    } else {
      console.log("fail");
    }
  };

  return (
    <div className={className + " flex gap-4"}>
      <TextField
        required
        id="outlined-required"
        label="Email"
        defaultValue=""
        className="mr-4"
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <TextField
        required
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        onChange={(e) => setInputPassword(e.target.value)}
      />
      <Button variant="contained" onClick={validate}>
        Log In
      </Button>
    </div>
  );
};
