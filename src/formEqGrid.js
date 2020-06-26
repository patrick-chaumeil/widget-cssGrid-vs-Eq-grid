import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Paper,
  TextField,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormControl,
  FormLabel
} from "@material-ui/core";
import { initEqGrid } from "eq-grid";
import cx from "classnames";

initEqGrid(16, 1, "rem");

const useStyles = makeStyles(theme => ({
  form: {},
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(1)
  }
}));
export default function App() {
  const classes = useStyles();

  return (
    <Box
      component="eq-grid"
      className={cx(classes.form, {
        "eq-grid-dense": false,
        "eq-grid-2-collapse": false,
        "eq-grid-gap-2": false
      })}
    >
      <Paper
        className={cx(classes.paper, { "eq-col": true, "eq-col-max": true })}
      >
        <TextField type="text" label="Un texte" variant="outlined" fullWidth />
      </Paper>
      <Paper className={cx(classes.paper, { "eq-col": true })}>
        <TextField type="date" label="Une date" variant="outlined" fullWidth />
      </Paper>
      <Paper className={cx(classes.paper, { "eq-col": true })}>
        <TextField
          type="number"
          label="Un nombre"
          variant="outlined"
          fullWidth
        />
      </Paper>
      <Paper
        className={cx(classes.paper, { "eq-col-2": true, "eq-row-2": false })}
      >
        <FormControl
          fullWidth
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <FormLabel style={{ paddingRight: "20px" }}>Des radios</FormLabel>
          <RadioGroup defaultValue="Oui" row name="radio1">
            <FormControlLabel
              value="Oui"
              control={<Radio />}
              label="Oui"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Non"
              control={<Radio />}
              label="Non"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
      </Paper>
    </Box>
  );
}
