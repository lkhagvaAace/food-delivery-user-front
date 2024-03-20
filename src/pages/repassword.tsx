import { Alert } from "@/components/Alert";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { RepasswordStepOne } from "@/components/RepasswordStepOne";
import { RepasswordStepThree } from "@/components/RepasswordStepThree";
import { RepasswordStepTwo } from "@/components/RepasswordStepTwo";
import { AlertVisibleContext } from "@/context/AlertVisiblity";
import { AlertWordContext } from "@/context/AlertWord";
import React, { useContext, useState } from "react";

const Repassword = () => {
  const [step, setStep] = useState(1);
  const [code, setCode] = useState(0);
  const [userId, setUserId] = useState("");
  const { alertVisible, setAlertVisible } = useContext(AlertVisibleContext);
  const { alertWord, setAlertWord } = useContext(AlertWordContext);
  return (
    <div className="bg-white flex flex-col items-center justify-between gap-8 min-h-screen">
      <Header selectedFoodsLength={0} />
      {alertVisible && <Alert />}
      {step == 1 ? (
        <RepasswordStepOne
          setStep={setStep}
          setCode={setCode}
          setUserId={setUserId}
          setAlertVisible={setAlertVisible}
          setAlertWord={setAlertWord}
        />
      ) : null}
      {step == 2 ? (
        <RepasswordStepTwo
          setStep={setStep}
          code={code}
          setAlertVisible={setAlertVisible}
          setAlertWord={setAlertWord}
        />
      ) : null}
      {step == 3 ? <RepasswordStepThree userId={userId} /> : null}
      <Footer />
    </div>
  );
};
export default Repassword;
