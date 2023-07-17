
import React from "react";
import { Card, Image } from "semantic-ui-react";

const GridExampleVerticalAlignment = () => (
  <div
    style={{
      backgroundColor: "#8dc8f2",
      paddingTop: "1rem",
      marginTop: "10px",
    }}
  >
    <h1
      style={{
        textAlign: "center",
        paddingTop: "2rem",
        fontSize: "2.3rem",
        fontWeight: "bold",
        fontFamily: "Comic Sans MS, cursive, sans-serif",
      }}
    >
      Fun With Kulius
    </h1>

    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        gap: "1rem",
        paddingTop: "3rem",
        paddingLeft: "2rem",
        paddingRight: "2rem",
      }}
    >
      <div>
        <Card
          style={{
            borderRadius: "25px",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Image src="/images/Kulius.jpeg" />
        </Card>
        <Card
          style={{
            borderRadius: "25px",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Image src="/images/Kulius-polis.jpeg" />
        </Card>
      </div>

      <Card
        fluid
        style={{
          width: "50%",
          borderRadius: "25px",
          boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Image src="/images/Gor-eget-slime.jpeg" />
      </Card>

      <div>
        <Card
          style={{
            borderRadius: "25px",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Image src="/images/Frostkalas.jpeg" />
        </Card>
        <Card
          style={{
            borderRadius: "25px",
            boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.15)",
          }}
        >
          <Image src="/images/Biokalas.jpeg" />
        </Card>
      </div>
    </div>
  </div>
);

export default GridExampleVerticalAlignment;
