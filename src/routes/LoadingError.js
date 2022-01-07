import { Button } from "@material-ui/core";
import React from "react";
import Refresh from "@material-ui/icons/Refresh";

const LoadingError = () => {
  return (
    <div
      style={{
        fontFamily: "arial",
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Error Loading Page ,Kindly Reload </h1>
      <Button
        style={{
          backgroundColor: "#ffa500",
          fontWeight: "bold",
          padding: "0.5rem",
          display: "flex",
        }}
        onClick={() => window.location.reload()}
        endIcon={<Refresh />}
      >
        Reload
      </Button>
    </div>
  );
};

export default LoadingError;
