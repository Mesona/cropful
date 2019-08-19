import React, { Component } from 'react';
import { API_KEY } from '../../apiKey';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      currentLongitude: this.props.options.center.lng,
      currentLatitude: this.props.options.center.lat,
      showNewHarvest: false,
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

    map.addListener('drag', () => {
      console.log("drag run")
      // this.props.onMapLoad(map);
      this.loadMarkers(map);
    })

    console.log("In script")
    console.log("props.onMapLoad: " + this.props.onMapLoad)

    this.loadMarkers(map);
  }

  loadMarkers(map) {
    this.props.onMapLoad(map);

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.map !== prevState.map) {
      this.loadMarkers(this.state.map);
    }
  }

  componentDidMount() {
    if (!window.google) {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=` + API_KEY;
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      // We cannot access google.maps until it's finished loading
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })

      console.log("window google")
    } else {
      console.log("Script loaded")
      this.onScriptLoad()
    }

    console.log('mounted')

  }

  render() {
    return (
      // <div style={{ width: 500, height: 500 }} id={this.props.id}>
      <div className="mapMap" id={this.props.id}>
      </div>
    );
  }
}

export default Map;