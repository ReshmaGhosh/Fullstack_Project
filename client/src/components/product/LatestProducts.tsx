import React from 'react'
import { Card, Image, Grid, Icon } from "semantic-ui-react";

const images = [
  "/images/alrico.png",
  "/images/amotoys.png",
  "/images/amotoys1.png",
  "/images/lego.png",
  "/images/micki.png",
  "/images/sportme.png",
];
function getRandomLightColor() {
  const red = Math.floor(Math.random() * 85) + 400;
  const green = Math.floor(Math.random() * 65) + 200;
  const blue = Math.floor(Math.random() * 95) + 200;
  return `rgba(${red}, ${green}, ${blue}, 0.7)`;
}

function LatestProducts() {
   return (
     <div
       style={{
         backgroundColor: "rgba(141,200,242,1)",
         paddingTop: "70px",
         marginTop: "-40px",
       }}
     >
       <h1
         style={{
           textAlign: "center",
           fontSize: "2.5em",
           fontWeight: "bold",
         }}
       >
         Latest Product
       </h1>

       <Grid style={{ margin: 0, padding: 0 }}>
         <Grid.Row columns={3}>
           {images.map((image, index) => (
             <Grid.Column style={{ padding: "1em" }} key={index}>
               <Card
                 centered
                 style={{
                   width: "100%",
                   borderRadius: "20px",
                   minHeight: "400px",
                   overflow: "hidden",
                   background: `linear-gradient(${getRandomLightColor()}, transparent 70%)`,
                 }}
               >
                 <Image
                   src={image}
                   wrapped
                   ui={false}
                   style={{ borderRadius: "20px 20px 0 0" }}
                 />
                 <Card.Content
                   style={{
                     backgroundColor: "white",
                     padding: "2em",
                     borderRadius: "0 0 20px 20px",
                     display: "flex",
                     justifyContent: "space-between",
                     alignItems: "center",
                   }}
                 >
                   <div
                     style={{
                       display: "flex",
                       flexDirection: "column",
                       justifyContent: "center",
                     }}
                   >
                     <Card.Header style={{ textAlign: "left" }}>
                       Card Title
                     </Card.Header>
                     <Card.Description style={{ textAlign: "left" }}>
                       Card description
                     </Card.Description>
                   </div>
                   <div
                     style={{
                       width: "40px",
                       height: "40px",
                       borderRadius: "50%",
                       display: "flex",
                       justifyContent: "center",
                       alignItems: "center",
                       backgroundColor: "#547df0",
                       marginLeft: "auto",
                       padding: "6px",
                     }}
                   >
                     <Icon
                       name="heart"
                       size="large"
                       style={{ color: "white", margin: "0" }}
                     />
                   </div>
                 </Card.Content>
               </Card>
             </Grid.Column>
           ))}
         </Grid.Row>
       </Grid>
     </div>
   );
}

export default LatestProducts