import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/Card';
import CardContent from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
};

class InfoWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      harvest: this.props.harvest,
    }

    this.updateRipe = this.updateRipe.bind(this);
  }


  updateRipe(status) {
    console.log("Old ripe status: " + this.state.ripe)
    this.state.harvest.ripe = status;
    this.props.updateHarvest(this.state.harvest);
    console.log("New ripe status: " + this.state.ripe)
  }
  

  render() {

    const { classes, harvest } = this.props;
    const monthNames = ["December", "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November"];
    
    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <CardMedia
              className={classes.media}
              // TODO:
              // Replace with uploadable image, hosted on AWS, or replace with wikipedia image
              image="https://en.wikipedia.org/wiki/Grapefruit#/media/File:Grapefruit.ebola.jpeg"
              title={harvest.harvest_type}
            />
            <Typography gutterBottom variant="h6" component="h2">
              {harvest.harvest_type}
            </Typography>
            <Typography component="p">
              Lorem Ipsum
              {/* 
                TODO:
                Maybe pull a short description from wikipedia? 
              */}

              {/*
                TODO:
                Maybe collect fruit seasonal data to automatically update
                for when a fruit's season comes, updating marker icon
                appropriately? 
              */}

              {/* 
                TODO:
                Add a "REMOVE" field accessible only by admin accounts of by the
                user that posted a harvest / barter
               */}

              <br></br>
              In season? {harvest.season}

              <br></br>
              Ripe fruit available? {harvest.ripe}

              <br></br>
              Last updated: {
                monthNames[(harvest.updated_at.slice(5,7) % 12)].slice(0, 3) + ' '
                + harvest.updated_at.slice(8, 10) + ' '
                + harvest.updated_at.slice(0, 4)
              }


            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" onClick={() => this.updateRipe(true)}>
              Ripe fruit available
            </Button>
            <Button size="small" color="primary" onClick={() => this.updateRipe(false)}>
              Ripe fruit unavailable
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}


export default withStyles(styles)(InfoWindow);