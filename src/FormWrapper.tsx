import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

const FormWrapper = ({ title, children }: FormWrapperProps) => {
  return (
    <>
      <h2
        style={{
          textAlign: "center",
          margin: 0,
          marginBottom: "2rem",
          color: "#f48225",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem 0.5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 480px)",
        }}
      >
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
