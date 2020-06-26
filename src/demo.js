import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import useWidth from "./useWidth";
import { Button } from "@material-ui/core";
import FormCssGrid from "./formCssGrid";
import FormEqGrid from "./formEqGrid";

export const Widget = ({ children, title, variant, ...rest }) => (
  <Box {...rest} height="100%">
    <Box p={2}>
      <Typography variant={variant} noWrap>
        {title}
      </Typography>
      {children}
    </Box>
  </Box>
);

export const MyButton = ({ children }) => (
  <Button fullWidth variant="contained" color="primary">
    {children}
  </Button>
);

export const Buttons = props => (
  <Grid
    container
    spacing={2}
    //  justify="space-around"
  >
    <Grid item>
      <MyButton>Document</MyButton>
    </Grid>
    <Grid item>
      <MyButton>Audit</MyButton>
    </Grid>
    <Grid item>
      <MyButton>Évènement</MyButton>
    </Grid>
    <Grid item>
      <MyButton>action</MyButton>
    </Grid>
    <Grid item>
      <MyButton>Risque</MyButton>
    </Grid>
    <Grid item>
      <MyButton>Ticket Hotline</MyButton>
    </Grid>
  </Grid>
);

export default () => {
  const [width] = useWidth();
  return (
    <Box
      bgcolor={width >= 320 ? "background.default" : "error.main"}
      height="calc(100vh - 8px)"
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Widget variant="h2" bgcolor={blue[300]} title="Comp 1">
            {/* {[...Array(10)].map(() => (
              <p>coucou</p>
            ))} */}
            <FormCssGrid />
          </Widget>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Widget variant="h2" bgcolor={blue[500]} title="Comp 2">
            <Buttons />
          </Widget>
        </Grid>
        <Grid item xs={12} md={4}>
          <Widget variant="h2" bgcolor={blue[700]} title="Comp 3">
            <FormEqGrid />
          </Widget>
        </Grid>
      </Grid>
      <Box position="absolute" top={0} right={0}>
        <Typography variant="subtitle2">Width: {width}px</Typography>
      </Box>
    </Box>
  );
};
