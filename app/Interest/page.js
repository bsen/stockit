"use client";
import React, { useEffect } from "react";
import InterestCalculator from "@/Components/InterestCalculator";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

const page = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const userSession = sessionStorage.getItem("user");
    if (!user && !userSession) {
      router.push("/");
    }
  }, [user, router]);
  return (
    <div>
      <InterestCalculator />
    </div>
  );
};

export default page;
