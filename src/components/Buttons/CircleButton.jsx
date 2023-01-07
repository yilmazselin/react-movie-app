import React from "react";

function CircleButton({ children, backgroundColor, borderColor }) {
  const styles = {
    buttonStyle: {
      width: 25,
      height: 25,
      borderRadius: 12.5,
      border: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 1,
      borderStyle: "solid",
      backgroundColor,
      borderColor,
    },
  };

  return <button style={styles.buttonStyle}>{children}</button>;
}

export default CircleButton;
