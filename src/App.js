import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);

  function updateStep(value) {
    const nextStep = step + value;
    if (nextStep < 1 || nextStep > 3) {
      return null;
    }

    setStep((step) => step + value);
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step === 1 ? "active" : ""}>1</div>
        <div className={step === 2 ? "active" : ""}>2</div>
        <div className={step === 3 ? "active" : ""}>3</div>
      </div>

      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>

      <div className="buttons">
        <Button
          textColor="#fff"
          bgColor="#7950f2"
          onClick={() => updateStep(-1)}
        >
          Previous
        </Button>
        <Button
          textColor="#fff"
          bgColor="#7950f2"
          onClick={() => updateStep(1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
