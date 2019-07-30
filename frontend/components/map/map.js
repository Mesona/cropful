import React, { Component } from 'react';
import { render } from 'react-dom'
import { API_KEY } from '../../apiKey';
import NewHarvest from './newHarvest';

class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      map: null,
      currentLongitude: this.props.options.center.lng,
      currentLatitude: this.props.options.center.lat,
    }

    this.onScriptLoad = this.onScriptLoad.bind(this)
    this.getStartingCoords = this.getStartingCoords.bind(this);
    this.recenterMap = this.recenterMap.bind(this);
    this.addMarker = this.addMarker.bind(this);
    this.addHarvest = this.addHarvest.bind(this);
  }

  onScriptLoad() {
    const map = new window.google.maps.Map(
      document.getElementById(this.props.id),
      this.props.options);

    this.setState({
      map: map,
    });

    // WORKING for default marker
    // map.addListener('click', (e) => {
    //   this.addMarker(e.latLng, map);
    // });

    map.addListener('click', (e) => {
      this.addHarvest(e.latLng, map);
    });

    this.props.onMapLoad(this.state.map);
    this.recenterMap();
  }

  getStartingCoords() {
    navigator.geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        this.setState({
          currentLongitude: position.coords.longitude,
          currentLatitude: position.coords.latitude,
        });
      }
    );
  }

  recenterMap() {
    const map = this.state.map;

    if (map) {
        let center = new window.google.maps.LatLng(this.state.currentLatitude, this.state.currentLongitude);
        map.panTo(center)
    }

  }

  addMarker(location, map) {
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
    var marker = new google.maps.Marker({
      position: location,
      // label: "test",
      map: map
    });
  }

  addHarvest(location, map) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });

    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: location.lat(), lng: location.lng() }
    });
    infoWindow.addListener('domready', e => {
      render(<NewHarvest location={location} />, document.getElementById('infoWindow'))
    })
    infoWindow.open(map);
  }

  componentDidMount() {
    if (!window.google) {
      let s = document.createElement('script');
      s.type = 'text/javascript';
      s.src = `https://maps.google.com/maps/api/js?key=` + API_KEY;
      let x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
      // Below is important. 
      //We cannot access google.maps until it's finished loading
      this.getStartingCoords();
      s.addEventListener('load', e => {
        this.onScriptLoad()
      })
    } else {
      this.onScriptLoad()
    }

  }

  render() {
    return (
      <div style={{ width: 500, height: 500 }} id={this.props.id}>
      </div>
    );
  }
}

export default Map;