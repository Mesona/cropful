import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: "100%",
    maxWidth: 400,
    minWidth: 275,
  }
};

class InfoWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      harvest: this.props.harvest,
      inSeason: this.props.inSeason,
      isIntro: this.props.isIntro,
    };

    this.updateRipe = this.updateRipe.bind(this);
    this.updateSeason = this.updateSeason.bind(this);
  }


  updateRipe(status) {
    this.state.harvest.ripe = status;
    this.props.updateHarvest(this.state.harvest);
    this.props.infoWindow.close(this.props.map);
  }

  updateSeason(status) {
    this.state.harvest.inSeason = status;
    this.props.updateSeason(this.state.inSeason);
    this.props.infoWindow.close(this.props.map);
  }


  render() {

    const { classes, harvest } = this.props;
    const monthNames = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov"];

    const now = new Date();
    const nowMonth = String(now).slice(4, 7);
    const fruitSeasons = harvest.seasonal_overwrite.split(',');
    const inSeason = fruitSeasons[monthNames.indexOf(nowMonth)] === "available";
    const src = harvest.harvest_type.image_url;
    const isIntro = this.state.isIntro;
    let harvestName;

    if (harvest.harvest_type.harvest_name = "others") {
      harvestName = harvest.harvest_name[0].toUpperCase() + harvest.harvest_name.slice(1);
    } else {
      harvestName = harvest.harvest_type.harvest_name[0].toUpperCase() + harvest.harvest_type.harvest_name.slice(1);
    }

    return (
      <div>
        <Card className={classes.card} elevation={5}>
          <CardHeader title={harvestName} />
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
            <Typography component="div" className="action--field-wrapper">
              <strong>Seasonality: </strong>
              {inSeason === true ?
                <React.Fragment>
                  <span>Growing</span>
                  {!isIntro &&
                    <Button className="action--button__right" size="small" color="primary" onClick={() => this.updateSeason(false)}>Set as Doormant</Button>
                  }
                </React.Fragment>
                :
                <React.Fragment>
                  <span>Doormant</span>
                  {!isIntro &&
                    <Button className="action--button__right" size="small" color="primary" onClick={() => this.updateSeason(true)}>Set as Growing</Button>
                  }
                </React.Fragment>
              }
            </Typography>

            <Typography component="div" className="action--field-wrapper">
              <strong>Availability: </strong>
              {harvest.ripe === true ?
                <React.Fragment>
                  <span>Available</span>
                  {!isIntro &&
                    <Button className="action--button__right" size="small" color="primary" onClick={() => this.updateRipe(false)}>Set as Unavailable</Button>
                  }
                </React.Fragment>
                :
                <React.Fragment>
                  <span>Unavailable</span>
                  {!isIntro &&
                    <Button className="action--button__right" size="small" color="primary" onClick={() => this.updateRipe(true)}>Set as Available</Button>
                  }
                </React.Fragment>
              }
              {/* Ripe fruit available? {String(harvest.ripe)} */}
            </Typography>

            <Typography component="p" className="action--field-wrapper">
              <strong>Last updated: </strong><span>{
                monthNames[(harvest.updated_at.slice(5, 7) % 12)].slice(0, 3) + ' '
                + harvest.updated_at.slice(8, 10) + ' '
                + harvest.updated_at.slice(0, 4)
              }</span>
            </Typography>
          </CardContent>
        </Card>
      </div >
    );
  }
}


export default withStyles(styles)(InfoWindow);