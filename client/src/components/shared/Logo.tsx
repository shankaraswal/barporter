import React from "react";
import LogoImg from "../../assets/images/logo.png";
function Logo({ baseWidth = "100px" }: { baseWidth?: string }) {
  return (
    <div className="text-[25px] flex flex-row rounded-2xl  bg-red-800 items-center font-semibold text-white">
      <img
        src={LogoImg}
        className="rounded-s-xl"
        alt="Barter and Porter"
        width={baseWidth}
      />
      <span
        style={{ "--base-width": `${baseWidth}` } as React.CSSProperties}
        className="flex border-l-[10px] px-[calc(var(--base-width)*0.33)] border-l-black pl-5 h-full items-center"
      >
        Barter & Porter
      </span>
    </div>
  );
}

export default Logo;
