"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const Header = () => {
  const [user, setUser] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const router = useRouter();
  const [dropClick, setdropClick] = useState(false);
  const dropdownRef = useRef(null);

  // toggles the shadow for header on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // toggles the drop box
  const handleToggle = () => {
    setdropClick(!dropClick);
  };

  // close the dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setdropClick(false);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      unsubscribe();
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // google sign in
  const handleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(auth, provider);
      router.push("/Home");
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  const [popupVisible, setPopupVisible] = useState(false);

  const showPopup = () => {
    setPopupVisible(true);

    setTimeout(() => {
      setPopupVisible(false);
    }, 5000);
  };

  const handleAiChatClick = () => {
    if (!user) {
      showPopup();
    } else {
      router.push("/Chat");
    }
  };

  const headerClasses = `flex bg-white max-sm:h-14 h-20 px-6 max-sm:px-2 items-center justify-between fixed w-full z-10 top-0 ${
    scrolling ? "shadow-md" : ""
  }`;

  return (
    <>
      <div className={headerClasses}>
        <Link
          href="/Home"
          className="text-2xl font-mono font-semibold text-blue-600"
        >
          StockIt
        </Link>

        <div className="flex gap-8 max-sm:gap-2 items-center mx-5 max-sm:mx-0">
          {user ? (
            <>
              <button onClick={handleToggle}>
                <img
                  src={user.photoURL || "/def.png"}
                  className="rounded-full h-8 w-8 sm:h-9 sm:w-9"
                  alt="User Profile"
                />
              </button>
            </>
          ) : (
            <button
              className="py-1 px-5 mt-2 max-sm:px-2 rounded-md text-xl max-sm:text-sm text-white hover:bg-blue-800 mb-2 bg-blue-600"
              onClick={handleGoogle}
            >
              Start
            </button>
          )}
        </div>
      </div>

      {popupVisible && (
        <div className="fixed bottom-4 text-xs sm:text-base text-white right-4 bg-gradient-to-r from-blue-400 to-blue-600 p-2 sm:p-4 rounded-md shadow-md">
          Please Sign In first!
        </div>
      )}
      {dropClick && (
        <div
          ref={dropdownRef}
          className="h-auto w-auto right-0 fixed p-4 sm:p-5 z-40"
        >
          {user ? (
            <>
              <div className="h-auto w-48 bg-white  rounded-2xl shadow-xl p-4 sm:p-5">
                <div className="flex flex-col items-center my-2 sm:my-4">
                  <img
                    src={user.photoURL || "/def.png"}
                    className="rounded-full h-9 w-9 mb-2 sm:mb-2"
                  />
                  {user.displayName && user.displayName.length > 0 && (
                    <p className="text-black text-sm sm:text-md font-semibold">
                      {user.displayName}
                    </p>
                  )}
                </div>

                <div className="flex justify-center py-2 sm:py-3 my-2 sm:my-4">
                  <button
                    onClick={handleLogout}
                    className="text-xs sm:text-base text-gray-700 flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1 sm:py-2 rounded-full bg-white hover:bg-blue-200 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <img
                      src="/logout-img.png"
                      className="h-4 sm:h-6 opacity-80"
                      alt="Logout"
                    />
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default Header;
