import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import UserForm from "./UserForm";
import { useMultiStepForm } from "./useMultistepForm";

function App() {
  const { steps, currentStepIndex, step, isFirstStep, back, next, isLastStep } =
    useMultiStepForm([<UserForm />, <AddressForm />, <AccountForm />]);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "white",
          border: "1px solid black",
          padding: "2rem",
          borderRadius: "0.5rem",
          maxWidth: "600px",
        }}
      >
        <form>
          <div style={{ position: "absolute", top: "0.5rem", right: "0.5rem" }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div
            style={{
              marginTop: "1rem",
              display: "flex",
              gap: "0.5rem",
              justifyContent: "flex-end",
            }}
          >
            {!isFirstStep && (
              <button type="button" onClick={back}>
                Back
              </button>
            )}
            <button type="button" onClick={next}>
              {isLastStep ? "Finish" : "Next"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
