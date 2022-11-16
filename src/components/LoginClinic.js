import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const LoginClinic = ({ className, handleLogin }) => {
  const password = "12345";

  const [inputPassword, setInputPassword] = useState("");

  const validate = () => {
    if (password === inputPassword) {
      handleLogin();
    }
  };

  return (
    <div className={className}>
      <h1 className="text-4xl text-left mb-8">Login Clinic</h1>
      <div className="flex gap-4">
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
    </div>
  );
};
