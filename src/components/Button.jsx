import React from "react";

const Button = ({ svg, children, className }) => {
  const classes = `relative uppercase overflow-hidden bg-background font-mono border border-neutral-600 rounded-lg pointer-events-none inline-flex  ${
    className ? className : ""
  }`;

  const svgButton = () => (
    <div className={`flex items-center gap-3 justify-center ${classes}`}>
      {svg}
      <a>{children}</a>
    </div>
  );

  const textButton = () => (
    <div className={`flex items-center gap-2 justify-center ${classes}`}>
      <a>{children}</a>
    </div>
  );

  return svg ? svgButton() : textButton();
};

export default Button;
