"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import StepIndicator from "./components/stepIndicator";
import SignInStep from "./components/signInStep";
import * as reactDynamic from "next/dynamic";
import WelcomeStep from "./components/welcomeStep";
import { Step, FormData } from "./components/types";


export const dynamic = "force-dynamic";

export default function JoinPage() {
  const router = useRouter();

  const [step, setStep] = useState<Step>(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    username: "",
  });

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center relative">

      {/* 🔙 Back Button */}
      <button
        onClick={() => {
         if (step === 3) setStep(2);
        else if (step === 2) setStep(1);
        else router.back();
        }}
        className="absolute top-6 left-6 text-sm text-gray-400 hover:text-white transition"
      >
        ← Back
      </button>

      <div className="w-full max-w-md">
        <StepIndicator current={step} />

        {step === 1 && (
          <SignInStep
            onNext={(data) => {
              setFormData(data);
              setStep(2);
            }}
          />
        )}

        {step === 2 && (
          <WelcomeStep
            form={formData}
          />
        )}

      </div>
      
    </div>
  );
}