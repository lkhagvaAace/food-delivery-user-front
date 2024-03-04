import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RepasswordStepOne } from "@/components/RepasswordStepOne";
import { RepasswordStepThree } from "@/components/RepasswordStepThree";
import { RepasswordStepTwo } from "@/components/RepasswordStepTwo";
import React, { useState } from "react";

const Repassword = () => {
  const [step, setStep] = useState(1);
  console.log(step);
  return (
    <div className="bg-white flex flex-col items-center justify-between gap-8 min-h-screen">
      <Header />
      {step == 1 ? <RepasswordStepOne setStep={setStep} /> : null}
      {step == 2 ? <RepasswordStepTwo /> : null}
      {step == 3 ? <RepasswordStepThree /> : null}
      <Footer />
    </div>
  );
};
export default Repassword;
