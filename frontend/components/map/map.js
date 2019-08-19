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
    this.loadMarkers = this.loadMarkers.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);

    this.setState({
      map: map,
    });

    console.log("before mapload")
    console.log("map: " + map)
    console.log("onMapLoad: " + this.props.onMapLoad)
    this.props.onMapLoad(map);
    console.log("after mapload")

    // map.addListener('drag', () => {
    //   this.loadMarkers(map);
    // })

    // map.addListener('click', () => {
      // this.state.loadMarkers === false ? this.loadMarkers() : "";
      // console.log("click")
      // this.loadMarkers();
    // })

    // this.loadMarkers();
  }

  loadMarkers() {
    if (this.state.markersLoaded === false && this.state.map !== null) {
      this.setState({
        markersLoaded: true,
      })
      this.props.onMapLoad(this.state.map);
    }
  }

  componentDidMount() {
    if (!window.google) {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=` + window.googleAPIKey;
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);

      // Below is important. 
      // We cannot access google.maps until it's finished loading
      s.addEventListener('load', () => {
        console.log("script loaded")
        this.onScriptLoad()
      })

    } else {
      this.onScriptLoad();
    }

  }

  render() {
    // if (this.state.markersLoaded === false) {
    //   this.loadMarkers();
    // }

    return (
      // <div style={{ width: 500, height: 500 }} id={this.props.id}>
      <div className="mapMap" id={this.props.id}>
      </div>
    );
  }
}

export default Map;