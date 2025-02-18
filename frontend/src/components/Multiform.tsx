import { useState } from "react";
import Step1 from "./AddEmployeeForm/step1";
import Step2 from "./AddEmployeeForm/step2";
import Step3 from "./AddEmployeeForm/step3";

const Multiform = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  switch (step) {
    case 1:
      return <Step1 nextStep={nextStep} handleChange={handleChange} values={formData} />;
    case 2:
      return <Step2 nextStep={nextStep} prevStep={prevStep} handleChange={handleChange} values={formData} />;
    case 3:
      return <Step3 prevStep={prevStep} values={formData} />;
    default:
      return <h2>Something went wrong!</h2>;
  }
};

export default Multiform;
