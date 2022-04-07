import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;

  const contentStyle = {
    color, // 名前が同じ場合省略可能
    fontSize: "18px"
  };

  return (
    <>
      <p style={contentStyle}>{children}</p>
    </>
  );
};

// export default ColorfulMessage;
