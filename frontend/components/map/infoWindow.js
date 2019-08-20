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
    // height: 0,
    paddingTop: '56.25%',
  },
};

class InfoWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      harvest: this.props.harvest,
    };

    this.updateRipe = this.updateRipe.bind(this);
  }


  updateRipe(status) {
    // console.log("Old ripe status: " + this.state.ripe)
    this.state.harvest.ripe = status;
    this.props.updateHarvest(this.state.harvest);
    // console.log(this.state.harvest)
    // console.log("New ripe status: " + this.state.ripe)
  }
  

  render() {

    const { classes, harvest } = this.props;
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const now = new Date();
    const nowMonth = String(now).slice(4, 7);
    const fruitSeasons = harvest.harvest_type.seasonal_status.split(',');
    const inSeason = fruitSeasons[monthNames.indexOf(nowMonth)] === "available";
    const src = harvest.harvest_type.image_url;
    let harvestName = harvest.harvest_name[0].toUpperCase() + harvest.harvest_name.slice(1);
    
    return (
      <div>
        {/* {img} */}
        <Card className={classes.card}>
          <CardContent>
            <img src={src} title={harvest.harvest_type.description} max-height="10%"></img>
            <Typography gutterBottom variant="h6" component="h2">
              {harvestName}
            </Typography>
            <Typography component="p">

              {/* 
                TODO:
                Add a "REMOVE" field accessible only by admin accounts of by the
                user that posted a harvest / barter
              */}

              {/* 
                TODO:
                "Navigate to" button
              */}

              <br></br>
              In season? {String(inSeason)}

              <br></br>
              Ripe fruit available? {String(harvest.ripe)}

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


// export default InfoWindow;
export default withStyles(styles)(InfoWindow);