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
      console.log("onScriptLoad map is NOT null")
      console.log("harvest: " + this.props.harvest)
      this.props.onMapLoad(map);
    }
  }

  componentDidMount() {
    // this.onScriptLoad();
    if (!window.google) {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      // let t = "https://maps.google.com/maps/api/js?key=" + window.googleAPIKey;
      // console.log("~~~~~ T HERE ~~~~~ " + t)
      // s.src = t
      s.src = `https://maps.google.com/maps/api/js?key=${window.googleAPIKey}`;
      // s.src = "";
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      
      // console.log("~~~~~ S TYPE ~~~~~: " + s.type)
      // console.log("~~~~~ S SRC ~~~~~: " + s.src)
      // console.log("~~~~~ X ~~~~~: " + x)

      // Below is important. 
      // We cannot access google.maps until it's finished loading
      s.addEventListener('load', () => {
        this.onScriptLoad();
      })

    } else {
      this.onScriptLoad();
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.map !== null && prevState.map !== this.state.map) {
  //     this.onScriptLoad();
  //   }
  // }

  render() {
    return (
      <div className="mapMap" id={this.props.id}>
      </div>
    );
  }
}

export default Map;