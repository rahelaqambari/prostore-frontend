
import React from "react";
import { APP_NAME } from "../../constants";

function Footer() {
  return (
    <div className="w-full border-t ">
      <div className="wrapper flex-center">
        <p>
          {new Date().getFullYear()} &copy; {APP_NAME} All right reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
