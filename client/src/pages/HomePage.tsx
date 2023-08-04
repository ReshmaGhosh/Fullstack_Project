import React from "react";
import LatestProducts from "../components/product/LatestProducts";
import NavBar from "../components/header/Navbar";
import FunnyKulius from "../components/product/FunnyKulius";
import Footer from "../components/footer/Footer";

function HomePage() {
  const publicUrl = process.env.PUBLIC_URL;
  console.log(publicUrl);
  return (
    <div>
      <NavBar />

      <div style={{ display: "flex", marginTop: "-60px" }}>
        <div style={{ position: "relative", width: "815px", height: "500px" }}>
          <img
            src={`${publicUrl}/images/katalog.png`}
            alt="Catalog"
            style={{
              width: "100%",
              height: "89%",
            }}
          />
          <a href="/toy" style={{ textDecoration: "none" }}>
            <h1
              style={{
                position: "absolute",
                top: "10%",
                left: "30%",
                transform: "translate(-50%, -50%)",
                color: "white",
                fontSize: "35px",
                paddingTop: "90px"
              }}
            >
              Toy
            </h1>
          </a>
          <p
            style={{
              position: "absolute",
              top: "35%",
              left: "35%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "22px",
               paddingTop: "30px"
            }}
          >
            Adventure awaits in every toy! Check out our exciting collection
            coming soon. Amazing deals and thrilling offers are waiting for you
            in our stores. Let's create unforgettable playtime memories
            together!
          </p>
        </div>
        <div>
          <img
            src={`${publicUrl}/images/butik.png`}
            alt="Shop"
            width="615"
            height="500"
            style={{
              position: "relative",
              top: "-55px",
              zIndex: 1,
              marginLeft: "10px",
            }}
          />
        </div>
      </div>
      <LatestProducts />

      <img
        src={`${publicUrl}/images/kulmedkulius.png`}
        alt="Kulmedkulius"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <FunnyKulius />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "auto",
        }}
      >
        <img
          src={`${publicUrl}/images/webb_start.png`}
          alt="Kulmedkulius"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            marginTop: "15px",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "black",
            fontSize: "1rem",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <h1 style={{ fontFamily: "Comic Sans MS, cursive, sans-serif" }}>
            Prices that make you want to play
          </h1>
          <p>
            Fauget is a chain of toys from the market's best brands, at really
            low prices.{" "}
          </p>
          <p>
            In our stores you will find everything from dolls and games to
            stuffed animals and action figures.{" "}
          </p>
          <p>Welcome!</p>
        </div>
      </div>

      <div>
        <h1
          style={{
            color: "black",
            fontSize: "2.5em",
            textAlign: "center",
            paddingTop: "40px",
            fontFamily: "Comic Sans MS, cursive, sans-serif",
          }}
        >
          Some of our best friends
        </h1>

        <img
          src={`${publicUrl}/images/Leklust_logolimpa.png`}
          alt="Kulmedkulius"
          style={{
            width: "50%",
            height: "auto",
            objectFit: "contain",
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
