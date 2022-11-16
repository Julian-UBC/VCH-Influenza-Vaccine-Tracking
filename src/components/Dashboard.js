import { Button, Paper } from "@mui/material";
import React from "react";

export const Dashboard = ({
  timeAppointment,
  handleBooking,
  handleAppointment,
}) => {
  return (
    <div className="">
      <div>
        <h1 className="text-4xl">Welcome, Team 2</h1>
      </div>
      <div className="flex mt-12 gap-40">
        <div className="">
          <p>Flu Vaccination:</p>
          <Button variant="contained" onClick={handleBooking}>
            Book an Appointment
          </Button>
        </div>
        <div className="">
          <p className="mb-8">Booked Appointment:</p>
          <div className="flex gap-4 items-center">
            <Paper
              elevation={2}
              className="py-4 px-8"
              onClick={() => console.log("click")}
            >
              {timeAppointment.id === -1
                ? "No Appoinment"
                : "November 15, 2022 " + timeAppointment.time}
            </Paper>
            {timeAppointment.id === -1 ? (
              <div></div>
            ) : (
              <Button
                variant="contained"
                onClick={handleAppointment}
                className="h-8"
              >
                Go to Appointment
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
