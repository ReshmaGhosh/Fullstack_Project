// import React from "react";

// function Footer() {
//   return (
//     <div>
//       <img src="/images/footer-bg-05.png" alt="description-of-the-image" />
      
//     </div>
//   );
// }

// export default Footer;
import React from "react";

function Footer() {
  return (
    <div
      style={{
        position: "relative",
        bottom: 0,
        left: 0,
        display: "flex",
        width: "100%",
        marginTop: "-5.6rem",
        height: "30rem",
        zIndex: 100,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: "4.5rem",
        background: `url("/images/footer-bg-05.png") top center / 120% no-repeat`,
      }}
    ></div>
  );
}

export default Footer;
