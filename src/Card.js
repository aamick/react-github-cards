import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  border: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 340,
  },
});
const defaultProps = {
  m: 25,
  border: 50,
  padding: 5,
};

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Box
      className={classes.border}
      display="flex"
      justifyContent="center"
      {...defaultProps}
    >
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.avatar_url}
            title="Info on Anna Amick"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <br />
              {props.bio}
              <br />
              <p>Located in: {props.location}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Box>
  );
}
