import { Button } from "@mui/material";
import React from "react";

export const Home = ({ className, handleLogin }) => {
  return (
    <div className={className}>
      <div>
        <h1 className="text-4xl">VCH Staff Login</h1>
        <p className="text-xl">Take good care of yourself</p>
      </div>
      <div className="mt-12">
        <Button variant="contained" onClick={handleLogin}>
          Log In
        </Button>
      </div>
    </div>
  );
};
