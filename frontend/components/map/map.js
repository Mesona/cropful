import React, { Component } from 'react';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      currentLongitude: this.props.options.center.lng,
      currentLatitude: this.props.options.center.lat,
      showNewHarvest: false,
      markersLoaded: false,
      markers: [],
    };

    this.onScriptLoad = this.onScriptLoad.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);

    this.setState({
      map: map,
    });

    if (map !== null) {
      this.props.onMapLoad(map);
    }
  }

  componentDidMount() {
    let env = process.env.NODE_ENV
    if (!window.google) {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      if (process.env.NODE_ENV !== "production") {
        console.log("NOT IN PRODUCTION")
      } else {
        console.log("PRODUCTION")
      }

      // This is necessary because Heroku requires s.src to have a specific formatting,
      // which is different from the specific formatting local testing requires
      env === "production" ? s.src = `https://maps.google.com/maps/api/js?key=${window.googleAPIKey}` :
                             s.src = `https://maps.google.com/maps/api/js?key=` + window.googleAPIKey;

      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      
      // Below is important. 
      // We cannot access google.maps until it's finished loading
      s.addEventListener('load', () => {
        this.onScriptLoad();
      })

    } else {
      this.onScriptLoad();
    }
  }

  render() {
    return (
      <div className="mapMap" id={this.props.id}>
      </div>
    );
  }
}

export default Map;