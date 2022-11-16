import React, { useState } from "react";
import { Button, TextField, Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

import "./BookAppointment.css";

export const BookAppointment = ({
  timeSlot,
  timeAppointment,
  setTimeAppointment,
  handleNext,
}) => {
  const [value, setValue] = React.useState(dayjs("2022-11-14T00:00:00.000Z"));

  const [isSelected, setIsSelected] = useState(timeAppointment.id);
  const [whichTimeSlot, setWhichTimeSlot] = useState(timeAppointment.timeSlot);
  const [isTimeAvailable, setIsTimeAvailable] = useState(false);

  const handleNewValue = (newValue) => {
    setValue(newValue);
    setWhichTimeSlot(whichTimeSlot === 0 ? 1 : 0);
  };

  const handleTimeClick = (timeId) => {
    setIsSelected(timeId);
  };

  const bookMessage = () => {
    if (isTimeAvailable) {
      return (
        <div>
          <div className="text-green-600">Time Available. Booked!</div>
        </div>
      );
    }
  };

  const bookHandler = () => {
    setIsTimeAvailable(true);
    setTimeAppointment({
      id: isSelected,
      time: timeSlot[whichTimeSlot][isSelected].time,
      timeSlot: whichTimeSlot,
    });
  };

  return (
    <div className="appointment">
      <div className="flex gap-40">
        <div className="basis-1/2">
          <h1 className="mb-8 text-2xl">Select Date</h1>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              displayStaticWrapperAs="desktop"
              openTo="day"
              value={value}
              onChange={(newValue) => {
                handleNewValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className="basis-1/2">
          <h1 className="mb-8 text-2xl">Select Time</h1>
          <div className="h-full">
            {timeSlot[whichTimeSlot].map((time) => (
              <Paper
                elevation={2}
                className={
                  (time.id === isSelected ? "selected" : "") +
                  " py-4 px-8 my-4 cursor-pointer"
                }
                onClick={() => handleTimeClick(time.id)}
              >
                {time.time}
              </Paper>
            ))}
          </div>
        </div>
      </div>
      <div className="my-4">{bookMessage()}</div>
      <div className="flex gap-4 justify-center">
        <Button variant="outlined" onClick={bookHandler}>
          Book
        </Button>
        {isTimeAvailable ? (
          <Button variant="contained" onClick={handleNext}>
            Next
          </Button>
        ) : (
          <Button variant="contained" disabled>
            Next
          </Button>
        )}
      </div>
    </div>
  );
};
