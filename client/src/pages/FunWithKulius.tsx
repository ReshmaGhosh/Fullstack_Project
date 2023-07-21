import React from "react";
import NavBar from "../components/header/Navbar";
import { Link } from "react-router-dom";
import ColorIt from "./ColorIt";
import PartyTips from "./PartyTips";
import Playing from "./Playing";

function FunWithKulius() {
  return (
    <div>
      <NavBar />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img
          src="/images/webb_kul.png"
          alt="Webb Kulius"
          width="900"
          height="400"
          style={{
            position: "relative",
            top: "-55px",
            zIndex: 1,
            marginRight: "10px",
          }}
        />

        <div
          style={{
            backgroundColor: "#8ed1fc",
            width: "715px",
            height: "400px",
            position: "relative",
            top: "-55px",
            zIndex: 1,
          }}
        ></div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto", // This allows the items to fit their content
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#8ed1fc",
            borderRadius: "40px",
            padding: "10px",
            textAlign: "center",
            fontSize: "20px",
            width: "120px",
          }}
        >
          <Link to="/colorit">Color It</Link>
        </div>
        <div
          style={{
            backgroundColor: "#8ed1fc",
            borderRadius: "40px",
            padding: "10px",
            textAlign: "center",
            fontSize: "20px",
            width: "120px",
          }}
        >
          <Link to="/partytips">Party Tips</Link>
        </div>
        <div
          style={{
            backgroundColor: "#8ed1fc",
            borderRadius: "40px",
            padding: "10px",
            textAlign: "center",
            fontSize: "20px",
            width: "120px",
          }}
        >
          <Link to="/playing">Playing</Link>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#8ed1fc",
          height: "100%",
          marginTop: "40px",
        }}
      >
        <ColorIt />
        <PartyTips />
        <Playing />
      </div>
    </div>
  );
}

export default FunWithKulius;
