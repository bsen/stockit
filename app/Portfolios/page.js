"use client";
import React, { useEffect, useState } from "react";
import PortfoliosBanner from "@/Components/PortfoliosBanner";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Portfolios = () => {
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
      <PortfoliosBanner />
    </div>
  );
};

export default Portfolios;
