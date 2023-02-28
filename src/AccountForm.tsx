import React from "react";
import FormWrapper from "./FormWrapper";

const AccountForm = () => {
  return (
    <FormWrapper title="User Account">
      <label> Email</label>
      <input autoFocus required type="email" />
      <label> Password</label>
      <input required type="password" />
    </FormWrapper>
  );
};

export default AccountForm;
