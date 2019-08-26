import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: "100%",
    minWidth: 350,
    maxWidth: 380,
  },
  media: {
    width: "100%",
  },
  typography: {
    fontSize: ".9em"
  }
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
    this.state.harvest.ripe = status;
    this.props.updateHarvest(this.state.harvest);
    this.props.infoWindow.close(this.props.map);
  }


  render() {

    const { classes, harvest } = this.props;
    const monthNames = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov"];

    const now = new Date();
    const nowMonth = String(now).slice(4, 7);
    const fruitSeasons = harvest.harvest_type.seasonal_status.split(',');
    const inSeason = fruitSeasons[monthNames.indexOf(nowMonth)] === "available";
    const src = harvest.harvest_type.image_url;
    let harvestName;
    if (harvest.harvest_type.harvest_name = "others") {
      harvestName = harvest.harvest_name[0].toUpperCase() + harvest.harvest_name.slice(1);
    } else {
      harvestName = harvest.harvest_type.harvest_name[0].toUpperCase() + harvest.harvest_type.harvest_name.slice(1);
    }

    return (
      <div>
        <Card className={classes.card} elevation={5}>
          <CardMedia className={classes.media}
            component="img"
            alt={harvest.harvest_type.description}
            image={src}
            className="infoWindow--image"
          />
          <CardContent>
            {/* 
                TODO:
                "Navigate to" button
              */}
            <Typography gutterBottom variant="h6" component="h2">
              {harvestName}
            </Typography>
            <Typography component="p">
              <strong>Seasonality: </strong>
              {inSeason === true ? "In season" : "Out of season"}
              {/* In season? {String(inSeason)} */}
            </Typography>

            <Typography component="p">
              <strong>Ripe Fruit: </strong> 
              {harvest.ripe === true ? "Available" : "Unavailable"}
              {harvest.ripe === true ? 
                <Button size="small" color="primary" onClick={() => this.updateRipe(false)}>Mark Unavailable</Button>
              :
                <Button size="small" color="primary" onClick={() => this.updateRipe(true)}>Mark Available</Button>
              }
              {/* Ripe fruit available? {String(harvest.ripe)} */}
            </Typography>

            <Typography component="p">
              <strong>Last updated: </strong>{
                monthNames[(harvest.updated_at.slice(5, 7) % 12)].slice(0, 3) + ' '
                + harvest.updated_at.slice(8, 10) + ' '
                + harvest.updated_at.slice(0, 4)
              }
            </Typography>
          </CardContent>
        </Card>
      </div >
    );
  }
}


export default withStyles(styles)(InfoWindow);