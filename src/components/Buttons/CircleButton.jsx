import React from "react";

function CircleButton({ children, backgroundColor, borderColor }) {
  const styles = {
    buttonStyle: {
      width: 40,
      height: 40,
      borderRadius: 20,
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
