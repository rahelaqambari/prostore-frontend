
import React from "react";
import { APP_NAME } from "../../constants";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex-center border-t w-full">
      <div className="p-5">
        {currentYear} {APP_NAME} |  All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;
