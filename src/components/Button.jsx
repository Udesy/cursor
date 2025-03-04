import React from "react";

const Button = ({ svg, children, className, px }) => {
  const classes = `relative uppercase overflow-hidden font-mono border border-neutral-600 rounded-lg pointer-events-none inline-flex h-11 w-fit ${
    className ? className : ""
  }
  ${px ? `px-${px}` : "px-4"}`;

  const svgButton = () => (
    <div className={`flex items-center gap-3 justify-center ${classes}`}>
      {svg}
      <a>{children}</a>
    </div>
  );

  const textButton = () => (
    <div className={`flex items-center justify-center ${classes}`}>
      <a>{children}</a>
    </div>
  );

  return svg ? svgButton() : textButton();
};

export default Button;
