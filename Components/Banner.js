"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      router.push("/Home");
    }
  }, [user, router]);

  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/Home");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  return (
    <>
      <div className="flex bg-white flex-col md:flex-row h-[80vh] w-full justify-evenly items-center">
        {" "}
        <div className="md:w-auto w-full max-sm:-mt-40 max-sm:px-4">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <h4 className="font max-md:text-[2.2rem] md:text-[5.5rem] text-center  font-semibold text-black max-sm:text-[28px]">
              Simplify&nbsp;Investments
              <br />
              <span className="font max-md:text-[2.2rem] md:text-[5rem] text-left max-md:text-center font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 max-sm:text-2xl">
                {" "}
                with AI
              </span>
            </h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
          >
            <h4 className="font text-neutral-600 font-light text-lg md:text-2xl mb-8 text-center max-sm:text-sm  ">
              AI tools for instant market insights, FinGPT, and portfolio
              optimization.
            </h4>
          </motion.div>

          {user ? null : (
            <div className="flex justify-center">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 1 }}
                className="px-8 max-sm:px-3 max-sm:py-2 max-sm:text-sm md:px-16 py-3 bg-blue-600 font-mono text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 text-lg"
                onClick={handleGoogle}
              >
                GET STARTED
              </motion.button>
            </div>
          )}
        </div>
      </div>
      <div className="max-sm:p-2">
        <div className="h-[80vh] text-black w-full bg-white flex flex-col md:flex-row items-center px-4 md:px-20 gap-6 md:gap-10 max-sm:-mt-40 max-sm:my-5 max-sm:border max-sm:border-gray-200  max-sm:p-4">
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h4 className="text-2xl md:text-3xl font-serif">
              Introducing our Finance GPT
            </h4>
            <br />
            <h4 className="text-sm md:text-xl font-thin">
              “A powerhouse for financial insights. Precision analysis,
              strategic forecasting, and efficient automation redefine your
              financial operations. Elevate decision making with new AI
              technology.”
            </h4>
          </motion.div>
          <img
            src="/chatimg.png"
            className="h-[50vh] w-[50vw] max-sm:w-full rounded-xl  shadow-lg"
          />
        </div>

        {/* Section 3: Experience AI optimized Portfolios */}
        <div className="h-[80vh] text-black w-full bg-white flex flex-col md:flex-row items-center px-4 md:px-14 gap-6 md:gap-10 max-sm:my-5 max-sm:border max-sm:border-gray-200  max-sm:p-4">
          <img
            src="/portfolio.png"
            className="h-[50vh] w-[50vw] max-sm:w-full  rounded-xl shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h4 className="text-2xl md:text-3xl font-serif">
              Experience AI optimized Portfolios
            </h4>{" "}
            <br />
            <h4 className="text-sm md:text-xl font-thin">
              “Benefit from tailored, dynamic strategies for diverse financial
              goals. Navigate risks with continuous AI adjustments, seizing
              opportunities. Effortlessly manage your portfolio through our
              user-friendly, intuitive interface.”
            </h4>
          </motion.div>
        </div>

        {/* Section 4: Empower your finance with AI tools */}
        <div className="h-[80vh] text-black w-full bg-white flex flex-col md:flex-row items-center px-4 md:px-20 gap-6 md:gap-10 max-sm:my-5 max-sm:border max-sm:border-gray-200 max-sm:p-4">
          <motion.div
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1 }}
            className="text-center md:text-left md:w-1/2"
          >
            <h4 className="text-2xl md:text-3xl font-serif">
              Empower your finance with AI tools
            </h4>{" "}
            <br />
            <h4 className="text-sm md:text-xl font-thin">
              “From Interest calculations to SIP planning, mutual fund analysis
              and EMI computations, our tools bring precision and efficiency to
              your fingertips. Navigate the financial landscape with confidence
              using intelligent automation.”
            </h4>
          </motion.div>
          <img
            src="/sipimg.png"
            className="h-[50vh] w-[50vw] max-sm:w-[90vw] rounded-xl shadow-md"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
