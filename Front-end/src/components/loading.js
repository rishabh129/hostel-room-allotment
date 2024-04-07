import React from "react";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/react";

const Loader = ({loading}) => {

    const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
    z-index: 1200;
    `;

  const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity here
    zIndex: 9999, // Make sure the z-index is higher than other content
    display: loading ? "flex" : "none",
    justifyContent: "center",
    alignItems: "center",
  };

  return(
    <div style={overlayStyle}>
        <FadeLoader
          color={"#000000"}
          loading={loading}
          css={override}
          size={150}
        />
      </div>
  )

    
}

export default Loader;