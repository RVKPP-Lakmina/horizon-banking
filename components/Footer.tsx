"use client";

import React from "react";
import Image from "next/image";
import { logoutUserSession } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";

const Footer = ({ user, type = "desktop" }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutUserSession();

    if (loggedOut) router.push("/sign-in");
  };

  return (
    <footer className="footer">
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">
          {user?.firstName[0] || "G"}
        </p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.firstName || ""}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email || ""}
        </p>
      </div>
      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="Log out" />
      </div>
    </footer>
  );
};

export default Footer;
