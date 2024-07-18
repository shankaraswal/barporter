import React from "react";
import LogoImg from "../../assets/images/logo.png";
function Logo({ width = "100px" }: { width?: string }) {
  return (
    <span className="mr-5 border-r-[10px] border-black">
      <img
        src={LogoImg}
        className="rounded-s-2xl"
        alt="Barter and Porter"
        width={width}
      />
    </span>
  );
}

export default Logo;
