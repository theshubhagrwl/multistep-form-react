import React from "react";
import FormWrapper from "./FormWrapper";

const UserForm = () => {
  return (
    <FormWrapper title="User Details">
      <label>First Name</label>
      <input autoFocus required type="text" />
      <label>Last Name</label>
      <input required type="text" />
      <label>Age</label>
      <input required min={1} type="number" />
    </FormWrapper>
  );
};

export default UserForm;
