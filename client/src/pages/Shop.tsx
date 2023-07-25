import React from "react";
import NavBar from "../components/header/Navbar";
import ShopMap from "../components/product/ShopMap";

function Shop() {
  const publicUrl = process.env.PUBLIC_URL;
  console.log(publicUrl);

  const cities = [
    "Lund",
    "Malmö",
    "Helsingborg",
    "Stockholm",
    "Uppsala",
    "Borås",
    "Luleå",
    "Hall",
  ];
  const names = [
    "Leklust",
    "Playfulness",
    "Playfulness",
    "City Play",
    "Playfulness City",
    "Beginners",
    "City Play",
    "Leklust",
  ];
  const addresses = [
    ["Lund Center, 22100"],
    ["Entrance Shopping Center, 21212 ,Malmö"],
    ["Garnisonsgatan ,1025466 ,Helsingborg"],
    ["Stockholm Center 10064 Stockholm"],
    ["S:t Persgatan, 1675320, Uppsala"],
    ["Storklanlen Knalleland 50630Borås"],
    ["Banvägen 2597346 Luleå"],
    ["Rådhusgatan 873330 Hall"],
  ];
  const phoneNumbers = [
    "023333333",
    "023333333",
    "024533333",
    "024444444",
    "024444444",
    "034444444",
    "03564563",
    "04367773",
  ];
  const openingHours = [
    ["Mon – Fri: 09.30-18.00"],
    ["Sat: 09.30-16.00"],
    ["Sun: 12.00-16.00"],
  ];

  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <div>
          <img
            src={`${publicUrl}/images/webb_butiker.png`}
            alt="Catalog"
            width="900"
            height="400"
            style={{
              position: "relative",
              top: "-55px",
              zIndex: 1,
              marginRight: "10px",
            }}
          />
        </div>
        <div
          style={{
            backgroundColor: "#8ed1fc",
            width: "715px",
            height: "400px",
            position: "relative",
            top: "-55px",
            zIndex: 1,
            marginRight: "10px",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            paddingTop: "130px",
            paddingLeft: "30px",
            paddingRight: "30px"
          }}
        >
          <h1 style={{ fontSize: "35px" }}>Find your nearest store here</h1>
          <p style={{ fontSize: "20px" }}>
            Fauget has 24 stores in 8 locations around Sweden. All with the same
            prices, products and fun atmosphere. Always full of desire for play.
          </p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "rgb(255,203,112)",
          marginTop: "-40px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {cities.map((city, index) => (
            <div
              key={index}
              style={{
                width: "24%",
                margin: index < 4 ? "90px 0.5% 0.5% 0.5%" : "0.5%",
              }}
            >
              <ShopMap
                city={city}
                name={names[index]}
                addressLines={addresses[index]}
                phoneNumber={phoneNumbers[index]}
                openingHours={openingHours}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
