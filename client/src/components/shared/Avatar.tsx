import React from "react";

const Avatar = ({
  name,
  className = "",
}: {
  name: string;
  size?: number;
  className?: string;
}) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return <div className={className}>{initials}</div>;
};

export default Avatar;
