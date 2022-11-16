import "./App.css";
import { Home } from "./components/Home";
import { useState } from "react";
import { Login } from "./components/Login";
import { Dashboard } from "./components/Dashboard";
import { BookAppointment } from "./components/BookAppointment";
import { StaffForm } from "./components/StaffForm";
import { ImmunizerForm } from "./components/ImmunizerForm";
import { Submitted } from "./components/Submitted";
import { Profile } from "./components/Profile";
import dayjs from "dayjs";
import { LoginClinic } from "./components/LoginClinic";
import { StaffFormClinic } from "./components/StaffFormClinic";

function App() {
  const [isLoginPage, setIsLoginPage] = useState(false);
  const [isDashboard, setIsDashboard] = useState(false);
  const [isBookAppointment, setIsBookAppointment] = useState(false);
  const [isStaffForm, setIsStaffForm] = useState(false);
  const [isLoginClinic, setIsLoginClinic] = useState(false);
  const [isStaffFormClinic, setIsStaffFormClinic] = useState(false);
  const [isImmunizerForm, setIsImmunizerForm] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const [timeAppointment, setTimeAppointment] = useState({
    id: -1,
    time: "",
    timeSlot: 0,
  });

  const [personalData, setPersonalData] = useState({
    lastName: "Widjaja",
    firstName: "Julian",
    dob: dayjs("2003-10-02"),
    postalCode: "",
    phoneNumber: "",
    workEmail: "",
  });

  const timeSlot = [
    [
      { id: 0, time: "11.00 - 11.30" },
      { id: 1, time: "11.30 - 12.00" },
      { id: 2, time: "13.00 - 13.30" },
      { id: 3, time: "14.00 - 14.30" },
    ],
    [
      { id: 0, time: "10.00 - 10.30" },
      { id: 1, time: "11.30 - 12.00" },
      { id: 2, time: "13.00 - 13.30" },
      { id: 3, time: "15.00 - 15.30" },
    ],
  ];

  const handleLogout = () => {
    setIsLoginPage(false);
    setIsDashboard(false);
    setIsBookAppointment(false);
    setIsStaffForm(false);
    setIsLoginClinic(false);
    setIsStaffFormClinic(false);
    setIsImmunizerForm(false);
    setIsFormSubmitted(false);
  };

  const handleStaffFormSave = () => {
    setIsStaffForm(false);
    setIsBookAppointment(false);
  };

  const content = () => {
    if (isFormSubmitted) {
      return (
        <div>
          <Submitted />
        </div>
      );
    }
    if (isImmunizerForm) {
      return (
        <div>
          <ImmunizerForm handleSubmit={() => setIsFormSubmitted(true)} />
        </div>
      );
    }
    if (isStaffFormClinic) {
      return (
        <div>
          <StaffFormClinic
            personalData={personalData}
            setPersonalData={setPersonalData}
            handleNext={() => setIsImmunizerForm(true)}
          />
        </div>
      );
    }
    if (isLoginClinic) {
      return (
        <div>
          <LoginClinic handleLogin={() => setIsStaffFormClinic(true)} />
        </div>
      );
    }
    if (isStaffForm) {
      return (
        <div>
          <StaffForm
            personalData={personalData}
            setPersonalData={setPersonalData}
            handleNext={() => handleStaffFormSave()}
          />
        </div>
      );
    }
    if (isBookAppointment) {
      return (
        <div>
          <BookAppointment
            timeSlot={timeSlot}
            timeAppointment={timeAppointment}
            setTimeAppointment={setTimeAppointment}
            handleNext={() => setIsStaffForm(true)}
            handleLogout={handleLogout}
          />
        </div>
      );
    }
    if (isDashboard) {
      return (
        <div>
          <Dashboard
            timeAppointment={timeAppointment}
            handleBooking={() => setIsBookAppointment(true)}
            handleAppointment={() => setIsLoginClinic(true)}
          />
        </div>
      );
    }
    if (isLoginPage) {
      return (
        <div>
          <Login handleLogin={() => setIsDashboard(true)} />
        </div>
      );
    }
    return (
      <div>
        <Home className="" handleLogin={() => setIsLoginPage(true)} />
      </div>
    );
  };

  return (
    <div className="App h-screen flex items-center text-center justify-center">
      <div className="profile">
        <Profile handleLogout={handleLogout} />
      </div>
      {content()}
    </div>
  );
}

export default App;
