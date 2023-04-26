import React from "react";
import Appbar from '../../components/appbar';
import RegistrationForm from "../../components/registrationForm";
import StudentsTable from "../../components/studentsTable";

const Dashboard: React.FC = () => {
  return (
    <>
      <Appbar />
      <RegistrationForm />
      <StudentsTable />
    </>
  )
}

export default Dashboard;
