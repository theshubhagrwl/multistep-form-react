import React from "react";
import FormWrapper from "./FormWrapper";

type UserData = {
  email: string;
  password: string;
};

type AccountFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const AccountForm = ({ email, password, updateFields }: AccountFormProps) => {
  return (
    <FormWrapper title="User Account">
      <label> Email</label>
      <input
        autoFocus
        required
        type="email"
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label> Password</label>
      <input
        required
        type="password"
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
};

export default AccountForm;
