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

const useStyles = makeStyles(theme => ({
  form: {
    display: "grid",
    gridGap: theme.spacing(3),

    gridTemplateColumns: "repeat(1, 1fr)",
    gridTemplateAreas: '"radio" "text" "date" "number"',

    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateAreas: '"text radio" "number date"'
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "repeat(4, 1fr)",
      gridTemplateAreas: '"text date number radio"'
    },

    "& > *:first-child": {
      gridArea: "text"
    },
    "& > *:nth-child(2)": {
      gridArea: "date"
    },
    "& > *:nth-child(3)": {
      gridArea: "number"
    },
    "& > *:last-child": {
      gridArea: "radio"
    }
  },
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
    <Box className={classes.form}>
      <Paper className={classes.paper}>
        <TextField type="text" label="Un texte" variant="outlined" fullWidth />
      </Paper>
      <Paper className={classes.paper}>
        <TextField type="date" label="Une date" variant="outlined" fullWidth />
      </Paper>
      <Paper className={classes.paper}>
        <TextField
          type="number"
          label="Un nombre"
          variant="outlined"
          fullWidth
        />
      </Paper>
      <Paper className={classes.paper}>
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
