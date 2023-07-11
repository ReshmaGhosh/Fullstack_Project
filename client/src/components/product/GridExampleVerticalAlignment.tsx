import React from "react";
import { Grid, Image, Card } from "semantic-ui-react";

// const GridExampleVerticalAlignment = () => (
//   <Grid verticalAlign="middle" columns={4} centered>
//     <Grid.Row>
//       <Grid.Column>
//         <Image src="/images/Kulius.jpeg" />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src="/images/Kulius-polis.jpeg" />
//         <br />
//         <Image src="/images/Gor-eget-slime.jpeg" />
//       </Grid.Column>
//       <Grid.Column>
//         <Image src="/images/Frostkalas.jpeg" />
//       </Grid.Column>
//     </Grid.Row>
//   </Grid>
// );

// // export GridExampleVerticalAlignment
// export default GridExampleVerticalAlignment;

const GridExampleVerticalAlignment = () => (
  <Grid centered>
    <Grid.Row>
      <Grid.Column width={3}>
        <Card>
          <Image src="/images/Kulius.jpeg" />
        </Card>
        <Card>
          <Image src="/images/Kulius-polis.jpeg" />
        </Card>
      </Grid.Column>

      <Grid.Column width={10}>
        <Card>
          <Image src="/images/Gor-eget-slime.jpeg" />
        </Card>
      </Grid.Column>

      <Grid.Column width={3}>
        <Card>
          <Image src="/images/Frostkalas.jpeg" />
        </Card>
        <Card>
          <Image src="/images/Biokalas.jpeg" />
        </Card>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);
export default GridExampleVerticalAlignment;

