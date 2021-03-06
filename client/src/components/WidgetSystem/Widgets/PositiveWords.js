import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    paddingTop: "5%",
    flexDirection: "column"
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const TopBottomWords = props => {

  const classes = useStyles();
  // return (
  //     <React.Fragment>
  //      <Grid item xs={4} style={{ display: "flex", flexDirection: "column" }}>
  //        <Paper className={classes.paper}>item</Paper>
  //      </Grid>
  //      <Grid item xs={4} style={{ display: "flex", flexDirection: "column" }}>
  //        <Paper className={classes.paper}>item</Paper>
  //      </Grid>
  //    </React.Fragment>
  // );
  console.log("props.words in dashboard: ", props.words);

  if(props.error){
    console.log("Error with props:", props);
    return <p>Error!</p>
  }
  if (props.isFetching || !props.words) {
    return <h3><CircularProgress>Loading analytics...</CircularProgress></h3>;
  } else {
    return (
      <div>
        <h3 className="widgetTitle">Your customers are loving...</h3>
        <p className="widgetSubtitle">These are the words associated with the reviews with high ratings</p>
        <div style={{ margin: "5%", textAlign:"start" }} className={classes.root}>
          <Grid container spacing={1}>
            {props.words.positive.map(word => {
              return (
                <Grid
                  item
                  xs={6}
                  style={{ display: "flex", flexDirection: "column", fontSize:"20px", border:"none" }}
                >
                  <Paper style={{ color: "black" }} className={classes.paper}>
                    {word.term}
                  </Paper>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  words: state.widgetData.keyWords.data,
  isFetching: state.widgetData.keyWords.isFetching,
  error: state.widgetData.keyWords.error
});

export default connect(mapStateToProps)(TopBottomWords);
