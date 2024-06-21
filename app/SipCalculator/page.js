import React from "react";
import SipCalculator from "@/Components/SipCalculator";
import InterestCalculator from "@/Components/InterestCalculator";
import MutualFundsCalculator from "@/Components/MutualFundsCalculator";
import EMICalculator from "@/Components/EMICalculator";
import { EmailAuthCredential } from "firebase/auth";
const page = () => {
  return (
    <div>
      <SipCalculator />
    </div>
  );
};

export default page;
