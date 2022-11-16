import React, { useState } from "react";
import dayjs from "dayjs";
import {
  TextField,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";

export const ImmunizerForm = ({ handleSubmit }) => {
  const [hasValidate, setHasValidate] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [date, setDate] = useState(dayjs("2022-11-16"));
  const [location, setLocation] = useState("");
  const [lotNumber, setLotNumber] = useState("");
  const [vaccineType, setVaccineType] = useState("");

  const immunizer = { firstName: "John", lastName: "Doe" };

  const validateMessage = () => {
    if (isValid) {
      return (
        <div>
          <div className="text-green-600">Validation Success!</div>
        </div>
      );
    } else if (hasValidate) {
      return (
        <div>
          <div className="text-red-600">
            Validation Failed! Please check again your information
          </div>
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const validateHandler = () => {
    if (immunizer.firstName === firstName && immunizer.lastName === lastName) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setHasValidate(true);
  };

  return (
    <div className="m-auto">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          boxShadow: 3,
        }}
        noValidate
        autoComplete="off"
      >
        <div className="p-8">
          <div className="text-left mb-4 text-xl">
            <h1>Personal Information</h1>
          </div>
          <div className="flex justify-center">
            <TextField
              required
              id="outlined-required"
              label="Immunizer's Last Name"
              defaultValue=""
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Immunizer's First Name"
              defaultValue=""
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Vaccination"
                value={date}
                onChange={(newDate) => {
                  setDate(newDate);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              required
              id="outlined-required"
              label="Clinic Location"
              defaultValue=""
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <TextField
              required
              id="outlined-required"
              label="Lot #"
              defaultValue=""
              className=""
              onChange={(e) => setLotNumber(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Vaccine Type"
              defaultValue=""
              className=""
              onChange={(e) => setVaccineType(e.target.value)}
            />
          </div>
        </div>
      </Box>

      <div className="my-4">{validateMessage()}</div>
      <div className="flex gap-4 justify-center">
        <Button variant="outlined" onClick={validateHandler}>
          Validate
        </Button>
        {isValid ? (
          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};
