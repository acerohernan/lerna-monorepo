import React from "react";

interface Props {
  label: string;
}

const Button: React.FC<Props> = ({ label }) => {
  return (
    <button
      style={{
        padding: "4px 10px",
        color: "blue",
      }}
    >
      {label}
    </button>
  );
};

export default Button;
