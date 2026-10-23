"use client";

import { CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FormData } from "./types";

export default function WelcomeStep({ form }: { form: FormData }) {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center text-center gap-5">
      <CheckCircle2 className="text-green-500" size={50} />

      <h1 className="text-2xl font-bold">Welcome to ASVA!</h1>

      <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
        Hi {form.username}, welcome to ASVA! Your account has been successfully created. 
        You can now log in and start exploring our platform.
      </p>

      <span className="text-xs bg-green-100 text-green-700 px-4 py-2 rounded-full">
        Account created
      </span>

      <Button
        onClick={() => router.push("/booking")}
        className="h-11 w-full bg-green-500 hover:bg-green-600 rounded-xl mt-2"
      >
        Book your slot
      </Button>
    </div>
  );
}