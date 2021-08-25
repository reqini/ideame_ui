import React from "react";
import './typography.css';

const Typography = ({
  children,
  className,
  variant = "h1",
  fontSize = 18,
  fontWeight = 300,
  lineHeight = null,
  textDecoration = "none",
  color,
  fontStyle = "normal",
  margin = 0,
  textAlign,
}) => {
  return React.createElement(
    variant,
    {
      className: `typography ${className}`,
      style: {
        textDecoration: textDecoration,
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: color || "#2F3143",
        margin: margin,
        textAlign: textAlign || "left",
        fontStyle: fontStyle,
        lineHeight: lineHeight,
      },
    },
    children
  );
};

export default React.memo(Typography);
