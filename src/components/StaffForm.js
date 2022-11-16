import React, { useState } from "react";
import dayjs from "dayjs";
import {
  TextField,
  Box,
  Tooltip,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import "./StaffForm.css";

export const StaffForm = ({ personalData, setPersonalData, handleNext }) => {
  const [hasValidate, setHasValidate] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [dob, setDob] = useState(dayjs("2022-11-16"));
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [isConsent, setIsConsent] = useState(false);

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
    let diff = personalData.dob.diff(dob, "day");
    if (
      personalData.firstName === firstName &&
      personalData.lastName === lastName &&
      diff === 0
    ) {
      setIsValid(true);
      setPersonalData({
        ...personalData,
        postalCode: postalCode,
        phoneNumber: phoneNumber,
        workEmail: workEmail,
      });
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
              label="Last Name"
              defaultValue=""
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="First Name"
              defaultValue=""
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={dob}
                onChange={(newDate) => {
                  setDob(newDate);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField
              required
              id="outlined-required"
              label="Home Postal Code (A1A 1A1)"
              defaultValue=""
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="flex items-center">
              <TextField
                required
                id="outlined-required"
                label="Phone Number"
                defaultValue=""
                className="info-text"
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Tooltip title="Please enter the email address you wish to have your submission confirmation number sent to.">
                <InfoOutlinedIcon />
              </Tooltip>
            </div>
            <div className="flex items-center">
              <TextField
                required
                id="outlined-required"
                label="Work Email"
                defaultValue=""
                className="info-text"
                onChange={(e) => setWorkEmail(e.target.value)}
              />
              <Tooltip title="Please enter the email address you wish to have your submission confirmation number sent to.">
                <InfoOutlinedIcon />
              </Tooltip>
            </div>
          </div>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={isConsent}
                  onChange={() => setIsConsent(!isConsent)}
                  name="consent"
                />
              }
              label="I consent to sending my information to BC and VCH"
            />
          </div>
        </div>
      </Box>

      <div className="my-4">{validateMessage()}</div>
      <div className="flex gap-4 justify-center">
        <Button variant="outlined" onClick={validateHandler}>
          Validate
        </Button>
        {isConsent && isValid ? (
          <Button variant="contained" onClick={handleNext}>
            Save
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Save
          </Button>
        )}
      </div>
    </div>
  );
};
