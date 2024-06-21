"use client";

import React, { useEffect } from "react";
import Footer from "@/Components/Footer";
import News from "@/Components/News";
import Portfolios from "../Portfolios/page";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Home = () => {
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
      <Portfolios />
      <News />
      <Footer />
    </div>
  );
};

export default Home;
